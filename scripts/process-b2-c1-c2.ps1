param(
  [string[]]$Files = @("data/c1.js", "data/c2.js", "data/b2.js")
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$bullet = [string][char]0x2022

function Get-Slug([string]$De) {
  $slug = $De -replace '^(?i)(der|die|das)\s+', ''
  $slug = $slug.ToLowerInvariant()
  $slug = $slug -replace 'ae', 'ae' # placeholder keep umlaut replacements below
  $slug = $slug -replace [char]0x00E4, 'ae'
  $slug = $slug -replace [char]0x00F6, 'oe'
  $slug = $slug -replace [char]0x00FC, 'ue'
  $slug = $slug -replace [char]0x00DF, 'ss'
  $slug = $slug -replace '\s+', '-'
  $slug = $slug -replace '[^a-z0-9-]+', ''
  return $slug.Trim('-')
}

function Get-LowerText([string]$Value) {
  return ([string]$Value).ToLower()
}

function Replace-ListSemicolons([string]$Value) {
  if ([string]::IsNullOrWhiteSpace($Value) -or $Value -notmatch ';') { return $Value }
  return ($Value -replace ';\s*', " $bullet ").Trim()
}

function Get-Capitalized([string]$Value) {
  $text = $Value.Trim()
  if (-not $text) { return $text }
  return $text.Substring(0, 1).ToUpperInvariant() + $text.Substring(1)
}

function Get-Meanings([string]$Lv) {
  $items = [System.Collections.Generic.List[string]]::new()
  foreach ($part in ($Lv -split [regex]::Escape($bullet))) {
    $text = $part.Trim()
    if ($text) { [void]$items.Add($text) }
  }
  return $items.ToArray()
}

function Get-Title([string]$Lv) {
  return (@(Get-Meanings $Lv | ForEach-Object { Get-Capitalized $_ }) -join " $bullet ")
}

function Get-StripArticle([string]$De) {
  return ($De -replace '^(?i)(der|die|das)\s+', '').Trim()
}

function Get-UniqueTerms([string[]]$Terms) {
  $seen = @{}
  $result = New-Object System.Collections.Generic.List[string]
  foreach ($term in @($Terms)) {
    $value = [string]$term
    $value = $value.Trim()
    if (-not $value) { continue }
    $key = $value.ToLowerInvariant()
    if ($seen.ContainsKey($key)) { continue }
    $seen[$key] = $true
    [void]$result.Add($value)
  }
  return $result.ToArray()
}

$PrepPattern = '^(an|auf|aus|bei|mit|von|zu|in|um|nach|vor|uber|unter|hinter|neben|gegen|durch|ohne|seit|bis|wahrend|trotz|wegen|statt|anstatt|innerhalb|ausserhalb|gegenuber|entlang|oberhalb|unterhalb|infolge|aufgrund|mithilfe|laut|entgegen|samt|minus|pro|via|per|ab|anhand|angesichts|aufseiten|bezuglich|hinsichtlich|kraft|mangels|mittels|seitens|ungeachtet|unwegen|vonseiten|vorbehaltlich|zugunsten|zuungunsten|zwecks)$'
$ConjPattern = '^(aber|sondern|deshalb|deswegen|darum|jedoch|allerdings|trotzdem|weil|dass|wenn|als|obwohl|damit|sodass|bevor|nachdem|seitdem|falls|ob|denn|also|sowohl|weder|noch|entweder|sowie|indem|zwar|hingegen|dafur|dagegen|dennoch|ausserdem|zudem|folglich|somit|inzwischen|mittlerweile|eigentlich|ubrigens|bereits|kaum|fast|sogar|etwa|ungefahr|nur|auch|schon|erst|gleichwohl|indessen|infolgedessen|demnach|demzufolge|sodann|insofern|soweit|namlich|zumal|wohingegen|wobei|woraus|worauf|worin|womit|wovon|wozu|sowenig|solang|solange|sooft|sobald|sofern)$'

function Get-NormalizedDe([string]$De) {
  return ($De -replace '^(?i)(der|die|das)\s+', '').Trim().ToLowerInvariant()
    .Replace([char]0x00E4, 'ae').Replace([char]0x00F6, 'oe').Replace([char]0x00FC, 'ue').Replace([char]0x00DF, 'ss')
}

function Test-HasStructuralAmbiguity($Entry) {
  return ([string]$Entry.lv).Contains($bullet)
}

function Test-IsPrepOrConjunction($Entry) {
  $de = [string]$Entry.de
  if ($de -match '\s') { return $false }
  if ($de -match '^(?i)(der|die|das)\s+') { return $false }
  $bare = Get-NormalizedDe $de
  if ($bare -match $PrepPattern) { return $true }
  if ($bare -match $ConjPattern) { return $true }
  return $false
}

function Test-NeedsComparison($Entry) {
  return (Test-HasStructuralAmbiguity $Entry) -or (Test-IsPrepOrConjunction $Entry)
}

function Test-NeedsStudy($Entry, [string]$Level) {
  if ($Entry.study) { return $true }
  return Test-NeedsComparison $Entry
}

function Get-StudyId([string]$Level, [string]$De, [System.Collections.Generic.HashSet[string]]$UsedIds) {
  $base = "$($Level.ToLowerInvariant())-$(Get-Slug $De)"
  if (-not $base) { $base = "$($Level.ToLowerInvariant())-card" }
  $id = $base
  $suffix = 2
  while ($UsedIds.Contains($id)) {
    $id = "$base-$suffix"
    $suffix++
  }
  [void]$UsedIds.Add($id)
  return $id
}

function Get-RelatedWords($Entry, $AllWords, [int]$Limit = 3) {
  $bare = Get-StripArticle "$($Entry.de)"
  $prefix = [regex]::Match($bare, '^(ab|an|auf|aus|bei|ein|mit|nach|vor|zu|zer|wider|durch|uber|unter|hinter|neben|gegen|um|weg)', 'IgnoreCase').Groups[1].Value.ToLowerInvariant()
  $related = New-Object System.Collections.Generic.List[object]
  if ($prefix) {
    foreach ($candidate in $AllWords) {
      if ($candidate.de -eq $Entry.de) { continue }
      $candidateBare = Get-StripArticle "$($candidate.de)"
      if ($candidateBare.ToLowerInvariant().StartsWith($prefix) -and $candidateBare -ne $bare) {
        [void]$related.Add($candidate)
        if ($related.Count -ge $Limit) { break }
      }
    }
  }
  return $related.ToArray()
}

function New-ComparisonRows($Entry, $AllWords) {
  $meanings = @(Get-Meanings ([string]$Entry.lv))
  $rows = New-Object System.Collections.Generic.List[object]
  if ($meanings.Count -gt 1) {
    foreach ($meaning in $meanings) {
      $meaningText = [string]$meaning
      [void]$rows.Add([ordered]@{
        word = [string]$Entry.de
        meaning = (Replace-ListSemicolons (Get-LowerText $meaningText))
        example = "$($Entry.de) = $(Get-Capitalized $meaningText)"
      })
    }
  } else {
    $meaningText = if ($meanings.Count -gt 0) { [string]$meanings[0] } else { [string]$Entry.lv }
    [void]$rows.Add([ordered]@{
      word = [string]$Entry.de
      meaning = (Replace-ListSemicolons (Get-LowerText $meaningText))
      example = "$($Entry.de) = $(Get-Capitalized $meaningText)"
    })
  }
  foreach ($related in (Get-RelatedWords $Entry $AllWords)) {
    $relatedMeanings = @(Get-Meanings ([string]$related.lv))
    $relatedMeaning = if ($relatedMeanings.Count -gt 0) { [string]$relatedMeanings[0] } else { [string]$related.lv }
    [void]$rows.Add([ordered]@{
      word = [string]$related.de
      meaning = (Replace-ListSemicolons (Get-LowerText $relatedMeaning))
      example = "$($related.de) = $(Get-Capitalized $relatedMeaning)"
    })
  }
  while ($rows.Count -lt 3) {
    $meaningText = if ($meanings.Count -gt 0) { [string]$meanings[0] } else { [string]$Entry.lv }
    [void]$rows.Add([ordered]@{
      word = [string]$Entry.de
      meaning = (Replace-ListSemicolons (Get-LowerText $meaningText))
      example = "$($Entry.de) = $(Get-Capitalized $meaningText)"
    })
  }
  return $rows.GetRange(0, [Math]::Min(6, $rows.Count)).ToArray()
}

function New-ComparisonAccents($Rows) {
  $altColors = @('yellow', 'orange', 'red', 'blue')
  $accents = New-Object System.Collections.Generic.List[object]
  for ($i = 0; $i -lt $Rows.Count; $i++) {
    $row = $Rows[$i]
    $wordColor = if ($i -eq 0) { 'green' } else { $altColors[($i - 1) % $altColors.Count] }
    $exampleParts = if ("$($row.example)" -match '^(?<de>.+?)\s*[=–-]\s*(?<lv>.+)$') {
      @{ de = $Matches.de.Trim(); lv = $Matches.lv.Trim() }
    } else {
      @{ de = "$($row.example)".Trim(); lv = '' }
    }
    $exampleAccent = [ordered]@{}
    if ($exampleParts.de) { $exampleAccent.green = @(Get-UniqueTerms @($exampleParts.de -split '\s+' | Where-Object { $_.Length -gt 2 })) }
    if ($exampleParts.lv) { $exampleAccent.purple = @(Get-UniqueTerms @($exampleParts.lv -split '\s+' | Where-Object { $_.Length -gt 2 })) }
    [void]$accents.Add([ordered]@{
      word = [ordered]@{ $wordColor = @(Get-UniqueTerms @($row.word, (Get-StripArticle $row.word))) }
      meaning = [ordered]@{ purple = @(Get-UniqueTerms @($row.meaning, (($row.meaning -split '[/]') | ForEach-Object { $_.Trim() }))) }
      example = $exampleAccent
    })
  }
  return $accents.ToArray()
}

function New-StudyObject($Entry, [string]$Level, $AllWords, [System.Collections.Generic.HashSet[string]]$UsedIds) {
  $translation = Get-Title "$($Entry.lv)"
  $meanings = @(Get-Meanings ([string]$Entry.lv))
  $needsComparison = Test-NeedsComparison $Entry
  $comparison = if ($needsComparison) { New-ComparisonRows $Entry $AllWords } else { $null }
  $examples = New-Object System.Collections.Generic.List[object]
  $index = 0
  foreach ($meaning in ($meanings | Select-Object -First 3)) {
    $meaningText = [string]$meaning
    $suffix = if ($index -gt 0) { " ($meaningText)" } else { '' }
    [void]$examples.Add([ordered]@{
      de = "$($Entry.de)$suffix."
      lv = "$(Get-Capitalized $meaningText)."
    })
    $index++
  }
  if (-not $examples.Count) {
    [void]$examples.Add([ordered]@{ de = "$($Entry.de)."; lv = "$(Get-Capitalized ([string]$Entry.lv))." })
  }
  $mainMeaning = if ($meanings.Count -gt 0) { [string]$meanings[0] } else { [string]$Entry.lv }
  $meaningList = (@($meanings | ForEach-Object { Get-LowerText $_ }) -join " $bullet ")
  $exampleAccents = @($examples | ForEach-Object {
    [ordered]@{
      de = [ordered]@{ blue = @(Get-UniqueTerms @($Entry.de, (Get-StripArticle $Entry.de))) }
      lv = [ordered]@{ purple = @(Get-UniqueTerms @($_.lv -split '\s+' | Where-Object { $_.Length -gt 2 })) }
    }
  })
  $sectionAccents = [ordered]@{
    explanation = [ordered]@{ blue = @(Get-UniqueTerms @($Entry.de, (Get-StripArticle $Entry.de))) }
    examples = $exampleAccents
    tip = [ordered]@{ blue = @(Get-UniqueTerms @($Entry.de)) }
    important = [ordered]@{
      blue = @(Get-UniqueTerms @($Entry.de))
      purple = @(Get-UniqueTerms $meanings)
    }
  }
  if ($needsComparison -and $comparison) {
    $sectionAccents.comparison = (New-ComparisonAccents $comparison)
  }

  $study = [ordered]@{
    id = (Get-StudyId $Level $Entry.de $UsedIds)
    layout = 'standardStudy'
    translation = $translation
    explanation = ('Galven' + [char]0x0101 + ' doma: ' + $Entry.de + ' visbie' + [char]0x017E + 'k noz' + [char]0x012B + 'me ' + $meaningList + '. Noz' + [char]0x012B + 'mi nosaka konteksts un teikuma partneri.')
    examples = $examples.ToArray()
    tip = [ordered]@{
      leftBlocks = @(
        [ordered]@{ text = "Atceries: $($Entry.de) -> $translation." }
      )
    }
    important = [ordered]@{
      text = ($Entry.de + ' nav j' + [char]0x0101 + 'jauc ar l' + [char]0x012B + 'dz' + [char]0x012B + 'giem v' + [char]0x0101 + 'rdiem. Galven' + [char]0x0101 + ' noz' + [char]0x012B + 'me: ' + (Get-Capitalized $mainMeaning) + '.')
    }
    sectionAccents = $sectionAccents
  }
  if ($needsComparison -and $comparison) {
    $study.comparison = $comparison
  }
  return $study
}

function Remove-ComparisonFromStudy($Study) {
  if ($null -eq $Study) { return $Study }
  if ($Study -is [System.Collections.IDictionary]) {
    [void]$Study.Remove('comparison')
    if ($Study.sectionAccents -is [System.Collections.IDictionary]) {
      [void]$Study.sectionAccents.Remove('comparison')
    }
  }
  return $Study
}

function Fix-StudyObject($Study, $Entry, $AllWords) {
  if (-not $Study) { return $Study }
  if ($Study.translation) { $Study.translation = Replace-ListSemicolons ([string]$Study.translation) }
  if ($Study.explanation) { $Study.explanation = Replace-ListSemicolons ([string]$Study.explanation) }
  if ($Entry) {
    $meanings = @(Get-Meanings ([string]$Entry.lv))
    $mainMeaning = if ($meanings.Count -gt 0) { [string]$meanings[0] } else { [string]$Entry.lv }
    if (Test-NeedsComparison $Entry) {
      $Study.comparison = New-ComparisonRows $Entry $AllWords
    } else {
      Remove-ComparisonFromStudy $Study
    }
    if ($Study.important) {
      $Study.important.text = "$($Entry.de) nav jājauc ar līdzīgiem vārdiem. Galvenā nozīme: $(Get-Capitalized $mainMeaning)."
    }
  }
  if ($Study.comparison) {
    foreach ($row in $Study.comparison) {
      if ($row.meaning) { $row.meaning = Replace-ListSemicolons ([string]$row.meaning) }
      if ($row.example) { $row.example = Replace-ListSemicolons ([string]$row.example) }
    }
    if (-not $Study.sectionAccents) { $Study.sectionAccents = [ordered]@{} }
    $Study.sectionAccents.comparison = (New-ComparisonAccents $Study.comparison)
  } elseif ($Study.sectionAccents -is [System.Collections.IDictionary]) {
    [void]$Study.sectionAccents.Remove('comparison')
  }
  if (-not $Study.layout) { $Study.layout = 'standardStudy' }
  return $Study
}

function ConvertTo-MutableObject($InputObject) {
  if ($null -eq $InputObject) { return $null }
  if ($InputObject -is [System.Collections.IDictionary]) {
    $hash = [ordered]@{}
    foreach ($key in $InputObject.Keys) {
      $hash[$key] = ConvertTo-MutableObject $InputObject[$key]
    }
    return $hash
  }
  if ($InputObject -is [array] -or $InputObject -is [System.Collections.IEnumerable] -and -not ($InputObject -is [string])) {
    return @($InputObject | ForEach-Object { ConvertTo-MutableObject $_ })
  }
  if ($InputObject -is [psobject]) {
    $hash = [ordered]@{}
    foreach ($prop in $InputObject.PSObject.Properties) {
      $hash[$prop.Name] = ConvertTo-MutableObject $prop.Value
    }
    return $hash
  }
  return $InputObject
}

function Load-WordsFile([string]$FilePath) {
  $code = [System.IO.File]::ReadAllText($FilePath)
  if ($code -notmatch 'const\s+(\w+)\s*=') { throw "Could not detect array name in $FilePath" }
  $varName = $Matches[1]
  $level = 'B2'
  if ($varName -match '^([A-Z][0-9])_') { $level = $Matches[1] }
  if ($code -notmatch 'const\s+\w+\s*=\s*(\[[\s\S]*?\])\s*;') {
    throw "Could not extract JSON array from $FilePath"
  }
  $json = $Matches[1]
  $entries = ConvertTo-MutableObject ($json | ConvertFrom-Json)
  return @{ entries = @($entries); varName = $varName; level = $level }
}

function Save-WordsFile([string]$FilePath, [string]$VarName, $Entries) {
  $json = $Entries | ConvertTo-Json -Depth 20
  $json = $json -replace '\\u003e', '>'
  $json = $json -replace '\\u0026', '&'
  $utf8 = New-Object System.Text.UTF8Encoding $false
  [System.IO.File]::WriteAllText($FilePath, "const $VarName = $json;`n`nwindow.$VarName = $VarName;`n", $utf8)
}

foreach ($target in $Files) {
  $filePath = if ([System.IO.Path]::IsPathRooted($target)) { $target } else { Join-Path $root $target }
  $loaded = Load-WordsFile $filePath
  $entries = $loaded.entries
  $usedIds = [System.Collections.Generic.HashSet[string]]::new()
  $generated = 0
  $fixed = 0

  foreach ($entry in $entries) {
    if ($entry.study -and $entry.study.id) { [void]$usedIds.Add($entry.study.id) }
  }

  foreach ($entry in $entries) {
    if ($entry.study) {
      if (-not $entry.study.id) {
        $entry.study.id = Get-StudyId $loaded.level $entry.de $usedIds
      }
      $entry.study = Fix-StudyObject $entry.study $entry $entries
      $fixed++
      continue
    }
    if (Test-NeedsStudy $entry $loaded.level) {
      $entry.study = New-StudyObject $entry $loaded.level $entries $usedIds
      $generated++
    }
  }

  Save-WordsFile $filePath $loaded.varName $entries
  $totalStudies = @($entries | Where-Object { $_.study }).Count
  Write-Output "$target : generated=$generated fixed=$fixed totalStudies=$totalStudies"
}
