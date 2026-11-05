---
name: visual-check
description: Visually verify the React portfolio by screenshotting pages across themes and viewports and reviewing them for layout, spacing, and regression issues. Use after UI changes, new case studies, or before shipping.
---

# Visual check

Look at the rendered result, not just the code. Capture screenshots, inspect them, and report or fix what's wrong.

## Setup
- Start the dev server (`npm run dev`) or use a production preview (`npm run build && npm run preview`). Prefer the production preview for final checks.
- Use Playwright (already available) with Chromium.
- Confirm the base URL and the route list with the user, or read routes from the router config. Default: all routes plus every case study.

## Capture matrix
Every page is captured in all four combinations:

| View | Viewport | Theme |
|---|---|---|
| desktop-light | 1440×900 | light |
| desktop-dark | 1440×900 | dark |
| mobile-light | 390×844 | light |
| mobile-dark | 390×844 | dark |

- Set the theme via `page.emulateMedia({ colorScheme })`, or via the theme toggle or stored preference if the site overrides the system setting.
- Use `deviceScaleFactor: 1` for checks. Use `2` only for screenshots meant to be shown or committed.
- Capture full-page screenshots, plus a viewport-only shot of the hero/above-the-fold.
- Wait for fonts, images, and animations to settle (`networkidle`, then `document.fonts.ready`). Disable animations with `reducedMotion: 'reduce'` for stable captures, and separately check the animated states you care about.
- Save to `visual-check/<date>/<route>-<device>-<theme>.png`, using the same naming convention as the case-study assets.

## What to look for
**Layout**
- No horizontal scroll at any width (check 320, 390, 768, 1024, 1440).
- No overlapping, clipped, or cut-off text or elements.
- Consistent spacing, alignment, and grid. Nothing jumping between sections.
- The story rail, sticky elements, and nav behave correctly while scrolling.

**Typography**
- No unexpected line wraps, orphaned words, or overflow in headings and the "01 / Context" labels.
- Correct fonts loaded (no fallback flash or wrong weight).

**Theme**
- No unthemed elements: white boxes in dark mode, dark text on dark backgrounds, or low-contrast text.
- Images, logos, and shadows work in both themes.

**Media**
- Images are sharp, correctly cropped, and not stretched. No layout shift when they load.
- Screenshots in case studies are the right light/dark variant.

**Interaction states** (capture a few explicitly)
- Hover, focus, active, and open states for nav, theme toggle, cards, and buttons.
- Mobile menu open and closed.

**Content**
- No placeholder text, lorem ipsum, broken links, or missing metrics.
- Case studies follow the three-section format and match the others in tone and length.

## Comparison
- If a previous capture set exists, compare against it and report differences. Use Playwright `toHaveScreenshot` or pixel diffing with a small tolerance.
- Distinguish intended changes (from the current task) from regressions.

## Review process
1. Read each screenshot yourself. Don't assume a successful capture means the page looks right.
2. Zoom into suspect regions (crop and re-view) rather than judging from the full-page thumbnail.
3. Note each issue with route, view, and a description.

## Output
- A short summary of what was checked (routes × views).
- An issue list: **Route | View | Problem | Severity | Suggested fix**.
- Fix clear defects, then re-capture the affected views to confirm.
- State what you didn't verify, such as real devices, Safari/Firefox, or slow networks.

## Rules
- Don't commit transient screenshots unless asked. Keep them in a gitignored folder.
- Don't change design decisions (colors, spacing system, copy) without asking. Only fix defects.
- Do not declare it "looks good" without having viewed the images.