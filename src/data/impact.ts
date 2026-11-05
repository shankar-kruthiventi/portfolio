// Case studies. Copy and metrics come verbatim from docs/content.md (Context → Engineering → Outcome).
export interface Story {
  id: string
  metric: string
  railTitle: string
  company: string
  title: string
  context: string
  engineering: string
  outcome: string
}

export const stories: readonly Story[] = [
  {
    id: 'opentext-console',
    metric: '70%',
    railTitle: 'Unified management',
    company: 'OpenText',
    title: 'Unified Management Console',
    context: 'Manual server configuration and recurring operational tasks.',
    engineering: 'A Unified Management Console architected with Node.js and Angular.',
    outcome: 'Reduced manual server configuration and operational tasks by 70%.',
  },
  {
    id: 'onetrust-console',
    metric: '60%',
    railTitle: 'Incident & Breach module',
    company: 'OneTrust',
    title: 'Incident & Breach module',
    context: 'Manual reporting of incidents and breaches.',
    engineering: 'Multi-tenant Platform architected with Micro-frontend.',
    outcome: 'Reduced reporting and operational tasks by 60%.',
  },
  {
    id: 'oaknorth-loans',
    metric: '80%',
    railTitle: 'SME loan workflows',
    company: 'OakNorth',
    title: 'SME loan workflows',
    context: 'Loan top-up and disbursal workflows for global SMEs.',
    engineering: 'Reusable common components enabling end-to-end banking workflows.',
    outcome: 'Reduced loan-processing time by 80%.',
  },
  {
    id: 'mindtree-angular',
    metric: '75%',
    railTitle: 'Reusable Angular systems',
    company: 'Mindtree',
    title: 'Reusable Angular systems',
    context:
      'Large-scale product administration with listing, search, pagination, and filtering needs.',
    engineering:
      'A reusable Angular listing grid and filtering frameworks for large-scale product development.',
    outcome: 'Improved system performance by 75% while reducing workload.',
  },
  {
    id: 'wipro-hr',
    metric: '90%',
    railTitle: 'Document automation',
    company: 'Wipro',
    title: 'HR document automation',
    context: 'HR document generation and compliance-sensitive templates.',
    engineering:
      'A secure TypeScript pipeline using server-side PDF engines, validated data, and encrypted templates.',
    outcome: 'Reduced manual errors by 90% and accelerated delivery.',
  },
]
