import { useState } from 'react'
import { capabilities, experience } from '../data/experience'
import './Section.css'
import './Experience.css'

export function Experience() {
  const [open, setOpen] = useState<string | null>(experience[0]?.id ?? null)

  return (
    <>
      <section className="section container" id="experience" aria-labelledby="experience-title">
        <header className="section__head">
          <h2 className="section__title" id="experience-title">
            Experience nodes
          </h2>
          <p className="eyebrow">Select a node to expand</p>
        </header>

        <ul className="nodes" role="list">
          {experience.map((node) => {
            const isOpen = open === node.id
            return (
              <li key={node.id} className="node" data-open={isOpen}>
                <button
                  type="button"
                  className="node__trigger"
                  aria-expanded={isOpen}
                  aria-controls={`node-${node.id}`}
                  onClick={() => setOpen(isOpen ? null : node.id)}
                >
                  <span className="node__company">{node.company}</span>
                  <span className="node__years">{node.years}</span>
                </button>
                <div
                  className="node__reveal"
                  id={`node-${node.id}`}
                  role="region"
                  aria-label={node.company}
                >
                  <p className="node__summary">{node.summary}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="section container" id="capabilities" aria-labelledby="capabilities-title">
        <header className="section__head">
          <h2 className="section__title" id="capabilities-title">
            Capability clusters
          </h2>
          <p className="eyebrow">Product to platform</p>
        </header>

        <ul className="clusters" role="list">
          {capabilities.map((cluster) => (
            <li key={cluster.id} className="cluster">
              <h3 className="cluster__name">{cluster.name}</h3>
              <p className="cluster__skills">{cluster.skills.join(' · ')}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
