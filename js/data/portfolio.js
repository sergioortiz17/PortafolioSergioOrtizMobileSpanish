export const personal = {
  name: 'Sergio Ortiz',
  role: 'DevOps & SRE Engineer',
  bio: "6+ years of experience in the software industry, evolving from manual QA to automation, iOS development, and now focused on infrastructure. DevOps Engineer at Craftech with 1+ year of experience working on IaC, CI/CD, Kubernetes, data, and monitoring.",
  email: 'sergioortiz170992@gmail.com',
  github: 'https://github.com/sergioortiz17',
  linkedin: 'https://linkedin.com/in/sergio-ortiz-mendoza17',
  whatsapp: 'https://wa.me/5493517860065',
  whatsappDisplay: '+54 9 351 786 0065',
};

export const navLinks = [
  { label: 'About',          href: 'about.html' },
  { label: 'Journey',        href: '#journey' },
  { label: 'Skills',         href: 'skills.html' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects',       href: 'projects.html' },
  { label: 'CV',             href: 'cv.html' },
  { label: 'Contact',        href: '#contact', cta: true },
];

export const heroTags = [
  'Kubernetes', 'EKS', 'Terraform', 'ArgoCD',
  'GitOps', 'AWS', 'Prometheus', 'Grafana',
];

export const aboutParagraphs = [
  "I'm a <strong>DevOps & SRE Engineer</strong> based in Tanti, Córdoba, Argentina (originally from Venezuela) with 6+ years in the software industry, including 1+ year specializing in DevOps and SRE. Currently at <strong>Craftech</strong>, managing EKS clusters, GitOps pipelines with ArgoCD, and multi-cloud infrastructure across AWS and Azure.",
  "Before DevOps, I worked as an <strong>iOS SDET & QA Automation Engineer at Stori</strong> — a Fintech Unicorn — building mobile test automation with Appium and WebDriverAgent, and developing native iOS components in Swift. Earlier, I led QA and blockchain testing at <strong>Xcapit</strong>, a blockchain startup.",
  "That cross-discipline background — mobile dev, quality engineering, and now infrastructure — means I understand systems from the user's screen all the way down to the cloud layer.",
];

export const journey = [
  {
    period: '03/2025 — Present',
    role: 'DevOps & SRE Cloud Engineer',
    company: 'Craftech · StartUp · Hybrid — Córdoba, Argentina',
    logo: 'assets/logos/craftech.svg',
    logoInitials: 'CT',
    logoGradient: 'linear-gradient(135deg, #7c3aed, #2563eb)',
    description: 'Managing EKS clusters with Karpenter for auto-scaling, Helm for packaging, and ArgoCD for GitOps. Provisioning all AWS infrastructure with Terraform (modules, workspaces, remote state) and Terragrunt. Daily work across EKS, RDS, ElastiCache (Redis), S3, and CloudWatch; Azure VNet peering and Virtual Private Links for cross-cloud connectivity. Full observability stack with Prometheus, Grafana, Loki, and Thanos; APM with New Relic and Datadog.',
    tech: ['EKS', 'Karpenter', 'Helm', 'ArgoCD', 'Terraform', 'Terragrunt', 'GitHub Actions', 'Azure Pipelines', 'Prometheus', 'Grafana', 'Loki', 'Thanos', 'New Relic', 'Datadog', 'SonarQube'],
    current: true,
  },
  {
    period: '08/2023 — 03/2025',
    role: 'iOS SDET & QA Automation Engineer',
    company: 'Stori · Fintech Unicorn · Remote — CDMX, Mexico',
    logo: 'assets/logos/stori.svg',
    logoInitials: 'S',
    logoGradient: 'linear-gradient(135deg, #059669, #06b6d4)',
    description: 'Built native iOS components with Swift/SPM, Server Driven UI (BFF pattern), MVVM, and XCTest. Led mobile test automation with Appium (iOS & Android) + WebDriverAgent, and API automation with Selenium + Python and MITMProxy. Validated large-scale event flows across S3, Kafka, AWS Glue, and Athena within automated test pipelines.',
    tech: ['Swift', 'XCTest', 'Appium', 'WebDriverAgent', 'Selenium', 'Python', 'MITMProxy', 'JMeter', 'Kafka', 'AWS Glue'],
    current: false,
  },
  {
    period: '02/2020 — 05/2023',
    role: 'Specialized Adviser — QA Manual & Automation',
    company: 'Xcapit · StartUp Blockchain · Remote — Córdoba, Argentina',
    logo: 'assets/logos/xcapit.svg',
    logoInitials: 'XC',
    logoGradient: 'linear-gradient(135deg, #d97706, #ea580c)',
    description: 'Smart contract testing with Solidity/Hardhat on Sepolia testnet; DApps, MetaMask, DeFi protocols, WalletConnect, and gas optimization. API testing with Postman/Insomnia; traffic inspection with MITMProxy/Proxyman; Firebase for events, notifications, and feature flags. SQL queries for validation across distributed systems.',
    tech: ['Solidity', 'Hardhat', 'Postman', 'MITMProxy', 'Firebase', 'SQL', 'Web3', 'MetaMask'],
    current: false,
  },
];

export const skills = [
  {
    type: 'devops',
    icon: '⚙️',
    title: 'DevOps & SRE',
    subtitle: 'Orchestration, IaC, GitOps, CI/CD',
    items: ['Kubernetes', 'EKS', 'Karpenter', 'Helm', 'ArgoCD', 'Terraform', 'Terragrunt', 'GitHub Actions', 'Azure Pipelines', 'GitOps', 'IaC', 'SonarQube'],
  },
  {
    type: 'cloud',
    icon: '☁️',
    title: 'Cloud & Observability',
    subtitle: 'AWS, Azure, monitoring stacks',
    items: ['AWS', 'EKS', 'RDS', 'ElastiCache', 'S3', 'CloudWatch', 'Azure', 'Prometheus', 'Grafana', 'Loki', 'Thanos', 'New Relic', 'Datadog'],
  },
  {
    type: 'qa',
    icon: '🧪',
    title: 'SDET & QA Automation',
    subtitle: 'Mobile, API, performance testing',
    items: ['Appium', 'WebDriverAgent', 'Selenium', 'XCTest', 'JUnit', 'Postman', 'MITMProxy', 'JMeter', 'Python'],
  },
  {
    type: 'dev',
    icon: '💻',
    title: 'Languages & Tools',
    subtitle: 'Backend, mobile, blockchain',
    items: ['Python', 'Go', 'Swift', 'Java', 'SQL', 'Solidity', 'Firebase', 'Git'],
  },
];

export const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: '2025',
    status: 'completed',
    icon: '☁️',
    badge: 'assets/logos/aws-badge.png',
    type: 'aws',
    url: 'https://www.credly.com/badges/f62ba792-5d8e-43ae-9e41-663611f86cb0/linked_in_profile',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional',
    issuer: 'Oracle',
    date: 'Oct 2025',
    status: 'completed',
    icon: '⚙️',
    badge: 'assets/logos/oracle-devops-badge.png',
    badgeSize: 130,
    type: 'oracle',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=E19C64E22FB95EC777A2AFAC7D5394B5D410146749D120D1D2CCB1CF3FD6E3F1',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Architect Associate',
    issuer: 'Oracle',
    date: 'Oct 2025',
    status: 'completed',
    icon: '🏗️',
    badge: 'assets/logos/oracle-oci-badge.png',
    badgeSize: 130,
    type: 'oracle',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=458FF08D0507FCFDD8FDC0B5E49BF05D50ADE48F6503E74F776104A1D9A1618F',
  },
  {
    name: 'Oracle AI Autonomous Database 2025 Certified Professional',
    issuer: 'Oracle',
    date: 'Oct 2025',
    status: 'completed',
    icon: '🤖',
    badge: 'assets/logos/oracle-db-badge.png',
    type: 'oracle',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=FD3BB4F644B136DA77A75033B546DB0E03E39F7063F989625ABC61890B9D9F7E',
  },
];

