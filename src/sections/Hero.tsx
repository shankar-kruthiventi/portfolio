import { orbitSkills, profile } from '../data/profile'
import '../components/Button.css'
import './Hero.css'

// The link itself opens the PDF in a new tab (target="_blank"). On click we also start a
// download, so one action does both; without JavaScript it still just opens the PDF.
function downloadResume() {
  const link = document.createElement('a')
  link.href = profile.links.resume
  link.download = profile.links.resumeFileName
  document.body.append(link)
  link.click()
  link.remove()
}

export function Hero() {
  return (
    <section className="hero container" id="top" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="eyebrow">{profile.role} .</p>
        <h1 className="hero__title" id="hero-title">
          Engineering across the <span className="hero__title-accent">whole constellation.</span>
        </h1>
        <p className="hero__lead">
          {profile.name} {profile.summary}
        </p>
        <div className="hero__actions">
          <a
            className="btn btn--primary"
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={downloadResume}
          >
            Explore résumé
          </a>
          <a
            className="btn btn--ghost"
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <p className="hero__meta">{profile.meta}</p>
      </div>

      <div className="orbit">
        <span className="orbit__ring orbit__ring--outer" aria-hidden="true" />
        <span className="orbit__ring orbit__ring--middle" aria-hidden="true" />
        <span className="orbit__ring orbit__ring--inner" aria-hidden="true" />
        <div className="orbit__core">
          <span>Senior</span>
          <span>Full Stack</span>
        </div>
        <ul className="orbit__chips" role="list">
          {orbitSkills.map((skill) => (
            <li key={skill.id} className={`chip chip--${skill.id}`}>
              {skill.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
