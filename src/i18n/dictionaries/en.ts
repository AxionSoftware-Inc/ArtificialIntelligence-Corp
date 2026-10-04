/**
 * English is the source dictionary. Its shape defines the `Dictionary` type,
 * so uz.ts and ru.ts will fail to compile if any key is missing.
 */
export const en = {
  meta: {
    title: "Syntheta AI: Applied AI Research Lab",
    description:
      "We build on-device language models and autonomous agents for software engineering and scientific research.",
  },
  nav: {
    products: "Products",
    solutions: "Solutions",
    process: "Process",
    impact: "Impact",
    contact: "Contact",
    cta: "Contact us",
    menu: "Menu",
    language: "Language",
  },
  hero: {
    badge: "Applied AI research lab",
    titleLine1: "Turn Intelligence",
    titleLine2: "Into Growth Infrastructure.",
    description:
      "We help startups and enterprises integrate AI into marketing, operations and product, without complexity.",
    primary: "Start an AI project",
    secondary: "Explore products",
    imageAlt: "Ascending monoliths with glowing frames",
  },
  products: {
    eyebrow: "Products",
    titleLine1: "Three agents.",
    titleLine2: "One research lab.",
    description:
      "Models we build and ship ourselves: a local assistant on your phone, and autonomous agents for engineering and science.",
    items: [
      {
        id: "mobile-agent",
        category: "On-device agent",
        name: "Syntheta Mobile",
        summary:
          "A compact model that runs entirely on the phone, understands Uzbek and operates apps on the user's behalf.",
        capabilities: [
          "Runs offline, data never leaves the device",
          "Understands spoken and written Uzbek",
          "Operates apps and settings from plain requests",
        ],
        status: "In development",
        cta: "Request early access",
      },
      {
        id: "coder",
        category: "Coding agent",
        name: "Syntheta Code",
        summary:
          "An autonomous software engineer for the terminal and IDE. It reads a repository, plans changes, edits files and runs tests.",
        capabilities: [
          "Repository-wide context and multi-file edits",
          "Runs commands and iterates until tests pass",
          "Every change is a diff you review and approve",
        ],
        status: "In development",
        cta: "Request early access",
      },
      {
        id: "researcher",
        category: "Research agent",
        name: "Syntheta Research",
        summary:
          "A deep-research agent for scientific work. It reviews literature, runs analyses and reports findings with cited sources.",
        capabilities: [
          "Literature review across papers and datasets",
          "Reproducible analysis with code and data included",
          "Every claim linked to a verifiable source",
        ],
        status: "In development",
        cta: "Request early access",
      },
    ],
  },
  solutions: {
    eyebrow: "Capabilities",
    titleLine1: "Built for systems",
    titleLine2: "that must be reliable.",
    description:
      "We replace fragile prompt engineering with solid engineering practice and give each industry a system tailored to it.",
    benchmark: "Target",
    items: [
      {
        category: "Agents",
        tag: "Multi-agent",
        title: "Autonomous agent systems",
        description:
          "Agents that break a business goal into steps, check each other's work and complete workflows with little human supervision.",
        metric: "Task success rate",
      },
      {
        category: "Models",
        tag: "Private weights",
        title: "Domain-specific models",
        description:
          "Smaller models adapted to your own data. Lower cost per request and full control over the weights.",
        metric: "Lower inference cost",
      },
      {
        category: "Safety",
        tag: "Verification",
        title: "Output verification layer",
        description:
          "Outputs are checked against explicit rules and logic constraints before they are used, which reduces errors.",
        metric: "Fewer unverified outputs",
      },
      {
        category: "Infrastructure",
        tag: "Private deployment",
        title: "On-premise and private cloud",
        description:
          "Deploy inside your own data centre or private cloud. Your data stays within your security perimeter.",
        metric: "Data stays with you",
      },
    ],
  },
  metrics: {
    eyebrow: "Results",
    titleLine1: "Measured in",
    titleLine2: "production use.",
    description:
      "We track every system against clear benchmarks. Figures below are targets for current work and will be replaced with published results.",
    items: [
      {
        value: "99%",
        label: "Task accuracy target",
        description:
          "Share of agent tasks that must complete correctly in our evaluation suites.",
      },
      {
        value: "4×",
        label: "Cost reduction target",
        description:
          "Expected saving from small specialised models compared with general-purpose APIs.",
      },
      {
        value: "<20 ms",
        label: "Latency target",
        description:
          "Time to first token for on-device and dedicated-cluster deployments.",
      },
    ],
  },
  workflow: {
    eyebrow: "Process",
    titleLine1: "From audit to",
    titleLine2: "production.",
    description:
      "A clear, engineering-first way of working, designed for reliability.",
    steps: [
      {
        phase: "Step one",
        title: "Audit and requirements",
        description:
          "We study your data, load and accuracy requirements, then design the right model and system architecture.",
        bullets: [
          "Data and schema review",
          "Latency and load profiling",
          "Security and compliance limits",
        ],
      },
      {
        phase: "Step two",
        title: "Training and evaluation",
        description:
          "We adapt the model to your domain and test it against agreed benchmarks before anything goes live.",
        bullets: [
          "Domain dataset preparation",
          "Guardrail calibration",
          "Automated evaluation",
        ],
      },
      {
        phase: "Step three",
        title: "Deployment",
        description:
          "We release to your own servers or private cloud and monitor the system after launch.",
        bullets: [
          "On-premise integration",
          "Data isolation",
          "Monitoring and support",
        ],
      },
    ],
  },
  cta: {
    eyebrow: "Work with us",
    titleLine1: "Ready to put AI",
    titleLine2: "to work in your business?",
    description:
      "Talk to our engineers about your workflows, a custom model, or early access to our products.",
    primary: "Book a consultation",
    secondary: "Read the technical overview",
  },
  footer: {
    description:
      "An independent AI research lab building on-device models and autonomous agents.",
    productsTitle: "Products",
    companyTitle: "Company",
    contact: "Contact",
    research: "Research",
    careers: "Careers",
    privacy: "Privacy policy",
    rights: "All rights reserved.",
  },
};

export type Dictionary = typeof en;
