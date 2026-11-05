import { navLinks, profile } from '../data/profile'
import { ThemeToggle } from './ThemeToggle'
import './Header.css'

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-header__logo" href="#top" aria-label={`${profile.name} — home`}>
          {profile.initials}
        </a>
        <nav className="site-header__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
