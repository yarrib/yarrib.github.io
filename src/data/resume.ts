export type Cert = { name: string; issuer: string; year: string; href?: string; featured?: boolean };

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
  // Databricks certs are featured: shown first and as cards. Fill in `name` (and `year`) for each.
  certifications: [
    { name: 'Databricks Certification', issuer: 'Databricks', year: '', href: 'https://credentials.databricks.com/409842dd-ab7b-482e-b793-1032a15e5d44', featured: true },
    { name: 'Databricks Certification', issuer: 'Databricks', year: '', href: 'https://credentials.databricks.com/9693cff9-51ea-4cb6-97eb-f4c82f8a9b1f', featured: true },
    { name: 'Databricks Certification', issuer: 'Databricks', year: '', href: 'https://credentials.databricks.com/4cf00d9f-d2da-4a0f-98f4-6e5f71a52233', featured: true },
    { name: 'Azure AI Engineer Associate', issuer: 'Microsoft', year: '', href: 'https://learn.microsoft.com/api/credentials/share/en-us/BrynYarri-8693/54606310F509A36D?sharingId=6CDD086067656BC' },
    { name: 'Azure Data Scientist Associate', issuer: 'Microsoft', year: '', href: 'https://learn.microsoft.com/api/credentials/share/en-us/BrynYarri-8693/49187A8A470CAD03?sharingId=6CDD086067656BC' },
    { name: 'Azure Database Administrator Associate', issuer: 'Microsoft', year: '', href: 'https://learn.microsoft.com/api/credentials/share/en-us/BrynYarri-8693/4B8ACDB7A4C2A156?sharingId=6CDD086067656BC' },
    { name: 'Coursera Specialization', issuer: 'Coursera', year: '', href: 'https://www.coursera.org/account/accomplishments/specialization/certificate/T7QNCU7742V5' },
  ] as Cert[],
};
