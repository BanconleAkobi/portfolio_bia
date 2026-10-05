export type ProjectCategory = 'Cybersécurité' | 'Web / Full-Stack' | 'SaaS' | 'Infrastructure' | 'Mobile' | 'IA';

export interface Project {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  stack: string[];
  /** Traduction de `stack`, quand elle contient autre chose que des noms propres. */
  stackEn?: string[];
  category: ProjectCategory;
  /**
   * Projet retiré de l'affichage. Il reste dans le fichier pour être repris
   * plus tard, mais n'apparaît ni dans la grille ni dans les filtres.
   */
  hidden?: boolean;
  github?: string;
  demo?: string;
  featured?: boolean;
  repoEmpty?: boolean;
  image?: string;
}

/**
 * Clé stable par catégorie. Les libellés sont traduits côté i18n : c'est la
 * clé, pas le libellé, qui relie un bouton de filtre à une carte projet.
 */
export const CATEGORY_KEYS = {
  'Cybersécurité': 'cybersecurite',
  'Web / Full-Stack': 'web',
  'SaaS': 'saas',
  'Infrastructure': 'infra',
  'Mobile': 'mobile',
  'IA': 'ia',
} as const satisfies Record<ProjectCategory, string>;

export type CategoryKey = (typeof CATEGORY_KEYS)[ProjectCategory];

export function categoryKey(category: ProjectCategory): CategoryKey {
  return CATEGORY_KEYS[category];
}

/** Ordre d’affichage sur la page d’accueil (section « Projets phares ») */
export const homepageFeaturedProjectIds = [
  'lanceos',
  'soc-easydo',
  'ctf-labs',
  'erp-ecommerce',
] as const;

/**
 * Sélection affichée dans la grille de l’accueil, sous LanceOS.
 * La liste complète reste sur la page Projets.
 */
export const homepageGridProjectIds = [
  'cybersecurite-ia',
  'soc-easydo',
  'ctf-labs',
  'erp-ecommerce',
  'pecule',
  'migrations-prestashop',
  'infra-scaleway',
  'site-portfolio',
] as const;

