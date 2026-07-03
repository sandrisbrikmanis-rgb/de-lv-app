$e = Get-Content (Join-Path $PSScriptRoot "extracted-nouns.json") -Raw -Encoding UTF8 | ConvertFrom-Json
$arr = @($e)
Write-Output "Count: $($arr.Count)"
Write-Output "First: $($arr[0].noun)"
