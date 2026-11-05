import './TokenPreview.css'

// Dev-only reference: renders every semantic color token so both themes can be
// compared against docs/design/. Not shipped (App renders it only in DEV).
const swatches = [
  'color-bg',
  'color-surface',
  'color-surface-pill',
  'color-surface-tint',
  'color-surface-active',
  'color-rule',
  'color-border',
  'color-ring',
  'color-text',
  'color-text-muted',
  'color-accent',
  'color-accent-brand',
  'color-accent-2',
  'color-on-primary',
] as const

const gradients = ['grad-primary', 'grad-primary-design', 'grad-headline', 'grad-story-card', 'grad-cta'] as const

export function TokenPreview() {
  return (
    <section className="token-preview container" aria-label="Design tokens (dev only)">
      <h2>Design tokens</h2>
      <ul className="token-preview__grid" role="list">
        {swatches.map((name) => (
          <li key={name}>
            <span className="token-preview__swatch" style={{ background: `var(--${name})` }} />
            <code>--{name}</code>
          </li>
        ))}
      </ul>
      <ul className="token-preview__grid token-preview__grid--wide" role="list">
        {gradients.map((name) => (
          <li key={name}>
            <span className="token-preview__swatch" style={{ background: `var(--${name})` }} />
            <code>--{name}</code>
          </li>
        ))}
        <li>
          <span className="token-preview__swatch" style={{ background: 'var(--grad-orb-hero)', borderRadius: '50%' }} />
          <code>--grad-orb-hero</code>
        </li>
        <li>
          <span className="token-preview__swatch" style={{ background: 'var(--grad-orb-metric)', borderRadius: '50%' }} />
          <code>--grad-orb-metric</code>
        </li>
      </ul>
    </section>
  )
}
