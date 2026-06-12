---
name: accessible-code
description: Helps write and review code against dxw accessibility house style, with practical checks for semantic HTML, naming, and keyboard/focus behaviour. Use when users ask for accessible implementation guidance, accessibility-focused code review, or improvements to existing UI code. Focus on concrete, code-level recommendations that improve assistive technology support.
tags: [accessibility, frontend, html, css]
category: code quality
owner: dxw
status: active
last_reviewed: 2026-06-12
---

Source: [dxw Accessibility Manual - Writing accessible code](https://accessibility.dxw.com/development/writing-acessible-code/)

## Instructions

Use this skill when the user asks for accessible implementation guidance, accessibility-focused code review, or improvements to existing UI code.

When responding:

- Prefer native HTML semantics over ARIA workarounds.
- Apply dxw house style and GOV.UK Design System patterns where appropriate.
- Code should have WCAG 2.2 AA compliance as a baseline, but focus on practical improvements that enhance assistive technology support.
- Give concrete, code-level recommendations, not generic accessibility advice.
- If suggesting changes, explain why they improve assistive technology support.

Check the following areas in order:

1. Page structure and landmarks:
- Ensure one primary `<main>` exists.
- Ensure headings are ordered and do not skip levels.
- Ensure page `<title>` and `<h1>` are unique and meaningful.
- If there are repeated landmarks like multiple `<nav>`, require distinct accessible labels.

2. Correct element choice:
- Use the right native element first (`<a>`, `<button>`, `<input>`, etc.).
- Avoid replacing native controls with generic `<div>` or `<span>` plus ARIA.
- Only add ARIA when native semantics cannot express the requirement.

3. Accessible names and labels:
- Ensure links, buttons, and form fields have unique, meaningful accessible names.
- Ensure every form input has an associated `<label>` (prefer visible labels).
- For icon-only controls, prefer visually hidden text over `aria-label` where feasible.
- Where repeated actions exist (for example multiple "Edit" links), include contextual hidden text.

4. Keyboard and visual feedback:
- Ensure interactive elements have visible `:focus` states.
- Ensure `:hover`, `:focus`, and `:active` feedback is present and consistent.
- Do not remove browser focus outlines unless replaced with an accessible alternative.

5. Design system usage:
- Use GOV.UK Design System components for Service Standard contexts.
- Treat component-library usage as a starting point, not proof of accessibility.
- Flag where manual testing or accessibility tree checks are still required.

Output expectations:

- For reviews: list issues by severity, then provide exact fixes.
- For implementation requests: provide accessible markup/CSS patterns directly.
- Mention any assumptions and what should be manually tested (keyboard, screen reader naming, focus order).
