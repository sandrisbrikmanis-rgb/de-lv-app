$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$www = Join-Path $root 'www'

if (-not (Test-Path $www)) {
    New-Item -ItemType Directory -Path $www | Out-Null
}

$rootFiles = @(
    'index.html',
    'manifest.json',
    'ui.js',
    'style.css',
    'groups.js',
    'storage.js'
)

foreach ($file in $rootFiles) {
    Copy-Item -Path (Join-Path $root $file) -Destination (Join-Path $www $file) -Force
}

$dataSrc = Join-Path $root 'data'
$dataDst = Join-Path $www 'data'
if (Test-Path $dataDst) {
    Remove-Item -Path $dataDst -Recurse -Force
}
Copy-Item -Path $dataSrc -Destination $dataDst -Recurse -Force

$iconsSrc = Join-Path $root 'icons'
$iconsDst = Join-Path $www 'icons'
if (Test-Path $iconsDst) {
    Remove-Item -Path $iconsDst -Recurse -Force
}
Copy-Item -Path $iconsSrc -Destination $iconsDst -Recurse -Force

Write-Host "Web assets synced to www/"
