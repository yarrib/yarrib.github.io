// Edit this file to update the Resume page. Dates are plain strings.
export const RESUME = {
  summary:
    'Engineer focused on data platforms, ML infrastructure and AI agents. I prototype new solutions, prove them out with real users, and hand them off to the teams that run them.',
  pdf: '', // e.g. '/resume.pdf' once you drop a PDF in public/
  experience: [
    {
      role: 'Staff Innovation Engineer',
      org: 'CLA',
      period: 'Sep 2026 – Present',
      points: [
        'Prototype and prove out new solutions with vendors and internal groups, then hand working deliverables to delivery teams.',
        'Built a proof-of-concept agentic application solo in under two weeks, running end to end on Databricks (Apps, Lakebase, durable workflows with DBOS, agents) with a React, Express and FastAPI stack.',
        'Evaluating ontology, taxonomy and master-data tooling on Databricks.',
      ],
    },
    {
      role: 'MLOps Lead / ML Platform Developer',
      org: 'CLA',
      period: 'Dec 2024 – Sep 2026',
      points: [
        'Built ML platform tooling on Databricks and Azure: Unity Catalog, MLflow, Asset Bundles, CI/CD and Terraform.',
        'Designed a production document extraction system using Postgres as a work queue.',
      ],
    },
    {
      role: 'Senior Data Scientist',
      org: 'CLA',
      period: 'Sep 2024 – Dec 2024',
      points: [],
    },
    {
      role: 'Data Scientist',
      org: 'Wipfli LLP',
      period: 'Jan 2022 – Sep 2024',
      points: [
        'Delivered end-to-end applied AI/ML projects for internal IT.',
        'Implemented MLOps practices and explored generative AI capabilities.',
        'Solved business problems with creative combinations of tools and techniques.',
      ],
    },
    {
      role: 'Parking & Business Systems Professional',
      org: 'Minneapolis Park and Recreation Board',
      period: '2015 – 2022',
      points: [],
    },
    {
      role: 'Professional Golfer',
      org: 'Self-employed',
      period: '2013 – 2017',
      points: [],
    },
  ],
  education: [
    { degree: 'M.S. Data Science', school: 'University of Wisconsin–Eau Claire', period: '2019 – 2022' },
    { degree: 'B.A. Marketing Management', school: 'University of Northern Iowa', period: '2009 – 2013' },
  ],
  certifications: [
    { name: 'Azure Data Engineer Associate', issuer: 'Microsoft', year: '', href: 'https://www.credly.com/badges/89155f7a-fb11-4942-b40c-8fb74ff882a3' },
    { name: 'Azure Data Scientist Associate', issuer: 'Microsoft', year: '', href: 'https://www.credly.com/badges/0fdbb816-ed03-4f3e-9951-2027403f34f9' },
    { name: 'Azure Database Administrator Associate', issuer: 'Microsoft', year: '', href: 'https://www.credly.com/badges/7bfd1940-e3bc-49d5-af90-060da680f0a4' },
    // TODO: Databricks certifications
  ] as { name: string; issuer: string; year: string; href?: string }[],
};
