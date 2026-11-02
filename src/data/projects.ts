// Edit this file to update the Projects page and the home page highlights.
export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: 'dex',
    tagline: 'Extensible project scaffolding for data teams',
    description:
      'A Rust CLI that scaffolds data projects (Python packages, Databricks Asset Bundles, AI agent projects) from templates teams can extend with their own tooling. v0.7.0 adds a durable agent template on DBOS: runs survive crashes and resume without re-calling the model, with human approval steps built in.',
    stack: ['Rust', 'CLI', 'Databricks', 'DBOS', 'Templates'],
    links: [
      { label: 'Docs', href: 'https://yarrib.github.io/dex' },
      { label: 'GitHub', href: 'https://github.com/yarrib/dex' },
      { label: 'v0.7.0', href: 'https://github.com/yarrib/dex/releases/tag/v0.7.0' },
    ],
    featured: true,
  },
  {
    name: 'Beo Bakes',
    tagline: 'Website and private AI design studio for a decorated-cookie business',
    description:
      'I built and maintain the Beo Bakes website: a content-managed site the business can update itself, plus the domain, email deliverability and hosting setup behind it. Behind a login I also built a private AI design studio. You chat or talk to an agent ("Bluey cookies for a 5 year old\'s party") and it plans a cookie set from the cutters, dyes and sprinkles actually on hand, finds similar past designs, lists what is missing to buy, and drafts Instagram captions. Vision models index photos of cutters, dyes and finished sets so everything is searchable.',
    stack: ['Next.js', 'Sanity', 'Vercel', 'Neon', 'pgvector', 'Claude API'],
    links: [{ label: 'Visit site', href: 'https://beobakes.com' }],
    featured: true,
  },
];
