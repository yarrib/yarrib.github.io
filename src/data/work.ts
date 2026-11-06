// Case studies for the Work page. Keep internal project names out (white-label).
export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  approach: string[];
  result: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

export const WORK: CaseStudy[] = [
  {
    slug: 'document-extraction',
    title: 'Agentic document extraction for audit, on one platform',
    summary:
      'A production pipeline that turns uploaded audit PDFs into structured data, built entirely on Databricks with no external queue or orchestrator.',
    problem:
      'Auditors were spending hours extracting data from client PDFs. The work needed LLM and vision calls with strict rate limits, crash recovery and live progress, without adding Kafka, Redis, Airflow or Temporal to the stack.',
    approach: [
      'Used Lakebase Postgres as both state store and queue: row locking with priority ordering, lease-based crash recovery, and concurrency and token-budget throttling.',
      'Ran parsing as Lakeflow Jobs (document processing plus vision and LLM calls), triggered by a FastAPI app on Databricks Apps.',
      'Made webhook callbacks idempotent, and streamed live status to an operator dashboard with Postgres LISTEN/NOTIFY and Server-Sent Events.',
      'Traced every model call with MLflow for token usage, latency and cost.',
    ],
    result: [
      'Extraction time went from hours to minutes.',
      '24 document types in production, serving hundreds of users, with volume still growing.',
      'Built with Databricks Forward Deployed Engineering and written up on the Databricks blog.',
    ],
    stack: ['Lakebase Postgres', 'Databricks Apps', 'FastAPI', 'Lakeflow Jobs', 'MLflow Tracing', 'Unity Catalog'],
    links: [
      { label: 'Read the Databricks blog post', href: 'https://www.databricks.com/blog/simplify-ai-agent-orchestration-lakebase-postgres' },
    ],
  },
  {
    slug: 'agentic-app-poc',
    title: 'A working agentic application in under two weeks',
    summary:
      'Took a product idea from blank page to a deployable, multi-feature agentic app solo, so stakeholders could react to real software instead of slides.',
    problem:
      'A new AI product concept needed to be proven quickly enough to inform a build decision, and built so an application team could take it forward.',
    approach: [
      'Designed the app as portable layers: React front end, Express and FastAPI services, and a separate agent layer.',
      'Ran it end to end on Databricks Apps, with Lakebase for state and DBOS for durable, resumable agent workflows.',
      'Kept every component on standard, containerizable tech so it could move to another platform without a rewrite.',
    ],
    result: [
      'Shipped a working proof of concept, built solo, in roughly ten working days.',
      'Gave product and engineering leaders a concrete basis for the build-versus-adopt decision.',
    ],
    stack: ['Databricks Apps', 'Lakebase', 'DBOS', 'React', 'FastAPI', 'Agents'],
  },
  {
    slug: 'ml-platform',
    title: 'An ML platform teams could actually ship on',
    summary:
      'Gave the ML and data science teams a governed, repeatable path to production on Databricks and Azure, and led the team that runs it.',
    problem:
      'Models and LLM-based extraction agents had no consistent path to production: environments, infrastructure and deployments were set up by hand, project by project.',
    approach: [
      'Hardened the platform infrastructure as code with Terraform, and wired projects into CI/CD.',
      'Built project templates on Databricks Asset Bundles so a new model or agent starts deployable.',
      'Standardized governance and tracking on Unity Catalog and MLflow.',
      'Put database migrations under version control with Redgate Flyway, packaged as a Databricks job that runs against Lakebase.',
      'Wrote the playbook, handoff guide and repo conventions the team works from.',
      'Led and mentored an MLOps team of five to six engineers.',
    ],
    result: [
      'Took time to production from no clear path to a repeatable one.',
      'Supports the ML team and several data science teams, running both classic models and LLM-based document extraction agents in production.',
      'Runs workloads like a yearly job that trains 132 models in parallel.',
      'Flyway migrations run in production against Lakebase, and the playbook became the team standard that outlasted my time as lead.',
    ],
    stack: ['Databricks', 'Unity Catalog', 'MLflow', 'Asset Bundles', 'Terraform', 'Azure DevOps'],
  },
];

// Writing published elsewhere, shown on Home and Writing.
export const EXTERNAL_WRITING = [
  {
    title: 'Simplify AI agent orchestration with Lakebase Postgres',
    venue: 'Databricks Blog (co-author)',
    date: new Date('2026-07-22'),
    href: 'https://www.databricks.com/blog/simplify-ai-agent-orchestration-lakebase-postgres',
  },
];
