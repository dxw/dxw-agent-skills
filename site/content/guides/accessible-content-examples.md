---
layout: layouts/doc.njk
title: Testing the Accessible Content Skill
---

Use these example prompts to test and understand the **accessible-content** skill in action.

---+---

## Example 1: Alt Text Review

**Prompt:** "Review this alt text for accessibility: `alt='graph'`"

**Expected outcome:** The skill should identify it as too vague and suggest using the Amy Cesal model for chart alt text: `[chart type] of [type of data] where [key finding]`

## Example 2: Link Text Guidance

**Prompt:** "How should I write a link to our accessibility manual?"

**Expected outcome:** The skill should recommend:
- Using descriptive text that makes sense in isolation
- Matching the destination page title where possible
- Avoiding generic phrases like "click here" or "read more"
- Including contextual information if the same URL appears multiple times

## Example 3: Form Critique

**Prompt:** "Does this form need improvement?" + [paste form HTML/copy]

**Expected outcome:** The skill should check:
- Logical flow (eligibility questions first)
- Clear labels and help text
- Error message clarity and hints
- Confirmation messaging after submission
- Inclusive field design (no gender restrictions, no time limits, etc.)

## Example 4: Heading Hierarchy Audit

**Prompt:** "Check if my heading hierarchy is correct: h1 → h2 → h4 → h3"

**Expected outcome:** The skill should flag the skipped level (h3 missing between h2 and h4) and explain that heading hierarchies must be sequential with no skipped levels.

## Example 5: Error Message Accessibility

**Prompt:** "Is this error message accessible enough: 'ERR_INVALID_NI_FORMAT'?"

**Expected outcome:** The skill should suggest:
- Using plain language instead of error codes
- Including hints or examples showing how to fix the error
- Explaining the required format (e.g., "Enter your National Insurance number in the format JC 12 34 56 B")
- Using positive, helpful tone

## Example 6: Video Content Review

**Prompt:** "What accessibility requirements does this video need?"

**Expected outcome:** The skill should request or verify:
- Captions/subtitles for all dialogue
- Descriptive transcripts including non-speech audio
- Audio descriptions for visual content
- Links to underlying data (if applicable)

## Example 7: Readable Content Check

**Prompt:** "Is this paragraph too complex? [paste paragraph]"

**Expected outcome:** The skill should assess:
- Sentence and paragraph length
- Use of jargon vs. plain language
- Active vs. passive voice
- Appropriate structure (headings, lists, short paragraphs)

## Example 8: Data Table Structure

**Prompt:** "How should I mark up this table for accessibility?" + [table content]

**Expected outcome:** The skill should verify:
- Use of `<table>` only for tabular data, not layout
- Presence of `<th>` headers with proper `scope` attributes
- Whether data could be presented more simply
- Whether alternative formats (summary paragraph, downloadable data) are offered

