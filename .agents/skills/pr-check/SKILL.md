---
name: pr-check
description: Reviews staged changes before a pull request. Use when the user is about to push, open a PR, or wants a final check on their work.
disable-model-invocation: false
tags: [git, code review]
category: code review
owner: joesb
status: active
last_reviewed: 2026-06-09
---
## What to review
!`git diff main…HEAD --staged`

## Instructions
Read the diff above. Check for:
- Hardcoded values or secrets that shouldn't be committed
- Missing error handling on any new functions
- Tests that should exist but doesn't
- Anything that looks like a temporary hack left in by accident

Give a direct summary. If everything looks clean, say so. If something needs attention, be specific about the line and the issue.
