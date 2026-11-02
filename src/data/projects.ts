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
      'A Rust CLI that scaffolds data projects (Python packages, Databricks Asset Bundles, AI agent projects) from templates teams can extend with their own tooling. Shipped as a single binary with versioned public releases.',
    stack: ['Rust', 'CLI', 'Databricks', 'Templates'],
    links: [
      { label: 'Docs', href: 'https://yarrib.github.io/dex' },
      { label: 'GitHub', href: 'https://github.com/yarrib/dex' },
    ],
    featured: true,
  },
  {
    name: 'Beo Bakes',
    tagline: 'Web presence and storefront for a decorated-cookie business',
    description:
      'I built and maintain the site and online shop for Beo Bakes: a content-managed marketing site with an integrated storefront, plus the domain, email deliverability and hosting setup behind it.',
    stack: ['Next.js', 'Sanity', 'Shopify Hydrogen', 'Vercel'],
    links: [{ label: 'Visit site', href: 'https://beobakes.com' }],
    featured: true,
  },
];
