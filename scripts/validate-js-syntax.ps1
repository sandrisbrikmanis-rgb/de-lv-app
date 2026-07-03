param(
  [string[]]$Files = @(
    "ui.js",
    "data/a1.js",
    "data/a2.js",
    "data/b1.js",
    "data/comparisonStudy.js"
  )
)

$root = Split-Path -Parent $PSScriptRoot
$errors = @()

function Test-JsBalance([string]$Path) {
  $text = [System.IO.File]::ReadAllText($Path)
  $inString = $false
  $escape = $false
  $quote = ''
  $stack = New-Object System.Collections.Stack
  $line = 1
  $col = 0

  for ($i = 0; $i -lt $text.Length; $i++) {
    $ch = $text[$i]
    if ($ch -eq "`n") { $line++; $col = 0; continue }
    $col++

    if ($inString) {
      if ($escape) { $escape = $false; continue }
      if ($ch -eq '\') { $escape = $true; continue }
      if ($ch -eq $quote) { $inString = $false; $quote = '' }
      continue
    }

    if ($ch -eq '"' -or $ch -eq "'") {
      $inString = $true
      $quote = $ch
      continue
    }

  if ($ch -eq '/' -and ($i + 1) -lt $text.Length) {
      $next = $text[$i + 1]
      if ($next -eq '/') {
        while ($i -lt $text.Length -and $text[$i] -ne "`n") { $i++ }
        continue
      }
      if ($next -eq '*') {
        $i += 2
        while ($i -lt ($text.Length - 1)) {
          if ($text[$i] -eq '*' -and $text[$i + 1] -eq '/') { $i++; break }
          if ($text[$i] -eq "`n") { $line++; $col = 0 }
          $i++
        }
        continue
      }
    }

    switch ($ch) {
      '{' { $stack.Push(@{ ch = '{'; line = $line; col = $col }) }
      '}' {
        if ($stack.Count -eq 0 -or $stack.Peek().ch -ne '{') {
          return "Unexpected } at line $line"
        }
        [void]$stack.Pop()
      }
      '[' { $stack.Push(@{ ch = '['; line = $line; col = $col }) }
      ']' {
        if ($stack.Count -eq 0 -or $stack.Peek().ch -ne '[') {
          return "Unexpected ] at line $line"
        }
        [void]$stack.Pop()
      }
      '(' { $stack.Push(@{ ch = '('; line = $line; col = $col }) }
      ')' {
        if ($stack.Count -eq 0 -or $stack.Peek().ch -ne '(') {
          return "Unexpected ) at line $line"
        }
        [void]$stack.Pop()
      }
    }
  }

  if ($inString) { return "Unterminated string" }
  if ($stack.Count -gt 0) {
    $open = $stack.Peek()
    return "Unclosed $($open.ch) from line $($open.line)"
  }
  return $null
}

foreach ($file in $Files) {
  $path = Join-Path $root $file
  if (-not (Test-Path $path)) {
    $errors += "Missing: $file"
    continue
  }
  $issue = Test-JsBalance $path
  if ($issue) {
    $errors += "$file : $issue"
    Write-Output "FAIL $file - $issue"
  } else {
    Write-Output "OK   $file - braces/brackets balanced, strings closed"
  }
}

if ($errors.Count -gt 0) {
  Write-Output "VALIDATION FAILED ($($errors.Count) issue(s))"
  exit 1
}

Write-Output "VALIDATION PASSED ($($Files.Count) files)"
