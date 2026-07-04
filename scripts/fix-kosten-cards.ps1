$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot

function Replace-CardBlock([string]$RelPath, [int]$StartLine, [int]$EndLine, [string[]]$NewBlock) {
  $filePath = Join-Path $root $RelPath
  $lines = [System.Collections.Generic.List[string]]::new()
  $lines.AddRange([string[]][System.IO.File]::ReadAllLines($filePath, [System.Text.Encoding]::UTF8))
  $startIdx = $StartLine - 1
  $endIdx = $EndLine - 1
  $result = New-Object System.Collections.Generic.List[string]
  for ($i = 0; $i -lt $startIdx; $i++) { [void]$result.Add($lines[$i]) }
  foreach ($l in $NewBlock) { [void]$result.Add($l) }
  for ($i = $endIdx + 1; $i -lt $lines.Count; $i++) { [void]$result.Add($lines[$i]) }
  $utf8 = New-Object System.Text.UTF8Encoding $false
  [System.IO.File]::WriteAllLines($filePath, $result.ToArray(), $utf8)
  Write-Output "Replaced $RelPath lines $StartLine-$EndLine"
}

$a1Card = @(
  '    {',
  '    "de": "kosten",',
  '    "lv": "maksāt • nogaršot",',
  '    "level": "A1"',
  '  },'
)

$b1Card = @(
  '  {',
  '    "de": "Kosten",',
  '    "de_article": "die",',
  '    "de_plural": "die Kosten",',
  '    "lv": "izmaksas",',
  '    "level": "B1"',
  '  },'
)

Replace-CardBlock "data/a1.js" 8905 9149 $a1Card
Replace-CardBlock "data/b1.js" 38409 38586 $b1Card
Write-Output "Kosten cards simplified."
