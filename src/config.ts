export const siteConfig = {
  name: "Harsh Singh",
  title: "Software Engineer",
  description:
    "Portfolio of Harsh Singh, a software engineer building risk, compliance, and agentic AI systems at BlackRock.",
  tagline:
    "Building reliable Python systems for regulatory risk and AI-driven research at BlackRock — where compliance-grade engineering meets modern platform design.",
  accentColor: "#1d4ed8",
  location: "Gurugram, India",
  social: {
    email: "2208harsh@gmail.com",
    linkedin: "https://www.linkedin.com/in/harsh-singh-6b9010191",
    github: "https://github.com/Its-Meee",
  },
  aboutMe:
    "Software Engineer with 2.5+ years of experience at BlackRock, building production Python systems across regulatory risk, compliance automation, and AI-driven research tooling. My work sits at the intersection of financial systems and modern engineering — from SEC 18f-4 and derivative exposure reporting pipelines to an Agentic AI research platform used by 50+ analysts. I care about building things that are correct, auditable, and fast, and I enjoy the kind of engineering where getting the details right actually matters — because in risk and compliance systems, it always does.",
  skills: {
    "Languages & Core": ["Python", "SQL", "Pandas", "NumPy"],
    "AI & Agentic Systems": ["Agentic AI", "MCP (Model Context Protocol)", "Multi-Agent Systems"],
    "Backend & Platform": ["Microservices", "API Gateway Design", "Python SDK Development"],
    "Cloud & Infra": [
      "Kubernetes",
      "Knative",
      "Docker",
      "Azure DevOps",
      "Azure Blob Storage",
      "Snowflake",
      "CI/CD",
      "SonarQube",
    ],
    "Data & Reporting": [
      "ETL Processes",
      "Power BI",
      "DAX",
      "Excel (XlsxWriter/OpenPyXL)",
      "Report Automation",
      "Data Cleaning",
    ],
    "Developer Tools & Practices": [
      "Git",
      "unittest/mock",
      "Jupyter",
      "VS Code",
      "Unit/Regression Testing",
      "Problem Solving",
    ],
  },
  projects: [],
  experience: [
    {
      company: "BlackRock",
      title: "Software Development Engineer – Core Risk Engineering",
      dateRange: "Jul 2023 – Present",
      skills: [
        "Python",
        "Agentic AI",
        "MCP",
        "Kubernetes",
        "Knative",
        "Docker",
        "Azure DevOps",
        "Snowflake",
      ],
      bullets: [
        "Productized an Agentic AI Research application with transparent multi-agent reasoning and large-dataset handling, adopted by 50+ internal analysts, cutting research time from hours to minutes.",
        "Built 8 MCP servers exposing 75+ modular tools integrating databases and domain services, deployed on Kubernetes (Knative) for secure, resilient AI-workflow data access.",
        "Architected a microservices-based Python SDK with reusable interfaces and a custom API gateway, cutting integration effort and runtime inefficiencies by ~40%.",
        "Optimized high-volume data pipelines with batching, pagination, multithreading, and parallel processing — saving 30+ runtime hours weekly.",
        "Designed Python-based compliance automation platforms for SEC Rule 18f-4 and UCITS/Taiwan derivative exposure, converting manual notebooks into modular, testable scan services.",
        "Automated the RADAR exception lifecycle — creation, assignment, snoozing, reopen-on-breach, auto-close — for 49+ active risk and compliance rules, with personalized HTML digests and escalation alerts.",
        "Led the Python 3.7 → 3.9 migration for 648 production jobs, ensuring compatibility, dependency resolution, and performance optimization.",
      ],
    },
    {
      company: "BlackRock",
      title: "Analyst – Risk & Regulatory Reporting",
      dateRange: "Jan 2023 – Jul 2023",
      skills: ["Python", "SQL", "ETL Processes", "Reporting", "Data Validation"],
      bullets: [
        "Built the SEC 18f-4 Gross Notional Exposure scanner, calculating GNE thresholds and compliance overrides, producing audit-ready exceptions.",
        "Built the Taiwan Notional Derivative Exposure reporting system, calculating UCITS commitment leverage, duration/currency netting, and hedging thresholds.",
      ],
    },
  ],
  education: [
    {
      school: "Vellore Institute of Technology, Chennai",
      degree: "B.Tech in Electronics and Communication Engineering",
      dateRange: "2019 – 2023",
      achievements: ["CGPA: 8.55/10"],
    },
  ],
};
