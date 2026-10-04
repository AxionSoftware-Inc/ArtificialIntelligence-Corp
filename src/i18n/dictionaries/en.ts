/**
 * English is the source dictionary. Its shape defines the `Dictionary` type,
 * so uz.ts and ru.ts will fail to compile if any key is missing.
 */
export const en = {
  meta: {
    title: "Syntheta AI: Applied AI Research Lab",
    description:
      "We build on-device language models and autonomous agents for software engineering and scientific research.",
    keywords:
      "on-device AI, autonomous coding agent, scientific research AI, local LLM, Uzbek AI, sovereign compute, Syntheta",
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
    learnMore: "Deep-dive project page",
    items: [
      {
        id: "mobile-agent",
        slug: "syntheta-mobile",
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
        cta: "Explore Syntheta Mobile",
      },
      {
        id: "coder",
        slug: "syntheta-code",
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
        cta: "Explore Syntheta Code",
      },
      {
        id: "researcher",
        slug: "syntheta-research",
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
        cta: "Explore Syntheta Research",
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
  productCommon: {
    breadcrumbHome: "Home",
    breadcrumbProducts: "Products",
    backToHome: "Back to Home",
    keySpecifications: "System Specifications",
    coreCapabilities: "Core Architecture & Capabilities",
    pipelineTitle: "Execution Pipeline",
    interactiveDemoTitle: "Interactive Simulator",
    earlyAccessBadge: "Private Developer Cohort 2026",
    requestAccessButton: "Request Early Access",
    bookPilotButton: "Schedule Enterprise Pilot",
    statusBadge: "Project Status",
    securityGuarantee: "Zero telemetry boundary — weights verified and hosted in your trust enclave.",
  },
  productPages: {
    "syntheta-mobile": {
      slug: "syntheta-mobile",
      badge: "On-Device SLM // Zero-Latency Intelligence",
      name: "Syntheta Mobile",
      tagline: "Autonomous smartphone operation with native Uzbek fluency. Completely on-device, zero cloud dependence.",
      description:
        "Syntheta Mobile is a compact, quantization-aware foundation model designed to run locally on mobile NPUs. It navigates native mobile apps via accessibility APIs, executes multi-step intent workflows, and natively understands Uzbek voice and text without round-tripping to remote cloud servers.",
      stats: [
        { label: "Memory Footprint", value: "< 1.4 GB" },
        { label: "NPU Latency", value: "< 12 ms" },
        { label: "Cloud Uploads", value: "0 bytes" },
        { label: "Uzbek Speech & Text", value: "Native" },
      ],
      features: [
        {
          title: "Native Uzbek Language Fluency",
          description:
            "Trained on an exhaustive corpus of Uzbek vernacular and literary morphology. Accurately handles dialect nuances, Latin/Cyrillic scripts, and regional conversational shorthand.",
          tag: "Linguistic Model",
        },
        {
          title: "Autonomous Screen & App Navigation",
          description:
            "Deconstructs UI hierarchies into semantic actionable trees. It taps buttons, fills forms, switches between apps, and verifies completed workflows on behalf of the user.",
          tag: "Mobile Agent",
        },
        {
          title: "Air-Gapped Privacy Perimeter",
          description:
            "Runs inside the phone's hardware security enclave without requiring an active cellular or Wi-Fi connection. Private data, credentials, and personal chats never touch external servers.",
          tag: "Hardware Enclave",
        },
        {
          title: "4-bit NPU Weight Quantization",
          description:
            "Custom INT4/FP4 kernel execution optimized for Snapdragon Hexagon, MediaTek APU, and Apple Neural Engine, maintaining high perplexity accuracy with minimal battery drain.",
          tag: "Silicon Acceleration",
        },
      ],
      specs: [
        { label: "Model Parameters", value: "1.8B – 3.2B quantized mixture" },
        { label: "Runtime Environment", value: "ONNX Runtime Mobile & CoreML / TFLite" },
        { label: "Minimum Operating System", value: "Android 12+ (Snapdragon 8 Gen 2+) / iOS 17+" },
        { label: "Offline Speech Recognition", value: "Integrated Conformer-CTC Uzbek Acoustic Model" },
        { label: "Data Leakage Rate", value: "0.00% (Certified Air-Gapped by default)" },
        { label: "Target Battery Impact", value: "< 1.5% per 100 autonomous tasks" },
      ],
      pipeline: [
        {
          step: "01",
          name: "Natural Language Acoustic Parser",
          detail: "Transcribes and tokenizes raw Uzbek audio or text in real time on the device NPU.",
        },
        {
          step: "02",
          name: "UI Semantic Decomposition",
          detail: "Inspects accessibility nodes and visual screen elements to map requested intent to target app actions.",
        },
        {
          step: "03",
          name: "Deterministic Action Dispatcher",
          detail: "Executes programmatic gestures (tap, scroll, input) with step-by-step state verification.",
        },
      ],
      demoSimulation: {
        userPrompt: "Telegramda Akmalga: 'Ertaga soat 10:00 da loyiha bo'yicha ko'rishamiz' deb yoz va kalendarga eslatma qo'sh.",
        agentSteps: [
          "[Device NPU]: Uzbek intent parsed: 1. Send Telegram message, 2. Add Calendar event.",
          "[Local Agent]: Opening Telegram -> locating contact 'Akmal'.",
          "[Local Agent]: Composing message: 'Ertaga soat 10:00 da loyiha bo'yicha ko'rishamiz'. Sent.",
          "[Local Agent]: Switching to Device Calendar -> creating event for tomorrow 10:00 AM.",
          "[Device NPU]: Workflow completed in 420ms. Zero cloud calls.",
        ],
      },
    },
    "syntheta-code": {
      slug: "syntheta-code",
      badge: "Autonomous Software Engineer // CLI & IDE",
      name: "Syntheta Code",
      tagline: "The terminal and IDE agent that plans changes, edits entire codebases, runs test suites, and drafts verified PRs.",
      description:
        "Syntheta Code is an autonomous coding agent architected for production codebases. It operates inside your terminal or editor, maintains 256k-token repository-wide context, reads multi-file dependencies, runs your test suites in isolated sandboxes, and verifies that tests pass before presenting atomic diffs for your review.",
      stats: [
        { label: "Context Window", value: "256k tokens" },
        { label: "Multi-file Edits", value: "Automated" },
        { label: "Test Loop", value: "Self-healing" },
        { label: "Review Control", value: "100% Diff-based" },
      ],
      features: [
        {
          title: "Full Repository Semantic Indexing",
          description:
            "Builds a comprehensive AST and vector graph of your entire codebase, navigating deeply nested imports, shared types, and package dependencies without hallucinating APIs.",
          tag: "Repo Graph",
        },
        {
          title: "Self-Healing Test & Build Loop",
          description:
            "Executes build commands (cargo, pytest, npm, go test). When a test fails, it inspects stack traces, repairs the offending lines, and re-runs until green.",
          tag: "Auto-Iteration",
        },
        {
          title: "Atomic Diff Review System",
          description:
            "Never makes uncommitted surprise edits. Every change is structured as an atomic git diff that you inspect, modify, or approve with a single keystroke.",
          tag: "Git Native",
        },
        {
          title: "Sandboxed Local Subprocesses",
          description:
            "Runs commands inside dedicated lightweight sandbox containers with strict outbound network policies and sensitive environment variable redaction.",
          tag: "Safe Execution",
        },
      ],
      specs: [
        { label: "Context Window Capacity", value: "256,000 tokens active cache" },
        { label: "Supported Tooling", value: "Git, Bash, Zsh, Docker, Nix, VS Code, JetBrains" },
        { label: "Languages Supported", value: "TypeScript, Python, Rust, Go, C++, Swift, Java" },
        { label: "Sandbox Security", value: "Bubblewrap / Containerized isolation with secret masking" },
        { label: "Verification Target", value: "Passing compiler checks and test suites" },
        { label: "Deployment Options", value: "Local CLI binary or self-hosted enterprise cluster" },
      ],
      pipeline: [
        {
          step: "01",
          name: "Repository Topology Ingestion",
          detail: "Scans repository structure, dependency manifests, and linters to construct an execution blueprint.",
        },
        {
          step: "02",
          name: "Plan & Multi-File Code Synthesis",
          detail: "Decomposes feature or bug requests into ordered file modifications with strict type preservation.",
        },
        {
          step: "03",
          name: "Sandbox Verification & Diff Presentation",
          detail: "Executes test commands, resolves runtime errors, and displays a clean unified diff for human approval.",
        },
      ],
      demoSimulation: {
        userPrompt: "$ syntheta refactor --fix-race-condition src/worker/queue.ts",
        agentSteps: [
          "[Syntheta Code]: Analyzing queue.ts concurrency primitives and related test files.",
          "[Syntheta Code]: Detected mutex starvation under high throughput in sync_job().",
          "[Syntheta Code]: Applying non-blocking ring buffer refactor across queue.ts and pool.ts.",
          "[Syntheta Code]: Executing 'npm test' -> 18 passed, 0 failed. Time elapsed: 1.8s.",
          "[Syntheta Code]: Git diff prepared: +38 / -14 lines. Ready for your review.",
        ],
      },
    },
    "syntheta-research": {
      slug: "syntheta-research",
      badge: "Scientific Discovery Agent // Formal Reasoning",
      name: "Syntheta Research",
      tagline: "Autonomous scientific exploration across millions of papers, formal proof checking, and reproducible empirical analysis.",
      description:
        "Syntheta Research conducts deep scientific investigations across peer-reviewed publications and clinical/genomic datasets. It synthesizes literature, validates mathematical lemmas using formal verification engines (Lean 4, Z3), and outputs reproducible computational workflows with every citation verified against primary sources.",
      stats: [
        { label: "Corpus Coverage", value: "100M+ papers" },
        { label: "Proof Engine", value: "Lean 4 / Z3" },
        { label: "Hallucinated Citations", value: "0.00%" },
        { label: "Reproducibility", value: "100% Docker" },
      ],
      features: [
        {
          title: "Rigorous Primary Source Grounding",
          description:
            "Every scientific assertion links directly to an active DOI, PubMed ID, or arXiv identifier. Unsubstantiated claims are rejected by the validation kernel.",
          tag: "Citation Proof",
        },
        {
          title: "Interactive Theorem Proving",
          description:
            "Integrates with Lean 4 and Z3 SMT solvers to evaluate mathematical theorems, eliminating reasoning gaps in formal specifications and algorithmic proofs.",
          tag: "Formal Logic",
        },
        {
          title: "Self-Executing Computational Notebooks",
          description:
            "Generates containerized Python/Jupyter workflows with pinned dependencies and dataset downloaders to replicate statistical experiments on demand.",
          tag: "Reproducibility",
        },
        {
          title: "Cross-Discipline Synthesis",
          description:
            "Unifies insights across biotechnology, machine learning, physics, and computational biology to identify cross-domain hypotheses and unexplored solutions.",
          tag: "Deep Search",
        },
      ],
      specs: [
        { label: "Supported Data Sources", value: "arXiv, PubMed, Nature, Science, IEEE, OpenAlex, ChEMBL" },
        { label: "Proof Verification Engine", value: "Lean 4 Kernel + Z3 SMT Solver" },
        { label: "Export Formats", value: "LaTeX Manuscript, PDF Report, Reproducible Docker Environment" },
        { label: "Citation Verification Target", value: "100% verified against DOI registry" },
        { label: "Compute Cluster Support", value: "Deployable on private air-gapped GPU superclusters" },
        { label: "Data Integrity Standard", value: "Cryptographically hashed audit trails for all claims" },
      ],
      pipeline: [
        {
          step: "01",
          name: "Deep Literature Retrieval & Filtering",
          detail: "Queries scientific APIs and vector embeddings to construct a high-relevance citation corpus.",
        },
        {
          step: "02",
          name: "Formal Claim & Theorem Verification",
          detail: "Transcribes mathematical arguments to Lean 4 code and validates truth values against axiom sets.",
        },
        {
          step: "03",
          name: "Synthesized Report & Code Package",
          detail: "Compiles a verified scientific brief with cited bibliographies and executable experimental code.",
        },
      ],
      demoSimulation: {
        userPrompt: "Synthesize recent 2025-2026 breakthroughs in 4-bit transformer quantization for edge devices.",
        agentSteps: [
          "[Syntheta Research]: Ingested 142 peer-reviewed papers from arXiv and IEEE.",
          "[Syntheta Research]: Extracted Pareto frontiers: perplexity vs. memory bandwidth on mobile NPUs.",
          "[Syntheta Research]: Verified mathematical proofs for activation outlier smoothing in Lean 4.",
          "[Syntheta Research]: Generated benchmark reproduction script with PyTorch & Triton kernels.",
          "[Syntheta Research]: Published dossier: 24 verified references, zero ungrounded assertions.",
        ],
      },
    },
  },
};

export type Dictionary = typeof en;
export type ProductDetail = (typeof en.productPages)["syntheta-mobile"];
