import { profile } from '../data/profile'
import '../components/Button.css'
import './Contact.css'

export function Contact() {
  const { contact } = profile
  return (
    <section className="contact container" id="contact" aria-labelledby="contact-title">
      <div className="contact__panel">
        <div>
          <h2 className="contact__title" id="contact-title">
            Connect with me.
          </h2>
          <p className="contact__details">
            {contact.location} · {contact.phoneDisplay} · {contact.email}
          </p>
        </div>
        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${contact.email}`}>
            Email
          </a>
          <a className="btn btn--ghost" href={contact.phoneHref}>
            Call
          </a>
        </div>
      </div>
    </section>
  )
}
