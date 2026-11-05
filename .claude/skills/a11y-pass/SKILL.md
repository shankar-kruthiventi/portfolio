---
name: a11y-pass
description: Run an accessibility audit and fix pass on the React portfolio. Use when the user asks for an a11y check, WCAG review, keyboard/screen-reader audit, or before shipping a new page, case study, or component.
---

# Accessibility pass

Target: WCAG 2.2 AA. Audit first, report findings, then fix. Don't change visual design beyond what a fix requires.

## Scope
Ask which pages or components to cover (default: all routes plus shared components such as nav, theme toggle, story rail, case-study cards, contact form).

## 1. Automated checks
- Run `eslint-plugin-jsx-a11y` (add it if missing) and fix all errors.
- Run axe (`@axe-core/playwright` or `jest-axe`) against each route in both light and dark themes, at desktop (1280px) and mobile (390px) widths.
- Run Lighthouse accessibility. Aim for 100, but treat axe findings as the source of truth.

## 2. Manual checks

**Structure and semantics**
- One `<h1>` per page. Headings descend in order with no skipped levels.
- Use landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`. Label them if there is more than one of a kind.
- Use real `<button>` and `<a>`. No clickable `div`s. Links go somewhere, buttons do something.
- Lists use `<ul>/<ol>`. Numbered labels like "01 / Context" are text, not list markup, unless they are semantically a list.

**Keyboard**
- Everything interactive is reachable and operable by keyboard in a logical order.
- Focus is always visible (at least a 3:1 contrast indicator). Never use `outline: none` without a replacement.
- A "Skip to content" link is the first focusable element.
- No keyboard traps. Menus, dialogs, and drawers trap focus only while open, close on Esc, and restore focus on close.

**Color and contrast**
- Text contrast is at least 4.5:1 (3:1 for large text), and UI components and focus rings are at least 3:1, checked in both light and dark themes.
- Never rely on color alone to convey state (links, errors, active nav item).
- Check muted or secondary text and text over images or gradients especially closely.

**Images and media**
- Meaningful images have descriptive `alt`. Decorative images use `alt=""`.
- Screenshots in case studies describe what they show, not "screenshot".
- Autoplay is avoided. Any video has captions and pause controls.

**Motion**
- Respect `prefers-reduced-motion`: disable or simplify parallax, scroll-linked animation, and story-rail transitions.
- Nothing flashes more than 3 times per second.

**Theme and preferences**
- The theme toggle is a button with an accessible name and state (`aria-pressed` or a label that reflects the current mode).
- Honor `prefers-color-scheme` on first load.
- Layout survives 200% zoom and 400% reflow (320px width) with no horizontal scroll or clipped content.
- Use relative units (`rem`) for text. Touch targets are at least 24×24px, ideally 44×44px.

**Forms (contact)**
- Every input has a visible `<label>`. Placeholders are not labels.
- Errors are announced (`aria-live` or `role="alert"`), tied to fields via `aria-describedby`, and describe how to fix the problem.
- Use correct `type` and `autocomplete` attributes.

**ARIA**
- Prefer native HTML. Add ARIA only when needed, and never contradict native semantics.
- Use `aria-current="page"` on the active nav link, and `aria-expanded` and `aria-controls` on disclosure widgets.
- Hide purely decorative icons with `aria-hidden="true"`. Give icon-only buttons an accessible name.

**React-specific**
- On route change, move focus to the new `<h1>` or `<main>` and update `document.title`.
- Use `useId` for label/description pairing. Avoid duplicate IDs.
- Set `lang` on `<html>`.

## 3. Screen-reader spot check
Test the main flow with VoiceOver (macOS/iOS) or NVDA: landing page, nav, one case study, and the contact form. Confirm reading order matches visual order and that dynamic updates are announced.

## Output format
Report findings as a table: **Issue | Where (file/component) | WCAG criterion | Severity (blocker/major/minor) | Fix**. Then:
1. Apply fixes for blockers and majors.
2. List minor items as follow-ups.
3. Re-run the automated checks and show before/after counts.

## Rules
- Don't claim full compliance. Automated tools catch only part of the issues, so state what was and wasn't manually verified.
- Don't suppress lint or axe rules to get a passing result without explaining why.
- Keep fixes small and local, and don't refactor unrelated code.