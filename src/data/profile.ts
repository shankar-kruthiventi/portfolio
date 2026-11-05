// Copy here comes from the approved designs in docs/design/. Case-study copy and
// metrics must come from docs/content.md only (see CLAUDE.md).
export const profile = {
  name: 'Sankara Rao Kruthiventi',
  role: 'Senior Full-Stack Engineer',
  status: 'Open to roles',
  summary:
    'Architecting dependable digital products. Integrating interfaces, platforms, and AI with a relentless focus on quality and aesthetics.',
  meta: '10 years · Bengaluru, India.',
  initials: 'SRK',
  links: {
    linkedin: 'https://www.linkedin.com/in/shankarkruthiventi/',
    resume: '/Sankara-Rao-Kruthiventi-Resume.pdf',
    resumeFileName: 'Sankara-Rao-Kruthiventi-Resume.pdf',
  },
  // Read from the approved design; confirm the phone number before shipping.
  contact: {
    location: 'Bengaluru',
    phoneDisplay: '+91 79729 14312',
    phoneHref: 'tel:+917972914312',
    email: 'sankar@sankarbuilds.io',
  },
} as const

export const orbitSkills = [
  { id: 'typescript', label: 'TypeScript' },
  { id: 'nodejs', label: 'Node.js' },
  { id: 'angular', label: 'Angular' },
  { id: 'aws', label: 'AWS' },
  { id: 'ai-rag', label: 'AI / RAG' },
] as const

export const navLinks = [
  { href: '#impact', label: 'Impact' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
] as const
