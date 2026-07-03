$lookupPath = Join-Path $PSScriptRoot "german-noun-lookup.json"
$raw = Get-Content $lookupPath -Raw -Encoding UTF8 | ConvertFrom-Json
$arr = @($raw)
Write-Output "Lookup count: $($arr.Count)"
$lookup = @{}
foreach ($row in $arr) {
  $key = [string]$row.noun
  if ($key) { $lookup[$key.ToLowerInvariant()] = $row }
}
Write-Output "Hash count: $($lookup.Count)"
Write-Output "Apfel hit: $($lookup.ContainsKey('apfel'))"
Write-Output "Schwangerschaftstest: $($lookup['schwangerschaftstest'].article)"
