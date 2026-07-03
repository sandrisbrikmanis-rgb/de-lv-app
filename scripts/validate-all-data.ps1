$root = Split-Path -Parent $PSScriptRoot
$files = @("data/a1.js","data/a2.js","data/b1.js","data/b2.js","data/c1.js","data/c2.js","data/comparisonStudy.js","data/sentences.js","data/dialogueIdMap.js","ui.js")
& "$root\scripts\validate-js-syntax.ps1" -Files $files
