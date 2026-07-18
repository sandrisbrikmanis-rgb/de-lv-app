$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$androidDir = Join-Path $root 'android'
$galaProduktsDir = Join-Path $root 'gala-produkts'
$keystoreProps = Join-Path $androidDir 'keystore.properties'
$aabOutput = Join-Path $androidDir 'app\build\outputs\bundle\release\app-release.aab'

function Ensure-Directory {
    param([string]$Path)
    if (-not (Test-Path $Path)) {
        New-Item -ItemType Directory -Path $Path -Force | Out-Null
    }
}

function Copy-AabArtifact {
    param(
        [string]$Source,
        [string]$DestinationDir,
        [string]$FileName
    )

    Ensure-Directory -Path $DestinationDir
    $destination = Join-Path $DestinationDir $FileName
    Copy-Item -Path $Source -Destination $destination -Force
    Write-Host "Kopēts: $destination"
}

Write-Host '=== 1/4 Sinhronizē web aktīvus uz www/ ==='
& (Join-Path $PSScriptRoot 'sync-web-to-www.ps1')

Write-Host '=== 2/4 Capacitor sync (Android) ==='
Push-Location $root
try {
    npx cap sync android
    if ($LASTEXITCODE -ne 0) {
        throw "cap sync android neizdevās (exit code $LASTEXITCODE)"
    }
}
finally {
    Pop-Location
}

if (-not (Test-Path $keystoreProps)) {
    throw @"
Nav atrasts android/keystore.properties — release .aab nevar parakstīt.

1. Kopējiet android/keystore.properties.example uz android/keystore.properties
2. Aizpildiet keystore ceļu un paroles
3. Palaidiet skriptu vēlreiz
"@
}

Write-Host '=== 3/4 Gradle bundleRelease ==='
Push-Location $androidDir
try {
    & .\gradlew.bat bundleRelease
    if ($LASTEXITCODE -ne 0) {
        throw "bundleRelease neizdevās (exit code $LASTEXITCODE)"
    }
}
finally {
    Pop-Location
}

if (-not (Test-Path $aabOutput)) {
    throw "Nav atrasts .aab fails: $aabOutput"
}

$packageJson = Get-Content (Join-Path $root 'package.json') -Raw | ConvertFrom-Json
$version = if ($packageJson.version) { $packageJson.version } else { '1.0.0' }
$timestamp = Get-Date -Format 'yyyyMMdd-HHmm'
$aabFileName = "vacuvaloda-v$version-$timestamp.aab"

Write-Host '=== 4/4 Kopē .aab uz gala-produkts ==='
Copy-AabArtifact -Source $aabOutput -DestinationDir $galaProduktsDir -FileName $aabFileName

Write-Host ''
Write-Host 'Gatavs! Release .aab:'
Write-Host "  $(Join-Path $galaProduktsDir $aabFileName)"
