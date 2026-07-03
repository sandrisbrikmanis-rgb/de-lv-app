$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$assetsDir = Join-Path $root 'assets'

$iconSrc = Join-Path $root 'icon.png'
$splashSrc = Join-Path $root 'splash.png'

if (-not (Test-Path $iconSrc)) {
    throw "Missing source file: icon.png (expected in project root, min 1024x1024)"
}
if (-not (Test-Path $splashSrc)) {
    throw "Missing source file: splash.png (expected in project root, min 2732x2732)"
}

if (-not (Test-Path $assetsDir)) {
    New-Item -ItemType Directory -Path $assetsDir | Out-Null
}

Copy-Item -Path $iconSrc -Destination (Join-Path $assetsDir 'icon-only.png') -Force
Copy-Item -Path $splashSrc -Destination (Join-Path $assetsDir 'splash.png') -Force

Write-Host "Prepared assets/icon-only.png and assets/splash.png from root sources"
