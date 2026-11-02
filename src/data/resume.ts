// Edit this file to update the Resume page. Dates are plain strings.
export const RESUME = {
  summary:
    'Engineer focused on data platforms, ML infrastructure and AI agents. I prototype new solutions, prove them out with real users, and hand them off to the teams that run them.',
  pdf: '', // e.g. '/resume.pdf' once you drop a PDF in public/
  experience: [
    {
      role: 'Staff Innovation Engineer',
      org: 'CLA',
      period: 'Present',
      points: [
        'Prototype and prove out new solutions with vendors and internal groups, then hand working deliverables to delivery teams.',
        'Evaluating ontology, taxonomy and master-data tooling on Databricks.',
      ],
    },
    {
      role: 'Platform / MLOps Engineer',
      org: 'CLA',
      period: '',
      points: [
        'Built ML platform tooling on Databricks and Azure: Unity Catalog, MLflow, Asset Bundles, CI/CD and Terraform.',
        'Designed a production document extraction system using Postgres as a work queue.',
      ],
    },
    {
      role: 'Data Scientist / Data Engineer',
      org: 'Wipfli LLP',
      period: '2022',
      points: [],
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
  certifications: [] as { name: string; issuer: string; year: string; href?: string }[],
};
