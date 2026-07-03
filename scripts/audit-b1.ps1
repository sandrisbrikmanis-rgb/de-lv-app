# B1-only audit - safe line-level parsing, no ConvertTo-Json on data files
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$filePath = Join-Path $root "data/b1.js"
$blockSize = 500
$semi = ';'

function Split-Meanings([string]$s) {
    if ([string]::IsNullOrWhiteSpace($s)) { return @() }
    $parts = $s -split '\s*\u2022\s*|\s*;\s*'
    return @($parts | ForEach-Object { $_.Trim().ToLower() } | Where-Object { $_ })
}

function Test-ProperNoun([string]$word) {
    $lower = $word.ToLower()
    $stems = @("vacij", "latvij", "berlin", "rig", "francij", "hamburg", "minhen", "vin", "pariz", "london", "eirop", "amerik")
    foreach ($s in $stems) { if ($lower.StartsWith($s)) { return $true } }
    return $false
}

function Test-UppercaseLvIssue([string]$text, [string]$field, [string]$de) {
    $issues = @()
    if ([string]::IsNullOrWhiteSpace($text)) { return $issues }
    $bullet = [char]0x2022
    $segs = if ($text.Contains($bullet)) {
        @($text -split [regex]::Escape([string]$bullet) | ForEach-Object { $_.Trim() })
    } else { @($text.Trim()) }
    foreach ($seg in $segs) {
        if ($seg -match '^([^/\s\u2022,;:.!?()]+)') {
            $first = $Matches[1]
            if ($first.Length -gt 0 -and $first[0] -cmatch '[A-Z]' -and -not (Test-ProperNoun $first)) {
                $issues += [pscustomobject]@{ Type = "uppercase_lv"; De = $de; Field = $field; Segment = $seg }
            }
        }
    }
    return $issues
}

function Test-BadComparisonBlock([string[]]$blockLines, [string]$de) {
    $issues = @()
    $text = $blockLines -join "`n"
    if ($text -notmatch '"word"') { return $issues }

    $words = [regex]::Matches($text, '"word":\s*"([^"]*)"') | ForEach-Object { $_.Groups[1].Value.ToLower() }
    $examples = [regex]::Matches($text, '"example":\s*"([^"]*)"') | ForEach-Object { $_.Groups[1].Value }

    foreach ($g in ($words | Group-Object)) {
        if ($g.Count -gt 1) {
            $issues += [pscustomobject]@{ Type = "comparison_duplicate_word"; De = $de; Word = $g.Name }
        }
    }

    $exSeen = @{}
    foreach ($ex in $examples) {
        $key = $ex.ToLower()
        if ($exSeen.ContainsKey($key)) {
            $issues += [pscustomobject]@{ Type = "comparison_duplicate_example"; De = $de; Example = $ex }
        }
        $exSeen[$key] = $true
        if ($ex -match '=\s*([A-Z])') {
            $issues += [pscustomobject]@{ Type = "comparison_uppercase_lv"; De = $de; Example = $ex }
        }
        $dePart = if ($ex -match '=') { ($ex -split '=', 2)[0].Trim() } else { $ex.Trim() }
        if ($dePart -notmatch '\.' -and ($dePart -split '\s+').Count -le 3) {
            $issues += [pscustomobject]@{ Type = "comparison_short_example"; De = $de; Example = $ex }
        }
    }

    if ($words.Count -ge 3) {
        $prefixes = @($words | ForEach-Object {
            if ($_ -match '^(ab|an|auf|aus|bei|ein|mit|nach|vor|zu|zer|wider|durch|uber|unter|hinter|neben|gegen|um|weg)') { $Matches[1] }
        } | Where-Object { $_ })
        if ($prefixes.Count -ge 2) {
            $top = ($prefixes | Group-Object | Sort-Object Count -Descending | Select-Object -First 1)
            if ($top.Count -ge [Math]::Ceiling($words.Count * 0.6)) {
                $issues += [pscustomobject]@{ Type = "comparison_prefix_grouping"; De = $de; Words = ($words -join ", ") }
            }
        }
    }

    return $issues
}

$lines = [System.IO.File]::ReadAllLines($filePath)
$cards = @()
$current = $null
$depth = 0
$inStudy = $false
$studyDepth = 0
$hasComparison = $false
$comparisonLines = @()
$compDepth = 0

