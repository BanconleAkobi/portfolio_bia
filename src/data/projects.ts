export type ProjectCategory = 'Cybersécurité' | 'Web / Full-Stack' | 'SaaS' | 'IA / Académique' | 'Infrastructure' | 'Autre';

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
  'IA / Académique': 'ia',
  'Infrastructure': 'infra',
  'Autre': 'autre',
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
  'soc-easydo',
  'ctf-labs',
  'erp-ecommerce',
  'marketplace-amap',
  'migrations-prestashop',
  'infra-scaleway',
  'windows-server',
  'api-k8s-minikube',
] as const;

export const projects: Project[] = [
  {
    id: 'lanceos',
    title: 'LanceOS',
    titleEn: 'LanceOS',
    description: "Plateforme de gestion de projets pour freelances et indépendants. Là où leurs missions se lancent, se suivent et se règlent.\n\nGérez vos projets et laissez vos clients suivre chaque jalon. Vos factures, d'Indy ou d'ailleurs, s'y rangent aussi. Hébergé sur des serveurs français.",
    descriptionEn: 'Project management platform for freelancers and independent workers. Where their engagements start, get tracked and get settled.\n\nRun your projects and let your clients follow every milestone. Your invoices, from Indy or anywhere else, file themselves in too. Hosted on French servers.',
    stack: ['Next.js', 'Scaleway', 'Conformité RGPD'],
    stackEn: ['Next.js', 'Scaleway', 'GDPR compliance'],
    category: 'SaaS',
    demo: 'https://lanceos.eu',
    featured: true,
    image: '/images/projects/lanceos.png',
  },
  {
    id: 'marketplace-amap',
    title: 'Marketplace AMAP',
    titleEn: 'AMAP Marketplace',
    description: 'Marketplace distribuée pour une AMAP. Architecture MongoDB shardée, double frontend consommateur/producteur, API REST Spring Boot, orchestré via Docker Compose. Projet de groupe 4A ICy FISA.',
    descriptionEn: 'Distributed marketplace for a local farm collective. Sharded MongoDB architecture, dual consumer/producer frontend, Spring Boot REST API, orchestrated via Docker Compose. Group project, 4th-year FISA.',
    stack: ['Spring Boot', 'Java 17', 'MongoDB', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Docker Compose'],
    category: 'Web / Full-Stack',
    github: 'https://github.com/BanconleAkobi/project_bdd',
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
    description: "Gestion d'une infrastructure cloud en production : optimisation des coûts, montée en charge et automatisation des sauvegardes.",
    descriptionEn: 'Management of a production cloud infrastructure: cost optimization, scaling, and backup automation.',
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
    category: 'IA / Académique',
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
    category: 'IA / Académique',
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
    category: 'IA / Académique',
  },
  {
    id: 'soc-easydo',
    title: 'Centre des opérations de sécurité',
    titleEn: 'Security Operations Centre',
    description: "Analyse quotidienne des alertes de sécurité sous Splunk, puis réplication de toute l'architecture sous Wazuh pour diviser la facture. Rédaction de la documentation SOC et Wazuh à destination des futurs analystes. Stage chez EasyDo Digital Technologies, Bucarest.",
    descriptionEn: 'Daily security alert triage in Splunk, then a full replication of the architecture on Wazuh to cut the bill. Wrote the SOC and Wazuh documentation for the analysts who follow. Internship at EasyDo Digital Technologies, Bucharest.',
    stack: ['Splunk', 'Wazuh', 'SOC', 'Réponse à incident'],
    stackEn: ['Splunk', 'Wazuh', 'SOC', 'Incident response'],
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
    category: 'Autre',
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
    category: 'Autre',
    github: 'https://github.com/BanconleAkobi/C_Chat',
  },
  {
    id: 'creathon',
    title: 'Creathon - Accessibilité Festival',
    titleEn: 'Creathon - Festival Accessibility',
    description: 'Site d\'accompagnement des personnes handicapées lors d\'un festival. Projet Creathon axé accessibilité web.',
    descriptionEn: 'Website assisting people with disabilities at a festival. Creathon project focused on web accessibility.',
    stack: ['HTML', 'CSS', 'Web Design'],
    category: 'Autre',
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
    category: 'IA / Académique',
  },
];
