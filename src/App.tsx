import { Header } from './components/Header'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Impact } from './sections/Impact'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Impact />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