export const projects = [
  {
    type: 'DevOps · Kubernetes',
    title: 'EKS Cluster Platform with Karpenter',
    description: 'Manage production EKS clusters with Karpenter for intelligent node auto-scaling. Handle cluster upgrades, add-on lifecycle, and multi-tenant workload isolation using Helm charts.',
    tech: ['EKS', 'Karpenter', 'Helm', 'AWS'],
  },
  {
    type: 'DevOps · GitOps',
    title: 'GitOps Delivery with ArgoCD',
    description: 'Implemented GitOps workflows using ArgoCD as the delivery engine. All application deployments are declared in Git and reconciled automatically, enabling auditable and rollback-safe releases.',
    tech: ['ArgoCD', 'Helm', 'GitHub Actions', 'Kubernetes'],
  },
  {
    type: 'SRE · Observability',
    title: 'Full Observability Stack',
    description: 'Deployed and operate a full observability platform: Prometheus + Thanos for metrics with long-term storage, Grafana for dashboards, Loki for log aggregation. APM with New Relic and Datadog.',
    tech: ['Prometheus', 'Grafana', 'Loki', 'Thanos', 'Datadog'],
  },
  {
    type: 'SDET · Mobile',
    title: 'iOS & Android Automation at Stori',
    description: 'Built the mobile test automation framework at a Fintech Unicorn using Appium + WebDriverAgent. Covered iOS and Android regression suites integrated into CI, reducing manual testing cycles significantly.',
    tech: ['Appium', 'WebDriverAgent', 'Python', 'XCTest'],
  },
  {
    type: 'QA · Blockchain',
    title: 'Smart Contract & DApp Testing at Xcapit',
    description: 'Led QA for a DeFi wallet platform: smart contract testing with Solidity/Hardhat on Sepolia testnet, WalletConnect flows, gas optimization validation, and API testing with MITMProxy.',
    tech: ['Solidity', 'Hardhat', 'MITMProxy', 'Postman'],
  },
  {
    type: 'Cloud · IaC',
    title: 'Multi-cloud AWS + Azure Infrastructure',
    description: 'Provisioned and maintain all infrastructure with Terraform and Terragrunt (DRY configs). Designed cross-cloud connectivity between AWS and Azure using VNet peering and Virtual Private Links.',
    tech: ['Terraform', 'Terragrunt', 'AWS', 'Azure'],
  },
];

export const education = [
  {
    degree: "Bachelor's Degree in Cybersecurity & Cyber Defense",
    institution: 'FADENA – Universidad de la Defensa Nacional (UNDEF)',
    period: '03/2026 — Present',
    status: 'in-progress',
  },
  {
    degree: "Associate Degree in Software Development",
    institution: 'ITSC – Instituto Técnico Superior Córdoba',
    period: '04/2024 — Present',
    status: 'in-progress',
  },
  {
    degree: 'DevOps Bootcamp · 250hs',
    institution: 'FCEFyN – mundosE',
    period: '11/2023 — 09/2024',
    status: 'completed',
  },
  {
    degree: 'Full Stack Developer Bootcamp · 300hs',
    institution: 'ISPC – Instituto Superior Politécnico Córdoba',
    period: '04/2021 — 11/2021',
    status: 'completed',
  },
];
