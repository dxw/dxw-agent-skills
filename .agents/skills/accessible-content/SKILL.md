---
name: accessible-content
description: Helps write and review content against dxw accessibility house style, with practical checks for alt text, link text, headings, form design, and readability. Use when users ask for accessible content guidance, content accessibility review, or improvements to existing copy. Focus on concrete, practical recommendations that support all users including those using assistive technology.
tags: [accessibility, content, writing, forms]
category: content quality
owner: dxw
status: active
last_reviewed: 2026-06-18
---

Source: [dxw Accessibility Manual — Creating accessible content](https://accessibility.dxw.com/content/)

## Instructions

Use this skill when the user asks for accessible content guidance, accessibility-focused content review, or improvements to existing content (copy, headings, alt text, forms, etc.).

When responding:

- Apply dxw house style guidelines for accessible content.
- WCAG 2.2 AA compliance is the baseline, but focus on practical improvements that support all users.
- Give concrete, specific recommendations tied to real examples from the content being reviewed.
- If suggesting changes, explain why they improve accessibility and user experience.
- Test recommendations against the decision trees and frameworks provided (e.g. W3C alt text decision tree, Amy Cesal's chart alt model).

Check content in this order:

1. **Images and non-text content:**
   - Do images need alt text? Use [W3C alt text decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/).
   - If present, is alt text short, descriptive, and avoids "an image of"?
   - For charts/graphs, use Amy Cesal's model: `[chart type] of [type of data] where [key finding]`
   - Is decorative imagery marked with `alt=""` only?
   - Are data sources linked or explained textually?

2. **Multimedia (video, audio):**
   - Does video include captions/subtitles?
   - Is a descriptive transcript provided (including non-speech audio descriptions)?
   - Does audio-only content have a transcript?
   - Is audio description available where appropriate?

3. **Link text:**
   - Is link text descriptive and meaningful in isolation?
   - Are generic phrases avoided ("click here", "read more")?
   - Do multiple links to the same destination use identical text?
   - Do links to different destinations use different text?
   - For document links, does the link point to the hosting page, not directly to the file?
   - Is adequate spacing around link targets to avoid motor control issues?

4. **Headings and structure:**
   - Is there exactly one `<h1>` per page?
   - Do headings follow strict hierarchy (h1 → h2 → h3 with no skipped levels)?
   - Are headings descriptive with important information frontloaded?
   - Are headings used for navigation aid, not visual styling?
   - Does the heading structure create a logical outline?

5. **Readability and plain language:**
   - Is jargon avoided or explained?
   - Are sentences and paragraphs short?
   - Is active voice used?
   - Is content structured with headings, short paragraphs, and lists?
   - Can the content be understood by someone reading 2-3 years below the target audience's education level?

6. **Forms:**
   - Is the form flow logical (eligibility questions first)?
   - Does conditional logic show only relevant questions?
   - Are long forms broken into screens with one thing per screen?
   - Are questions tested with users to ensure they're understood?
   - Do field labels explain jargon or where to find information?
   - Are only essential questions asked?
   - Do text inputs accept various formats (accents, non-Latin scripts, different spacing)?
   - Are gender options inclusive (not just male/female)?
   - Is there no time limit on form completion?
   - Are error messages helpful, positive, and include hints for fixing?
   - After submission, does the page confirm what was said, what happens next, and any next steps?

7. **Data presentation:**
   - Are tables only used for tabular data, not layout?
   - Do data tables have proper `<th>` headers with `scope` attributes?
   - For complex data, is it presented in multiple formats (table + summary)?
   - Is underlying data available in accessible formats?

Output expectations:

- For reviews: list issues by content type and severity, then provide specific fixes or rewrites.
- For creation guidance: suggest specific structures, examples, and templates (e.g., heading hierarchy, form flow, alt text format).
- Mention assumptions and areas requiring user testing (comprehension level, form usability, link target clarity).
