$lookupPath = Join-Path $PSScriptRoot "german-noun-lookup.json"
$script:lookup = @{}
foreach ($row in @((Get-Content $lookupPath -Raw -Encoding UTF8) | ConvertFrom-Json)) {
  $key = [string]$row.noun
  if ($key) { $script:lookup[$key.ToLowerInvariant()] = $row }
}
Write-Output "Hash: $($script:lookup.Count)"

function Get-LookupForNoun([string]$Noun) {
  $key = $Noun.ToLowerInvariant()
  if ($script:lookup.ContainsKey($key)) { return $script:lookup[$key] }
  return $null
}

$line = '    "de": "der Apfel",'
$dePattern = '^(?<indent>\s{4})"de":\s*"(?<art>der|die|das)\s+(?<noun>[^"]+)"\s*,?\s*$'
if ($line -match $dePattern) {
  $nounRaw = $Matches['noun'].Trim()
  $hit = Get-LookupForNoun $nounRaw
  Write-Output "nounRaw=$nounRaw hit=$([bool]$hit) article=$($hit.article)"
} else { Write-Output "NO MATCH" }
