param(
  [Parameter(Mandatory = $true, ValueFromRemainingArguments = $true)]
  [string[]]$Files
)

$root = Split-Path -Parent $PSScriptRoot

function Replace-ListSemicolons([string]$Value) {
  $bullet = [string][char]0x2022
  return $Value -replace '; ', " $bullet "
}

function Process-File([string]$FilePath) {
  $lines = [System.IO.File]::ReadAllLines($FilePath)
  $inSectionAccents = $false
  $sectionAccentsDepth = 0
  $inProseArray = $false
  $proseArrayDepth = 0
  $changes = 0

  for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    $newLine = $line

    if ($inSectionAccents) {
      $sectionAccentsDepth += ([regex]::Matches($line, '\{')).Count
      $sectionAccentsDepth -= ([regex]::Matches($line, '\}')).Count
      if ($sectionAccentsDepth -le 0) {
        $inSectionAccents = $false
        $sectionAccentsDepth = 0
      }
    }
    elseif ($line -match '"(sectionAccents|accents)":\s*\{') {
      $inSectionAccents = $true
      $sectionAccentsDepth = ([regex]::Matches($line, '\{')).Count - ([regex]::Matches($line, '\}')).Count
      if ($sectionAccentsDepth -le 0) { $sectionAccentsDepth = 1 }
    }

    if ($line -match '"(text|lead|explanation|description|example)":\s*"') {
      continue
    }

    if ($line -match '"(important|info)":\s*\[') {
      $inProseArray = $true
      $proseArrayDepth = 1
      continue
    }

    if ($inProseArray) {
      $proseArrayDepth += ([regex]::Matches($line, '\[')).Count
      $proseArrayDepth -= ([regex]::Matches($line, '\]')).Count
      if ($proseArrayDepth -le 0) {
        $inProseArray = $false
        $proseArrayDepth = 0
      }
      continue
    }

    if ($line -match '"(translation|meaning)":\s*"([^"]*)"') {
      $key = $Matches[1]
      $value = $Matches[2]
      if ($value -match ';') {
        $fixed = Replace-ListSemicolons $value
        $newLine = $line -replace [regex]::Escape('"'+$key+'": "'+$value+'"'), ('"'+$key+'": "'+$fixed+'"')
      }
    }

    if ($newLine -eq $line -and $inSectionAccents -and $line -match '^\s+"[^"]*;[^"]*",?\s*$') {
      $newLine = Replace-ListSemicolons $line
    }

    if ($newLine -ne $line) {
      $lines[$i] = $newLine
      $changes++
    }
  }

  if ($changes -gt 0) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllLines($FilePath, $lines, $utf8)
  }

  return $changes
}

$total = 0
foreach ($target in $Files) {
  $filePath = if ([System.IO.Path]::IsPathRooted($target)) { $target } else { Join-Path $root $target }
  $count = Process-File $filePath
  $total += $count
  $relative = $filePath.Substring($root.Length).TrimStart('\', '/')
  Write-Output "$relative`: $count line(s) updated"
}

Write-Output "Total: $total line(s) updated"
