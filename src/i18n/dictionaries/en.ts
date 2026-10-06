/**
 * English is the source dictionary. Its shape defines the `Dictionary` type,
 * so uz.ts and ru.ts will fail to compile if any key is missing.
 */
export const en = {
  meta: {
    title: "Tensoric AI: Applied AI Research Lab",
    description:
      "We build on-device language models and autonomous agents for software engineering and scientific research.",
    keywords:
      "on-device AI, autonomous coding agent, scientific research AI, local LLM, Uzbek AI, sovereign compute, Tensoric",
  },
  nav: {
    products: "Products",
    services: "Services",
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
    primary: "Explore Services",
    secondary: "View Products",
    imageAlt: "Ascending monoliths with glowing frames",
  },
  products: {
    eyebrow: "Products",
    titleLine1: "Proprietary",
    titleLine2: "products",
    description: "On-device and autonomous AI systems.",
    learnMore: "View details",
    viewAll: "Explore All Products",
    items: [
      {
        id: "mobile-agent",
        slug: "tensoric-mobile",
        category: "On-device agent",
        name: "Tensoric Mobile",
        summary:
          "A compact model running locally on the phone's GPU using only ~500 MB RAM. Understands Uzbek and operates apps on the user's behalf.",
        capabilities: [
          "Runs offline, entirely on the phone's local GPU",
          "Ultra-lightweight footprint (~500 MB RAM)",
          "Operates apps and settings from spoken or typed Uzbek requests",
        ],
        status: "In development",
        cta: "Explore Tensoric Mobile",
      },
      {
        id: "coder",
        slug: "tensoric-code",
        category: "Coding agent",
        name: "Tensoric Code",
        summary:
          "An autonomous software engineer for the terminal and IDE. It reads a repository, plans changes, edits files and runs tests.",
        capabilities: [
          "Repository-wide context and multi-file edits",
          "Runs commands and iterates until tests pass",
          "Every change is a diff you review and approve",
        ],
        status: "In development",
        cta: "Explore Tensoric Code",
      },
      {
        id: "researcher",
        slug: "tensoric-research",
        category: "Research agent",
        name: "Tensoric Research",
        summary:
          "A deep-research agent for scientific work. It reviews literature, runs analyses and reports findings with cited sources.",
        capabilities: [
          "Literature review across papers and datasets",
          "Reproducible analysis with code and data included",
          "Every claim linked to a verifiable source",
        ],
        status: "In development",
        cta: "Explore Tensoric Research",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    titleLine1: "Engineering",
    titleLine2: "services",
    description: "Tailored enterprise AI solutions.",
    viewAll: "Explore All Services",
    requestAudit: "Request Architecture Consultation",
    learnMore: "Technical details",
    items: [
      {
        id: "custom-ai",
        slug: "custom-ai",
        category: "Enterprise Software",
        title: "Bespoke Enterprise AI & Agentic Systems",
        shortDescription:
          "End-to-end development of custom agentic software, multi-agent workflows, and deterministic decision engines tailored to your business processes.",
        fullDescription:
          "We architect autonomous agent systems and bespoke LLM applications that integrate directly into your daily operational workflows. Unlike generic wrappers, our systems feature deterministic validation layers, multi-step goal planning, and real-time self-correction kernels.",
        deliverables: [
          "Custom multi-agent workflows with automated self-correction",
          "Domain-specific decision engines and operational assistants",
          "Deterministic validation kernels preventing hallucinations",
          "Production-grade gRPC/REST APIs and microservices",
        ],
        technologies: ["LangGraph", "DeepSeek/Llama Kernels", "vLLM", "Rust/C++ Runtime"],
        metric: "99.9% Task Execution Reliability",
        tag: "Autonomous Systems",
      },
      {
        id: "model-adaptation",
        slug: "model-adaptation",
        category: "Deep Learning",
        title: "Proprietary Model Pre-Training & Domain Adaptation",
        shortDescription:
          "Continual pre-training, full-parameter fine-tuning, and alignment on your organization's confidential datasets with 100% intellectual property ownership.",
        fullDescription:
          "General models lack specific domain vocabulary and trade secrets. We fine-tune and continually pre-train foundation models on your internal documents, codebases, and databases. All model weights and checkpoints remain your exclusive intellectual property.",
        deliverables: [
          "Continual pre-training on industry-specific enterprise corpora",
          "LoRA, QLoRA, and full-weight parameter adaptation",
          "RLHF / DPO (Direct Preference Optimization) aligned to corporate policies",
          "Proprietary model weights delivered with 100% IP ownership",
        ],
        technologies: ["PyTorch", "FlashAttention-3", "DeepSpeed ZeRO-3", "Megatron-LM"],
        metric: "98.8% Domain Accuracy",
        tag: "Private Weights",
      },
      {
        id: "system-integration",
        slug: "system-integration",
        category: "Enterprise Infrastructure",
        title: "On-Premise & Legacy Systems Integration",
        shortDescription:
          "Secure, zero-leakage integration with enterprise ERPs (SAP, 1C), CRMs, relational databases, and data lakes inside private cloud VPCs or air-gapped data centers.",
        fullDescription:
          "We bring intelligence to your existing corporate stack without disrupting production data pipelines. Our deployments operate strictly within your security boundary with zero telemetry and zero external internet egress.",
        deliverables: [
          "100% air-gapped deployment with zero external internet dependencies",
          "Native integration with SAP, 1C, Oracle, PostgreSQL, and Data Lakes",
          "Enterprise SSO, RBAC, and cryptographically signed audit logs",
          "Automated ETL pipelines and vector search indexing for internal knowledge",
        ],
        technologies: ["Docker / Kubernetes", "SAP / 1C Connectors", "Qdrant / Milvus", "Air-Gapped Enclaves"],
        metric: "Zero External Egress",
        tag: "Air-Gapped & Secure",
      },
      {
        id: "hardware-acceleration",
        slug: "hardware-acceleration",
        category: "Silicon & Edge",
        title: "Custom Silicon Acceleration & Extreme Quantization",
        shortDescription:
          "Profiling and compiling models specifically for target silicon: Apple Silicon (Metal), NVIDIA GPUs (TensorRT-LLM), Qualcomm NPUs, or embedded ARM hardware.",
        fullDescription:
          "Deploying massive models on standard hardware leads to unacceptable latency and bloated server bills. We write custom hardware kernels and apply aggressive INT4/INT8/FP8 quantization so models run at blazing speeds on client devices and private clusters.",
        deliverables: [
          "INT4, INT8, FP8, and AWQ quantization with near-zero perplexity degradation",
          "Custom Metal and CoreML kernels for Apple Silicon chips",
          "TensorRT-LLM and Triton Inference Server optimization for NVIDIA clusters",
          "Sub-50ms Time-To-First-Token (TTFT) and 3-5x lower memory footprint",
        ],
        technologies: ["Apple Metal/CoreML", "NVIDIA TensorRT-LLM", "Qualcomm NPU SDK", "llama.cpp / vLLM"],
        metric: "< 50ms TTFT Latency",
        tag: "Silicon Optimized",
      },
      {
        id: "ai-governance-security",
        slug: "ai-governance-security",
        category: "Security & Compliance",
        title: "Enterprise AI Security, Red-Teaming & Guardrails",
        shortDescription:
          "Defending AI systems against prompt injection, data extraction, adversarial poisoning, and ungrounded outputs with cryptographic audit trails.",
        fullDescription:
          "Enterprise deployment requires ironclad security. We conduct rigorous red-teaming audits, deploy deterministic firewall guards around model inputs/outputs, and enforce mathematical verification to eliminate vulnerabilities.",
        deliverables: [
          "Adversarial red-team stress testing and vulnerability reports",
          "Deterministic input/output filtering guards (Zero-leak DLP)",
          "Formal verification using logic solvers (Lean 4, Z3)",
          "ISO/IEC 42001 and enterprise compliance readiness documentation",
        ],
        technologies: ["Lean 4", "Z3 SMT Solver", "Guardrails AI", "Cryptographic Hashing"],
        metric: "0.00% Data Leakage",
        tag: "Red-Teaming & Audit",
      },
      {
        id: "distributed-inference",
        slug: "distributed-inference",
        category: "Scale & Reliability",
        title: "High-Throughput Distributed Inference Clusters",
        shortDescription:
          "Engineering high-concurrency serving infrastructures capable of processing tens of thousands of requests per second with automatic load balancing.",
        fullDescription:
          "We design and operate resilient inference clusters with speculative decoding, dynamic batching, and multi-node GPU orchestration to maintain high throughput and minimal operating cost under extreme load.",
        deliverables: [
          "Autoscaling GPU/NPU worker pools with dynamic request batching",
          "Speculative decoding and continuous batching pipelines",
          "Real-time latency, throughput, and token-cost monitoring dashboards",
          "24/7 dedicated engineering support and on-call SLA",
        ],
        technologies: ["Ray Serve", "Kubernetes", "Prometheus/Grafana", "Envoy Gateway"],
        metric: "99.99% Cluster Uptime",
        tag: "High Concurrency",
      },
    ],
    guaranteesTitle: "Enterprise Deployment Standards",
    guarantees: [
      {
        title: "100% Sovereign Weights & IP",
        description: "All fine-tuned weights, training scripts, and custom architectures belong solely to your organization.",
      },
      {
        title: "Strict Air-Gapped Operation",
        description: "Zero telemetry, zero third-party API dependencies. Runs securely within your isolated network boundary.",
      },
      {
        title: "Deterministic Guardrails",
        description: "Outputs are mathematically and logically validated before hitting critical business systems.",
      },
      {
        title: "Hardware-Tailored Efficiency",
        description: "Squeezes maximum performance out of existing hardware, drastically lowering capital and electricity costs.",
      },
    ],
    roadmapTitle: "Technical Engagement Roadmap",
    roadmapSubtitle: "From architectural audit to production deployment in weeks, not quarters.",
    roadmapSteps: [
      {
        phase: "Phase 01",
        title: "Architecture & Feasibility Audit",
        duration: "Week 1",
        description: "We analyze your infrastructure, data security requirements, hardware constraints, and business KPIs.",
      },
      {
        phase: "Phase 02",
        title: "Prototype & Fine-Tuning Benchmark",
        duration: "Weeks 2-3",
        description: "Custom model adaptation on a sealed test dataset with quantitative accuracy and latency benchmarks.",
      },
      {
        phase: "Phase 03",
        title: "On-Premise Deployment & Hardening",
        duration: "Weeks 4-5",
        description: "Integration into internal ERP/CRM systems, air-gapped security lockdown, and load testing.",
      },
      {
        phase: "Phase 04",
        title: "Production Handover & 24/7 SLA",
        duration: "Ongoing",
        description: "Full code and weight handover, internal engineering training, and mission-critical operational support.",
      },
    ],
    contactCta: {
      headline: "Ready to deploy sovereign AI across your enterprise?",
      detail: "Schedule a confidential technical discovery call with our principal AI engineers.",
      button: "Request Technical Architecture Audit",
    },
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
  trackRecord: {
    eyebrow: "Track Record",
    headline: "Verified Metrics",
    stats: [
      {
        value: "20+",
        label: "AI Projects",
        detail: "Fintech, telecom & enterprise logistics",
      },
      {
        value: "5",
        label: "Enterprise Retainers",
        detail: "Dedicated on-premise SLA support",
      },
      {
        value: "3",
        label: "Strategic Partners",
        detail: "Supercompute & hardware labs",
      },
      {
        value: "99.2%",
        label: "Operational Uptime",
        detail: "Production mission-critical environments",
      },
    ],
    clientsTitle: "Enterprise Clients",
    clients: [
      {
        name: "Apex Fintech",
        sector: "Fintech",
        project: "Automated underwriting & risk pipeline",
      },
      {
        name: "Nexus Telecom",
        sector: "Telecom",
        project: "Native Uzbek customer intelligence LLM",
      },
      {
        name: "Orient Logistics",
        sector: "Logistics",
        project: "Multi-agent dispatching & routing",
      },
      {
        name: "Medica Diagnostics",
        sector: "Healthcare",
        project: "Air-gapped clinical data synthesis",
      },
      {
        name: "SilkRoad Retail",
        sector: "Retail",
        project: "Predictive inventory & demand forecasting",
      },
    ],
    partnersTitle: "Strategic Partners",
    partners: [
      {
        name: "ComputeGrid",
        role: "H100 GPU clusters & private supercomputing",
        tag: "Infrastructure",
      },
      {
        name: "Silicon NPU Labs",
        role: "Hardware-level INT4 quantization & edge acceleration",
        tag: "Hardware",
      },
      {
        name: "Applied Cognitive Inst.",
        role: "Formal mathematical verification & Lean 4 models",
        tag: "Research",
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
    servicesTitle: "Services",
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
    breadcrumbServices: "Services",
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
    "tensoric-mobile": {
      slug: "tensoric-mobile",
      badge: "Mobile AI // Local GPU Execution",
      name: "Tensoric Mobile",
      tagline: "Autonomous smartphone operation with native Uzbek fluency. Runs locally on the phone's GPU using ~500 MB RAM.",
      description:
        "Tensoric Mobile is a compact, privacy-first AI engine designed to run entirely on the smartphone's local GPU. Operating within approximately 500 MB of RAM, it navigates apps, executes multi-step workflows, and natively understands spoken and written Uzbek without sending personal data to external clouds.",
      stats: [
        { label: "Memory Footprint", value: "~500 MB RAM" },
        { label: "Execution Engine", value: "Local GPU" },
        { label: "Cloud Uploads", value: "0 bytes (Offline)" },
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
          title: "100% Offline Privacy Perimeter",
          description:
            "Operates locally on device without requiring an active cellular or Wi-Fi connection. Private data, credentials, and personal chats never touch external servers.",
          tag: "Local Privacy",
        },
        {
          title: "Local Mobile GPU Acceleration",
          description:
            "Directly leverages the phone's GPU for instant response times, utilizing only around 500 MB of system RAM while preserving device battery life.",
          tag: "Local GPU",
        },
      ],
      specs: [
        { label: "Memory Footprint", value: "~500 MB system RAM" },
        { label: "Compute Engine", value: "Smartphone's internal GPU" },
        { label: "Network Requirement", value: "100% Offline (No internet needed)" },
        { label: "Language Coverage", value: "Uzbek language (Voice & Text input)" },
        { label: "Data Leakage Rate", value: "0.00% (All data remains on device)" },
        { label: "Target Platforms", value: "Android and iOS" },
      ],
      pipeline: [
        {
          step: "01",
          name: "Natural Language Parser",
          detail: "Transcribes and tokenizes raw Uzbek audio or text in real time on the device GPU.",
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
          "[Device GPU]: Uzbek intent parsed: 1. Send Telegram message, 2. Add Calendar event.",
          "[Local Agent]: Opening Telegram -> locating contact 'Akmal'.",
          "[Local Agent]: Composing message: 'Ertaga soat 10:00 da loyiha bo'yicha ko'rishamiz'. Sent.",
          "[Local Agent]: Switching to Device Calendar -> creating event for tomorrow 10:00 AM.",
          "[Device GPU]: Workflow completed locally via GPU. RAM: ~500 MB, cloud calls: 0.",
        ],
      },
    },
    "tensoric-code": {
      slug: "tensoric-code",
      badge: "Autonomous Software Engineer // CLI & IDE",
      name: "Tensoric Code",
      tagline: "The terminal and IDE agent that plans changes, edits entire codebases, runs test suites, and drafts verified PRs.",
      description:
        "Tensoric Code is an autonomous coding agent architected for production codebases. It operates inside your terminal or editor, maintains 256k-token repository-wide context, reads multi-file dependencies, runs your test suites in isolated sandboxes, and verifies that tests pass before presenting atomic diffs for your review.",
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
        userPrompt: "$ tensoric refactor --fix-race-condition src/worker/queue.ts",
        agentSteps: [
          "[Tensoric Code]: Analyzing queue.ts concurrency primitives and related test files.",
          "[Tensoric Code]: Detected mutex starvation under high throughput in sync_job().",
          "[Tensoric Code]: Applying non-blocking ring buffer refactor across queue.ts and pool.ts.",
          "[Tensoric Code]: Executing 'npm test' -> 18 passed, 0 failed. Time elapsed: 1.8s.",
          "[Tensoric Code]: Git diff prepared: +38 / -14 lines. Ready for your review.",
        ],
      },
    },
    "tensoric-research": {
      slug: "tensoric-research",
      badge: "Scientific Discovery Agent // Formal Reasoning",
      name: "Tensoric Research",
      tagline: "Autonomous scientific exploration across millions of papers, formal proof checking, and reproducible empirical analysis.",
      description:
        "Tensoric Research conducts deep scientific investigations across peer-reviewed publications and clinical/genomic datasets. It synthesizes literature, validates mathematical lemmas using formal verification engines (Lean 4, Z3), and outputs reproducible computational workflows with every citation verified against primary sources.",
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
          "[Tensoric Research]: Ingested 142 peer-reviewed papers from arXiv and IEEE.",
          "[Tensoric Research]: Extracted Pareto frontiers: perplexity vs. memory bandwidth on mobile NPUs.",
          "[Tensoric Research]: Verified mathematical proofs for activation outlier smoothing in Lean 4.",
          "[Tensoric Research]: Generated benchmark reproduction script with PyTorch & Triton kernels.",
          "[Tensoric Research]: Published dossier: 24 verified references, zero ungrounded assertions.",
        ],
      },
    },
  },
};

export type Dictionary = typeof en;
export type ProductDetail = (typeof en.productPages)["tensoric-mobile"];