foreach ($line in $lines) {
    $open = ([regex]::Matches($line, '\{')).Count
    $close = ([regex]::Matches($line, '\}')).Count

    if ($null -eq $current -and $line -match '^\s*\{\s*$') {
        $current = [ordered]@{ De = ""; Lv = ""; Translation = ""; HasStudy = $false; HasComparison = $false; ComparisonLines = @() }
        $depth = 1; $inStudy = $false; $hasComparison = $false; $comparisonLines = @(); continue
    }
    if ($null -eq $current) { continue }

    if ($depth -eq 1 -and $line -match '^\s*"de":\s*"([^"]*)"') { $current.De = $Matches[1] }
    elseif ($depth -eq 1 -and $line -match '^\s*"lv":\s*"([^"]*)"') { $current.Lv = $Matches[1] }
    elseif ($line -match '^\s*"study"\s*:\s*\{') { $inStudy = $true; $studyDepth = 1; $current.HasStudy = $true }
    elseif ($inStudy -and $line -match '^\s*"translation":\s*"([^"]*)"') { $current.Translation = $Matches[1] }
    elseif ($inStudy -and $line -match '^\s*"comparison"\s*:\s*\[') {
        $hasComparison = $true; $current.HasComparison = $true; $comparisonLines = @($line); $compDepth = 1
    }
    elseif ($hasComparison) {
        $comparisonLines += $line
        $compDepth += ([regex]::Matches($line, '\[')).Count - ([regex]::Matches($line, '\]')).Count
        if ($compDepth -le 0) { $hasComparison = $false; $current.ComparisonLines = $comparisonLines }
    }

    if ($inStudy) { $studyDepth += $open - $close; if ($studyDepth -le 0) { $inStudy = $false } }
    $depth += $open - $close
    if ($depth -le 0) { $cards += [pscustomobject]$current; $current = $null; $depth = 0 }
}

$studyCount = @($cards | Where-Object HasStudy).Count
$compCount = @($cards | Where-Object HasComparison).Count
$numBlocks = [Math]::Ceiling($cards.Count / $blockSize)

Write-Output "=== B1 AUDIT ==="
Write-Output "Total words: $($cards.Count)"
Write-Output "Study cards: $studyCount"
Write-Output "Comparison cards: $compCount"
Write-Output "Blocks ($blockSize): $numBlocks"
Write-Output ""

$allIssues = @()
foreach ($c in $cards) {
    if ($c.Lv.Contains($semi)) {
        $allIssues += [pscustomobject]@{ Type = "semicolon_in_lv"; De = $c.De; Lv = $c.Lv }
    }
    $allIssues += Test-UppercaseLvIssue $c.Lv "lv" $c.De
    if ($c.Translation.Contains($semi)) {
        $allIssues += [pscustomobject]@{ Type = "semicolon_in_translation"; De = $c.De; Translation = $c.Translation }
    }
    $allIssues += Test-UppercaseLvIssue $c.Translation "translation" $c.De

    if ($c.Translation) {
        $lvP = Split-Meanings $c.Lv; $trP = Split-Meanings $c.Translation
        if ($lvP.Count -gt 0 -and $trP.Count -gt 0) {
            $lvOnly = @($lvP | Where-Object { $trP -notcontains $_ })
            $trOnly = @($trP | Where-Object { $lvP -notcontains $_ })
            if ($lvOnly.Count -or $trOnly.Count) {
                $allIssues += [pscustomobject]@{ Type = "lv_translation_mismatch"; De = $c.De; Lv = $c.Lv; Translation = $c.Translation }
            }
        }
        elseif ($c.Lv -and ($c.Lv.Trim().ToLower() -ne $c.Translation.Trim().ToLower())) {
            $bullet = [char]0x2022
            if (-not $c.Lv.Contains($bullet) -and -not $c.Translation.Contains($bullet)) {
                $allIssues += [pscustomobject]@{ Type = "lv_translation_mismatch_simple"; De = $c.De; Lv = $c.Lv; Translation = $c.Translation }
            }
        }
    }

    if ($c.HasComparison) { $allIssues += Test-BadComparisonBlock $c.ComparisonLines $c.De }
}

$byType = $allIssues | Group-Object Type | Sort-Object Count -Descending
Write-Output "=== ISSUE SUMMARY ==="
foreach ($g in $byType) { Write-Output ("  {0}: {1}" -f $g.Name, $g.Count) }
Write-Output ("TOTAL: {0}" -f $allIssues.Count)
Write-Output ""
Write-Output "=== FIRST 40 ISSUES ==="
$allIssues | Select-Object -First 40 | Format-Table Type, De, Field, Lv, Translation, Segment, Word, Example -AutoSize -Wrap