export const projects: Project[] = [
  {
    id: 'cybersecurite-ia',
    title: "Cybersécurité de l'IA",
    titleEn: 'AI cybersecurity',
    description: "Sécurisation des usages de l'intelligence artificielle dans le secteur de l'assurance : audit, cartographie des usages, campagnes de sensibilisation, mise en place de solutions de sécurisation et conformité au RGPD. Alternance chez Groupe IBS, Lille.",
    descriptionEn: "Securing artificial intelligence usage in the insurance sector: auditing, usage mapping, awareness campaigns, rollout of security solutions and GDPR compliance. Apprenticeship at Groupe IBS, Lille.",
    // Volontairement générique : le détail des outils et des flux audités
    // relève du client et n'a pas à figurer sur un site public.
    stack: ['Audit', 'Cartographie', 'Sensibilisation', 'Conformité RGPD'],
    stackEn: ['Auditing', 'Mapping', 'Awareness', 'GDPR compliance'],
    category: 'Cybersécurité',
  },
  {
    id: 'pecule',
    title: 'Pécule, apprendre à investir',
    titleEn: 'Pécule, learning to invest',
    description: "Application mobile d'initiation à l'investissement. Simulation d'actifs, mini-cours et explications sur les actions, les ETF et les crypto-actifs, avec les calculs associés et une interface animée. Projet réalisé dans le cadre de la formation.",
    descriptionEn: 'Mobile application introducing investment. Asset simulation, short courses and explanations covering stocks, ETFs and crypto assets, with the matching calculations and an animated interface. Built as part of the engineering programme.',
    stack: ['Flutter', 'Android Studio', 'Android et iOS'],
    stackEn: ['Flutter', 'Android Studio', 'Android and iOS'],
    category: 'Mobile',
  },
  {
    id: 'serveur-nas',
    title: 'Serveur NAS',
    titleEn: 'NAS server',
    description: "Mise en place d'un serveur de stockage en réseau en entreprise : installation, partages, droits d'accès et sauvegardes.",
    descriptionEn: 'Rollout of a network attached storage server in production: installation, shares, access rights and backups.',
    stack: ['NAS', 'Linux', 'Sauvegardes'],
    stackEn: ['NAS', 'Linux', 'Backups'],
    category: 'Infrastructure',
  },
  {
    id: 'modelisation-abms',
    title: 'Modélisation multi-agents',
    titleEn: 'Agent-based modelling',
    description: "Modélisation orientée agents (ABMS) sous NetLogo : définition des comportements, des règles d'interaction et observation des dynamiques qui en émergent. Projet en cours.",
    descriptionEn: 'Agent-based modelling (ABMS) in NetLogo: defining behaviours and interaction rules, then observing the dynamics that emerge from them. Work in progress.',
    stack: ['NetLogo', 'ABMS', 'Simulation'],
    category: 'IA',
  },
  {
    id: 'site-portfolio',
    title: 'Ce portfolio',
    titleEn: 'This portfolio',
    description: "Site statique bilingue, conçu et développé de bout en bout : design system sur mesure, thème clair et sombre, images optimisées au build, formulaire sans backend et balisage SEO complet.",
    descriptionEn: 'Bilingual static site, designed and built end to end: a bespoke design system, light and dark themes, build-time image optimization, a backend-free contact form and complete SEO markup.',
    stack: ['Astro', 'TypeScript', 'Netlify'],
    category: 'Web / Full-Stack',
    demo: 'https://banconle.fr',
  },
  {
    id: 'lanceos',
    title: 'LanceOS',
    titleEn: 'LanceOS',
    description: "Plateforme de gestion de projets pour freelances et indépendants. Là où leurs missions se lancent, se suivent et se règlent.\n\nGérez vos projets et laissez vos clients suivre chaque jalon. Vos factures, d'Indy ou d'ailleurs, s'y rangent aussi. Hébergé sur des serveurs français.\n\nAudit de sécurité de 204 tests passé sur l'application, intégration continue via GitHub Actions.",
    descriptionEn: 'Project management platform for freelancers and independent workers. Where their engagements start, get tracked and get settled.\n\nRun your projects and let your clients follow every milestone. Your invoices, from Indy or anywhere else, file themselves in too. Hosted on French servers.\n\nA 204-test security audit passed on the application, continuous integration through GitHub Actions.',
    stack: ['Next.js', 'TypeScript', 'Conformité RGPD'],
    stackEn: ['Next.js', 'TypeScript', 'GDPR compliance'],
    category: 'SaaS',
    demo: 'https://lanceos.eu',
    featured: true,
    image: '/images/projects/lanceos.png',
  },
  {
    id: 'erp-ecommerce',
    title: 'ERP e-commerce sur mesure',
    titleEn: 'Custom e-commerce ERP',
    description: "Développement et maintenance d'un ERP en PHP/Symfony, entièrement intégré aux API PrestaShop et OpenSi. Conception et déploiement d'un back-office de blog rattaché à l'ERP et au site principal, pour la visibilité SEO.",
    descriptionEn: 'Development and maintenance of a PHP/Symfony ERP, fully integrated with the PrestaShop and OpenSi APIs. Design and rollout of a blog back-office tied to both the ERP and the main site, for SEO visibility.',
    stack: ['Symfony', 'PHP', 'API PrestaShop', 'API OpenSi'],
    category: 'Web / Full-Stack',
    image: '/images/projects/erp.png',
  },
  {
    id: 'migrations-prestashop',
    title: 'Migrations PrestaShop',
    titleEn: 'PrestaShop migrations',
    description: "Pilotage et réalisation de la migration de trois plateformes e-commerce, de PrestaShop 1.7.7 vers 8.2, sans interruption de production. Optimisation du SEO et de l'UX/UI dans la foulée.",
    descriptionEn: 'Led and carried out the migration of three e-commerce platforms, from PrestaShop 1.7.7 to 8.2, with no production downtime. SEO and UX/UI optimization along the way.',
    stack: ['PrestaShop 8.2', 'PHP', 'MySQL'],
    category: 'Web / Full-Stack',
  },
  {
    id: 'infra-scaleway',
    title: 'Infrastructure cloud Scaleway',
    titleEn: 'Scaleway cloud infrastructure',
    description: "Gestion et supervision d'une infrastructure cloud en production : optimisation des coûts, montée en charge et automatisation des sauvegardes.",
    descriptionEn: 'Management and monitoring of a production cloud infrastructure: cost optimization, scaling, and backup automation.',
    stack: ['Scaleway', 'Linux', 'Automatisation'],
    stackEn: ['Scaleway', 'Linux', 'Automation'],
    category: 'Infrastructure',
  },
  {
    id: 'tp-ia-othello',
    title: 'TP IA Othello',
    titleEn: 'AI Othello Lab',
    description: 'Agent IA pour le jeu Othello/Reversi avec algorithme Minimax et élagage Alpha-Beta. Évaluation heuristique des positions de plateau.',
    descriptionEn: 'AI agent for Othello/Reversi with Minimax algorithm and Alpha-Beta pruning. Heuristic board position evaluation.',
    stack: ['Python', 'Minimax', 'Alpha-Beta Pruning'],
    category: 'IA',
    github: 'https://github.com/BanconleAkobi/TP_IA_Othello',
    image: '/images/projects/othello.jpg',
  },
  {
    id: 'q-learning',
    title: 'Q-Learning',
    titleEn: 'Q-Learning',
    description: 'Implémentation de l\'algorithme Q-Learning pour résolution de problèmes de navigation/décision. TP d\'apprentissage par renforcement FISA 4A.',
    descriptionEn: 'Q-Learning algorithm implementation for navigation/decision problems. Reinforcement learning lab, 4th-year FISA.',
    stack: ['Python', 'Q-Learning', 'Reinforcement Learning'],
    category: 'IA',
    github: 'https://github.com/BanconleAkobi/Q_learning',
    repoEmpty: true,
  },
  {
    id: 'mini-esb',
    title: 'Mini ESB',
    titleEn: 'Mini ESB',
    description: 'Implémentation d\'un mini Enterprise Service Bus avec communication asynchrone via RabbitMQ. Routage de messages, files d\'attente et intégration inter-services.',
    descriptionEn: 'Mini Enterprise Service Bus with asynchronous messaging via RabbitMQ. Message routing, queues, and inter-service integration.',
    stack: ['Java', 'RabbitMQ', 'Message Architecture'],
    category: 'Infrastructure',
  },
  {
    id: 'soc-easydo',
    title: 'Centre des opérations de sécurité',
    titleEn: 'Security Operations Centre',
    description: "Analyse quotidienne des alertes de sécurité sous Splunk. Déploiement d'un SIEM Wazuh en parallèle de Splunk, en fonctionnement simultané : cluster d'indexeurs à deux nœuds, résolution d'un problème de certificats TLS, répartition de charge par HAProxy.\n\nPasserelle vers Splunk par Splunk Universal Forwarder pour y remonter les alertes Wazuh. Enrôlement d'agents Windows. Règles de détection et d'alerte, dont la détection de tentatives d'authentification en échec en masse. Rédaction de la documentation d'architecture SOC et Wazuh pour les futurs analystes. Stage chez EasyDo Digital Technologies, Bucarest.",
    descriptionEn: 'Daily security alert triage in Splunk. Deployed a Wazuh SIEM alongside Splunk, both running side by side: a two-node indexer cluster, a TLS certificate issue resolved, load balancing through HAProxy.\n\nBridge into Splunk via the Splunk Universal Forwarder to feed Wazuh alerts upstream. Windows agent enrolment. Detection and alerting rules, including mass failed authentication attempts. Wrote the SOC and Wazuh architecture documentation for the analysts who follow. Internship at EasyDo Digital Technologies, Bucharest.',
    stack: ['Splunk', 'Wazuh', 'HAProxy', 'SOC', 'Réponse à incident'],
    stackEn: ['Splunk', 'Wazuh', 'HAProxy', 'SOC', 'Incident response'],
    category: 'Cybersécurité',
    featured: true,
  },
  {
    id: 'ctf-labs',
    title: 'CTF & Pentesting Labs',
    titleEn: 'CTF & Pentesting Labs',
    description: "Analyse de vulnérabilités sur sites web, applications et logiciels. Accès initial et compromission, élévation de privilèges, brute force et scans réseau, audit de sécurité, durcissement des systèmes. Plus de 100 challenges résolus, parcours Junior Penetration Tester complété.",
    descriptionEn: 'Vulnerability analysis on websites, applications and software. Initial access and compromise, privilege escalation, brute force and network scanning, security auditing, system hardening. 100+ challenges solved, Junior Penetration Tester path completed.',
    stack: ['Kali Linux', 'Burp Suite', 'Nmap', 'Metasploit', 'OWASP'],
    category: 'Cybersécurité',
    github: 'https://github.com/BanconleAkobi/CTF',
    featured: true,
    image: '/images/projects/ctf.jpeg',
  },
  {
    id: 'jeu-tron',
    title: 'Jeu Tron',
    titleEn: 'Tron Game',
    description: 'Implémentation du jeu Tron en local avec moteur de collision, rendu graphique temps réel et gestion des inputs joueurs.',
    descriptionEn: 'Local Tron game implementation with collision engine, real-time graphics, and player input management.',
    stack: ['Java', 'JavaFX', 'Spring Boot'],
    hidden: true,
    category: 'Web / Full-Stack',
  },
  {
    id: 'ticket-manager',
    title: 'Ticket Manager',
    titleEn: 'Ticket Manager',
    description: 'Application CRUD de gestion de tickets support avec authentification, gestion de rôles et suivi de statuts.',
    descriptionEn: 'CRUD support ticket management app with authentication, role management, and status tracking.',
    stack: ['Symfony', 'PHP', 'MySQL'],
    category: 'Web / Full-Stack',
    github: 'https://github.com/BanconleAkobi/ticket_manager',
  },
  {
    id: 'chat-c',
    title: 'Chat en C',
    titleEn: 'C Chat',
    description: 'Application de chat client-serveur multi-utilisateurs avec programmation socket bas niveau.',
    descriptionEn: 'Multi-user client-server chat application using low-level socket programming.',
    stack: ['C', 'Sockets', 'TCP/IP'],
    category: 'Infrastructure',
    github: 'https://github.com/BanconleAkobi/C_Chat',
  },
  {
    id: 'creathon',
    title: 'Creathon - Accessibilité Festival',
    titleEn: 'Creathon - Festival Accessibility',
    description: 'Site d\'accompagnement des personnes handicapées lors d\'un festival. Projet Creathon axé accessibilité web.',
    descriptionEn: 'Website assisting people with disabilities at a festival. Creathon project focused on web accessibility.',
    stack: ['HTML', 'CSS', 'Web Design'],
    category: 'Web / Full-Stack',
    github: 'https://github.com/BanconleAkobi/Creathon_project',
    image: '/images/projects/creathon.png',
  },
  {
    id: 'windows-server',
    title: 'Windows Server - TP Infrastructure',
    titleEn: 'Windows Server - Infrastructure Lab',
    description: 'Mise en place d\'une infrastructure réseau complète : contrôleur de domaine AD, serveur DHCP, DNS et hébergement IIS.',
    descriptionEn: 'Complete network infrastructure setup: AD domain controller, DHCP, DNS, and IIS web hosting.',
    stack: ['Windows Server', 'Active Directory', 'DHCP', 'DNS', 'IIS'],
    category: 'Infrastructure',
    image: '/images/projects/windows.png',
  },
  {
    id: 'api-k8s-minikube',
    title: 'Service API - Kubernetes (Minikube)',
    titleEn: 'API Service - Kubernetes (Minikube)',
    description: 'Travail pratique : configuration et déploiement d\'un service API conteneurisé avec Docker, orchestration sur cluster local Minikube (Kubernetes).',
    descriptionEn: 'School lab: configuring and deploying a containerized API service with Docker, orchestrated on a local Minikube Kubernetes cluster.',
    stack: ['Kubernetes', 'Docker', 'Minikube', 'API REST'],
    category: 'Infrastructure',
  },
  {
    id: 'data-mining-r-weka',
    title: 'Analyse de données - Data mining',
    titleEn: 'Data Mining - RStudio & Weka',
    description: 'Travaux pratiques : exploration et modélisation de données avec RStudio, expérimentations sous Weka (classifieurs, prétraitement).',
    descriptionEn: 'Labs: data exploration and modeling with RStudio, experiments in Weka (classifiers, preprocessing).',
    stack: ['R', 'RStudio', 'Weka', 'Data mining'],
    category: 'IA',
  },
];

/**
 * Les projets réellement exposés. Toute surface qui liste des projets doit
 * partir d'ici, jamais de `projects`.
 */
export const visibleProjects: Project[] = projects.filter((project) => !project.hidden);
