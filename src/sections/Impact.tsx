import { useRef, useState, type KeyboardEvent } from 'react'
import { stories } from '../data/impact'
import './Section.css'
import './Impact.css'

export function Impact() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const story = stories[active]
  if (!story) return null

  function select(index: number) {
    setActive(index)
    tabRefs.current[index]?.focus()
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const last = stories.length - 1
    const keys: Record<string, number> = {
      ArrowDown: active === last ? 0 : active + 1,
      ArrowUp: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    }
    const next = keys[event.key]
    if (next === undefined) return
    event.preventDefault()
    select(next)
  }

  return (
    <section className="section container" id="impact" aria-labelledby="impact-title">
      <header className="section__head">
        <h2 className="section__title" id="impact-title">
          Signals of impact
        </h2>
        <p className="eyebrow">Story rail · Verified from experience</p>
      </header>

      <div className="impact">
        <div
          className="rail"
          role="tablist"
          aria-label="Case studies"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
        >
          {stories.map((item, index) => (
            <button
              key={item.id}
              ref={(node) => {
                tabRefs.current[index] = node
              }}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              className="rail__item"
              aria-selected={index === active}
              aria-controls="story-panel"
              tabIndex={index === active ? 0 : -1}
              onClick={() => setActive(index)}
            >
              <span className="rail__badge">{item.metric}</span>
              <span className="rail__text">
                <span className="rail__title">{item.railTitle}</span>
                <span className="rail__company">{item.company}</span>
              </span>
            </button>
          ))}
        </div>

        <article
          className="story"
          id="story-panel"
          role="tabpanel"
          aria-labelledby={`tab-${story.id}`}
          key={story.id}
        >
          <div className="story__orb" aria-hidden="true">
            <span>{story.metric}</span>
          </div>
          <div className="story__body">
            <p className="eyebrow">
              {story.company} · {story.title}
            </p>
            <dl className="story__steps">
              <div className="story__step">
                <dt>01 / Context</dt>
                <dd>{story.context}</dd>
              </div>
              <div className="story__step">
                <dt>02 / Engineering</dt>
                <dd>{story.engineering}</dd>
              </div>
              <div className="story__step story__step--outcome">
                <dt>03 / Outcome</dt>
                <dd>{story.outcome}</dd>
              </div>
            </dl>
          </div>
        </article>
      </div>
    </section>
  )
}
