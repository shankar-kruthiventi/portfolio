---
name: add-case-study
description: Add a new case study to the React portfolio. Use when the user wants to add, draft, or update a project/work case study (company, context, engineering, outcome) on the portfolio site.
---

# Add a case study

## Inputs to collect first
Ask for anything missing before writing code:
- Company and project name (title format: `Company · Project`, e.g. "OakNorth · SME loan workflows")
- Context: the problem or situation, in one sentence
- Engineering: what was built and the key tech, in one sentence
- Outcome: one measurable result (e.g. "Reduced loan-processing time by 70%")
- One-line teaser for the summary rail/list
- Optional: tags (Angular, Node.js, TypeScript, CI/CD), role, year, screenshots

## Content rules
- Exactly three sections, in this order and with these labels: `01 / Context`, `02 / Engineering`, `03 / Outcome`.
- One sentence each. Lead with the problem, then the solution, then the number.
- Outcomes must be a real figure the user supplied. Never invent or round up metrics.
- Keep the voice consistent with existing entries: concise, no buzzwords, no first person.
- Don't disclose confidential details: no client data, internal URLs, or unreleased product names.

## Where it goes in the codebase
1. Add a new entry to the case-study data file (e.g. `src/data/caseStudies.ts`) matching the existing type:
   `{ id, company, project, teaser, context, engineering, outcome, tags, images? }`
2. Use a kebab-case `id` (e.g. `oaknorth-sme-loan-workflows`).
3. Keep entries in the order the portfolio displays them (newest first, unless the file says otherwise).
4. Don't create a new component. The existing story-rail/case-study component renders from the data.

## Assets
- Screenshots go in `public/images/case-studies/<id>/`.
- Name them `<id>-<view>-<device>-<theme>.png`, e.g. `...-desktop-light.png`, `...-mobile-dark.png`.
- Provide light and dark variants for both desktop and mobile, with alt text describing what's shown.
- Optimize images before adding them (WebP or compressed PNG, under about 300 KB each).

## Checks before finishing
- [ ] Types compile (`npm run build` or `tsc --noEmit`) and lint passes
- [ ] Renders correctly in light and dark themes, at desktop and mobile widths
- [ ] The story rail and navigation include the new entry, with no layout shift or overflow
- [ ] Alt text is present, and the case study is keyboard-accessible
- [ ] Copy matches the three-section format with no placeholder text

## Output
Summarize what was added (id, files touched) and flag any assumption, especially metrics or images that still need to be supplied.