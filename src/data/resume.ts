export type Cert = { name: string; issuer: string; year: string; href?: string; featured?: boolean; image?: string };

// Edit this file to update the Resume page. Dates are plain strings.
export const RESUME = {
  summary:
    'Engineer who solves problems across data platforms, ML infrastructure and AI agents. I clear up the ambiguity, build quickly with a tight scope, and bridge the business and the tech.',
  pdf: '', // e.g. '/resume.pdf' once you drop a PDF in public/
  experience: [
    {
      role: 'Staff Innovation Engineer',
      org: 'CLA',
      period: 'Sep 2026 – Present',
      points: [
        'Come up with new solutions, build them and evaluate tooling with vendors and internal groups, to the point a delivery team can run them.',
        'Built a proof-of-concept agentic application solo in about ten working days, running end to end on Databricks (Apps, Lakebase, durable workflows with DBOS, agents) with a React, Express and FastAPI stack.',
        'Evaluating ontology, taxonomy and master-data tooling on Databricks.',
      ],
    },
    {
      role: 'MLOps Lead / ML Platform Developer',
      org: 'CLA',
      period: 'Dec 2024 – Sep 2026',
      points: [
        'Led and mentored an MLOps team of five to six engineers.',
        'Built the ML platform on Databricks and Azure (Unity Catalog, MLflow, Asset Bundles, CI/CD, Terraform), giving the ML team and several data science teams a repeatable path to production.',
        'Platform runs classic models and LLM document extraction agents, including a yearly job that trains 132 models in parallel.',
        'Proved out and put Redgate Flyway into production for database migrations on two paths: GitHub Actions to AKS, and an internal Python package that runs migrations as a Databricks job against Lakebase, scaffolding its Makefile, job notebook and bundle.',
        'Wrote the team playbook, handoff guide and repo conventions; they became the team standard and the base my successor built on.',
        'Designed a production agentic document extraction system for audit on Databricks (Lakebase Postgres as queue, Apps, Lakeflow Jobs, MLflow tracing), cutting extraction time from hours to minutes; 24 document types in production for hundreds of users.',
        'Co-authored a Databricks blog post on the architecture with Databricks Forward Deployed Engineering.',
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
  // Databricks certs are featured: shown first, as badge cards. Check each name matches its credential link.
  certifications: [
    { name: 'Machine Learning Engineer Professional', issuer: 'Databricks', year: '', href: 'https://credentials.databricks.com/9693cff9-51ea-4cb6-97eb-f4c82f8a9b1f', featured: true, image: '/certs/databricks-ml-engineer-professional.png' },
    { name: 'Generative AI Engineer Associate', issuer: 'Databricks', year: '', href: 'https://credentials.databricks.com/409842dd-ab7b-482e-b793-1032a15e5d44', featured: true, image: '/certs/databricks-genai-engineer-associate.png' },
    { name: 'Context Engineer Associate', issuer: 'Databricks', year: '', href: 'https://credentials.databricks.com/4cf00d9f-d2da-4a0f-98f4-6e5f71a52233', featured: true, image: '/certs/databricks-context-engineer-associate.png' },
    { name: 'Azure AI Engineer Associate', issuer: 'Microsoft', year: '', href: 'https://learn.microsoft.com/api/credentials/share/en-us/BrynYarri-8693/54606310F509A36D?sharingId=6CDD086067656BC' },
    { name: 'Azure Data Scientist Associate', issuer: 'Microsoft', year: '', href: 'https://learn.microsoft.com/api/credentials/share/en-us/BrynYarri-8693/49187A8A470CAD03?sharingId=6CDD086067656BC' },
    { name: 'Azure Database Administrator Associate', issuer: 'Microsoft', year: '', href: 'https://learn.microsoft.com/api/credentials/share/en-us/BrynYarri-8693/4B8ACDB7A4C2A156?sharingId=6CDD086067656BC' },
    { name: 'Machine Learning Engineering for Production (MLOps) Specialization', issuer: 'DeepLearning.AI · Coursera', year: '', href: 'https://www.coursera.org/account/accomplishments/specialization/certificate/T7QNCU7742V5' },
  ] as Cert[],
};
