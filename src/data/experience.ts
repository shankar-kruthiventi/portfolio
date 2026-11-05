// Summaries are the five opening paragraphs of docs/content.md, in company order.
// Date ranges and capability groups are read from the approved design in docs/design/.
export interface ExperienceNode {
  id: string
  company: string
  years: string
  summary: string
}

export const experience: readonly ExperienceNode[] = [
  {
    id: 'opentext',
    company: 'OpenText',
    years: '2022—Present',
    summary:
      'Unified Management Console, Angular frameworks, CI/CD, OpenAPI, passkeys, and authorization.',
  },
  {
    id: 'onetrust',
    company: 'OneTrust',
    years: '2021—2022',
    summary: 'Incident and breach microfrontend, reusable components, and standards.',
  },
  {
    id: 'oaknorth',
    company: 'OakNorth',
    years: '2020—2021',
    summary: 'Core banking and reusable loan-processing components.',
  },
  {
    id: 'mindtree',
    company: 'Mindtree',
    years: '2018—2020',
    summary: 'Products across education, insurance, banking, and supply chain.',
  },
  {
    id: 'wipro',
    company: 'Wipro',
    years: '2016—2018',
    summary: 'Automation, tracking, templating, and performance optimization.',
  },
]

export interface CapabilityCluster {
  id: string
  name: string
  skills: readonly string[]
}

export const capabilities: readonly CapabilityCluster[] = [
  { id: 'frontend', name: 'Frontend', skills: ['Angular', 'React', 'TypeScript', 'HTML5', 'CSS3'] },
  { id: 'backend', name: 'Backend', skills: ['Node.js', 'Nest.js', 'REST APIs', 'SQL'] },
  { id: 'platform', name: 'Platform', skills: ['AWS', 'Linux', 'Git', 'CI/CD'] },
  { id: 'quality', name: 'Quality', skills: ['Unit', 'E2E', 'Security', 'Patterns'] },
  {
    id: 'ai',
    name: 'AI + Product',
    skills: ['Gen AI', 'Agentic AI', 'RAG', 'LLMs', 'UI/UX'],
  },
]
