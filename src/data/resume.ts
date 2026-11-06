export type Cert = { name: string; issuer: string; year: string; href?: string; featured?: boolean; image?: string };

// Edit this file to update the Resume page. Dates are plain strings.
export const RESUME = {
  contact: {
    location: 'Minnesota',
    email: 'yarri.bryn@gmail.com',
    linkedin: 'https://www.linkedin.com/in/yarribryn',
  },
  summary:
    'Machine Learning and AI solutions leader with extensive experience building scalable, governed platforms in the Azure and Databricks ecosystem. Skilled at designing reusable patterns, CI/CD frameworks, and governance models that enable enterprise adoption of ML and Generative AI. Bridges strategy and execution: mentoring teams, collaborating with executives, and delivering measurable performance, cost, and productivity gains. Passionate about enabling teams to innovate while ensuring operational excellence.',
  pdf: '', // e.g. '/resume.pdf' once you drop a PDF in public/
  experience: [
    {
      role: 'Staff Innovation Engineer',
      org: 'CLA',
      period: 'Sep 2026 – Present',
      points: [
        'Conceived and built an internal AI chat agent platform in under 3 weeks, with durable agentic workflow orchestration, built for speed, scalability, and extensibility to future context-as-a-service use cases.',
        'Built and published reusable Python packages for Databricks apps, lakehouse, MLflow, and ETL work that teams adopt directly.',
        "Delivered v2 of CLA's centralized CI/CD patterns, migrating the document extraction workflows onto shared versions and reassigning ownership and migrations to the central patterns (Nov 2026).",
      ],
    },
    {
      role: 'Lead MLOps Engineer',
      org: 'CLA',
      period: 'Jul 2025 – Sep 2026',
      points: [
        "Led MLOps for CLA's ML platform and mentored 5-6 engineers.",
        'Built the initial batch workflow that accelerated extraction across 200k+ documents (Jun 2026).',
        'Partnered with Databricks on a durable orchestration pattern on Lakebase Postgres for production document extraction, featured in a Databricks blog post.',
        'Repurposed the pattern (extraction) for additional workloads, winning out document processing for 20+ document types by proving cost, durability, and efficiency, with 60+ types planned for production by year-end 2026.',
        'Built an AI Gateway on Azure Databricks with Azure AI Foundry, giving teams secure, role-based LLM access over private networking.',
        'Set Python CI, deployment, and IaC standards across multiple Databricks stacks, with playbooks the team still uses.',
        'Deployed a full-stack Lakebase app in a matter of weeks (Aug 2026), with the backend and frontend as separate service repos, which led to my reusable utils packages.',
        'Built an extraction ETL pipeline from an unfamiliar API to speed up data engineering work, and coordinated cross-metastore data sharing as an interim solution that unblocked DS and ML work.',
      ],
    },
    {
      role: 'Senior MLOps Engineer',
      org: 'CLA',
      period: 'Dec 2024 – Jun 2025',
      points: [
        'Built an Azure Document Intelligence promotion tool for moving custom models into higher environments, and an AI training opt-out CRUD app handed off to data engineering.',
        'Built up the MLOps team and practice, defining roles, playbooks, and deployment patterns.',
        'Built DAB templates with CI/CD across 5 environments.',
        'Parallelized batch inference and training for 132 models on Databricks Serverless, cutting ETL runtime 70% and training runtime 50%.',
      ],
    },
    {
      role: 'Senior Data Scientist',
      org: 'CLA',
      period: 'Sep 2024 – Dec 2024',
      points: [
        'Top contributor to the R-to-Python rewrite of a scheduling application, leading in PR acceptance and test coverage.',
        'Refactored its linear programming model, improving runtime 20%+.',
        'Developed Azure DevOps pipelines to test and deploy legacy DS solutions into Databricks via Asset Bundles.',
        'Configured development workflows that let R developers onboard smoothly into Python.',
        'Supported the transition to a new MLOps function, helping define practices and team roles.',
      ],
    },
    {
      role: 'Data Scientist & ML/AI Engineer',
      org: 'Wipfli LLP',
      period: 'Jan 2022 – Sep 2024',
      points: [
        "Built Wipfli's Azure Databricks lakehouse with Terraform, Unity Catalog, medallion architecture, and CI/CD, the foundation for the firm's data engineering and AI/ML work.",
        'Led a team that built an AI slide-deck app, saving $1.2M a year in staff time.',
        'Built an AI document review workflow for 800+ documents, saving $50K and contributing to a 15% profit increase.',
        'Delivered 15+ GenAI prototypes with executives (LangChain, Azure AI, Databricks).',
        'Mentored teams on DevOps, Git, and Databricks practices; represented the firm on a Generative AI industry panel.',
      ],
    },
    {
      role: 'Parking & Business Systems Professional / Analyst',
      org: 'Minneapolis Park and Recreation Board',
      period: '2015 – 2022',
      points: [
        'Built cross-departmental forecasting models, ETL pipelines, and BI solutions that generated $370k+ in annual savings.',
        "Launched and scaled the agency's Power BI platform, including developer and executive training.",
        "Led technology RFPs and vendor selection, leading to the creation of the agency's centralized Data Team.",
        'Designed and implemented parking systems that improved operations and customer experience, including mobile payment adoption.',
        'Optimized pay parking rate structures through analysis and forecasting, averaging a $240k increase in recurring annual revenue year over year.',
      ],
    },
    {
      role: 'Touring Golf Professional',
      org: 'Self-employed',
      period: '2013 – 2017',
      points: ['Competed in professional tournaments nationwide, including Korn Ferry Tour qualifiers.'],
    },
  ],
  education: [
    { degree: 'M.S. Data Science', school: 'University of Wisconsin–Eau Claire', period: '2022', note: '4.0 GPA' },
    { degree: 'B.A. Marketing Management', school: 'University of Northern Iowa', period: '2013', note: 'Honors, NCAA Division I athlete' },
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
