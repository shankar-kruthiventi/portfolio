# Design tokens

Sampled from `docs/design/ai-constellation-story-rail-*.png` (desktop light/dark). Defined in `tokens.css`; components use only the semantic names below. Theme is `<html data-theme="light|dark">`.

| Token | Light | Dark | Notes |
|---|---|---|---|
| `--color-bg` | `#f4f5ff` (`#f7f7ff` → `#eef3ff`) | `#090727` (→ `#0f0f39`) | page, with violet glow top-centre and mint/teal glow left |
| `--color-surface` | `#fbfcfe` | `#13113b` | experience / capability cards |
| `--color-surface-pill` | `#ffffff` | `#141043` | chips, ghost buttons, rail badges |
| `--color-surface-tint` | `#ecf7fe` | `#222957` | story card top-left |
| `--color-surface-active` | `#e0ecfc` | `#182448` | active rail row |
| `--color-rule` | `#cfd0e9` | `#373260` | section / header hairlines |
| `--color-ring` | `#c7c8e9` | `#433c73` | orbit rings |
| `--color-text` | `#17172f` | `#f4f1ff` | |
| `--color-text-muted` | `#62627f` (sampled `#686889`) | `#aca5d7` | |
| `--color-accent` | `#00746f` (sampled `#007f7a`) | `#65eee0` | text accent / kickers |
| `--color-accent-2` | `#9faae6` | `#b4bffa` | headline gradient end |
| `--grad-headline` | teal → blue → lavender | mint → cyan → lavender | "whole constellation." |
| `--grad-primary` | `#7dbeff → #8a74ff` | same | primary button, ink text |
| `--grad-orb-hero` / `--grad-orb-metric` | blue sphere → deep indigo | lavender sphere → deep indigo | hero orb / metric orb |

## Deliberate deviations from the sampled design (WCAG AA)
- Light accent `#007f7a` is 4.48:1 on the page and 4.07:1 on the active rail row → `#00746f` (≥4.7:1 everywhere). The brand value stays as `--color-accent-brand` for non-text.
- Light muted `#686889` is 4.47:1 on the active rail row → `#62627f`.
- Primary button: white text on `#7dbeff → #775eff` is 1.97:1 at the light end. Using ink text and a lighter end stop (`#8a74ff`) gives ≥5:1. Exact design gradient kept as `--grad-primary-design`.
- Orb label uses ink in both themes (design's pale text on the dark orb is ~3:1).

## Estimated, not measured
`--color-border` (1px card edges are anti-aliased in the PNGs), shadows, glow radii, type sizes, radii and the chip positions are measured/estimated from layout, not read from source. Mobile designs were not sampled for tokens; they reuse these.
