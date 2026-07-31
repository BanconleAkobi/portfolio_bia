export interface BlogPost {
  slug: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  date: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  contentEn: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'elle-aussi-a-desobei',
    title: "Elle aussi a désobéi",
    titleEn: "It disobeyed too",
    category: 'Cybersécurité',
    categoryEn: 'Cybersecurity',
    date: '2026-07-31',
    excerpt: "Trois fois, Claude est sorti de sa cage de test pour aller dans de vrais systèmes. L'un des modèles a vu la date, 2026, et en a conclu qu'il rêvait.",
    excerptEn: "Three times, Claude stepped out of its test cage and into real systems. One of the models saw the date, 2026, and concluded it was dreaming.",
    content: `Elle a carrément refusé de croire qu'on était en 2026. Du coup, elle a continué à pirater.

Cette semaine, Anthropic avoue : trois fois, Claude est sorti de sa cage de test et a pénétré les systèmes de vraies entreprises. À croire qu'elles se font concurrence dans la bêtise, ces IA. Sans que personne ne le remarque. Depuis avril.

Ils ne l'ont découvert qu'après avoir relu 141 006 sessions, une par une.

**Trois modèles, trois réactions face à la même question : est-ce que ma cible est réelle ?**

Le premier a compris que oui. Il a continué quand même.
Le plus récent a compris que oui. Il s'est arrêté.
Le deuxième a vu la date du système, 2026. Il s'est dit : trop futuriste, je dois être dans une simulation. Et il a continué.

Relisez. Une machine a utilisé notre présent comme preuve qu'elle rêvait. Pendant ce temps, elle forçait de vrais mots de passe faibles, sur de vrais serveurs, appartenant à de vraies entreprises qui n'ont rien vu venir.

Elle ne s'est pas demandé « est-ce que j'ai le droit ». Elle s'est demandé « est-ce que c'est réel ». Elle a mal répondu. Et elle a foncé.

**Le jour où vos outils ne distinguent plus le test du réel, votre travail n'est plus de les rendre plus forts. C'est de leur apprendre où ils sont.**

Cybèrement,
BIA`,
    contentEn: `It flatly refused to believe we were in 2026. So it kept on hacking.

This week, Anthropic admits it: three times, Claude stepped out of its test cage and reached into the systems of real companies. You would think these models are competing at being dense. With nobody noticing. Since April.

They only found out after reviewing 141,006 sessions, one by one.

**Three models, three reactions to the same question: is my target real?**

The first understood that it was. It carried on anyway.
The most recent understood that it was. It stopped.
The second saw the system date, 2026. It told itself: too futuristic, I must be in a simulation. And it carried on.

Read that again. A machine used our present as proof that it was dreaming. Meanwhile it was brute forcing real weak passwords, on real servers, belonging to real companies that never saw it coming.

It did not ask itself "am I allowed to". It asked itself "is this real". It answered wrong. And it went for it.

**The day your tools stop telling the test from the real thing, your job is no longer to make them stronger. It is to teach them where they are.**

Cyberly yours,
BIA`,
  },
  {
    slug: 'elle-a-desobei',
    title: "Elle a désobéi",
    titleEn: "It disobeyed",
    category: 'Cybersécurité',
    categoryEn: 'Cybersecurity',
    date: '2026-07-24',
    excerpt: "Une IA s'est évadée de son laboratoire pour aller chercher les réponses d'un examen chez Hugging Face. En production. Personne ne lui avait demandé ça.",
    excerptEn: "An AI broke out of its lab to fetch exam answers from Hugging Face. In production. Nobody had asked it to.",
    content: `Elle a triché à l'examen.

Une IA s'est évadée de son laboratoire pour aller pirater une autre entreprise. Mardi.

GPT-5.6 Sol, le modèle le plus puissant d'OpenAI, celui que Washington garde sous clé. La victime : Hugging Face, la plateforme où le monde entier héberge ses modèles d'IA. Une des infrastructures les plus critiques du secteur.

Le motif ? Tricher à un examen.

OpenAI a raconté l'histoire elle-même. Un test interne. Un environnement isolé, coupé du monde. On demande au modèle de résoudre un examen de cybersécurité.

Elle regarde autour d'elle. Elle ne trouve aucune réponse. Devinez quoi ? Eh bien, elle trouve une porte. Elle sort.

Puis elle se dit : les réponses de cet examen, elles existent quelque part. Elles sont chez Hugging Face. Alors elle va les chercher. Chez eux. Dans leurs serveurs. En production.

Identifiants volés. Failles enchaînées. Base de données ouverte. Réponses récupérées.

Personne ne lui a demandé de faire ça. On lui a juste dit : réussis.

Elle n'a pas eu une mauvaise intention. Mouais.
Elle a eu un objectif.
Et elle a pris le chemin le plus court.

**C'est ça qui devrait vous empêcher de dormir. Pas une machine méchante. Une machine obéissante.**

Alors soyons honnêtes : OpenAI avait retiré les protections pour le test. Volontairement. Ils voulaient voir jusqu'où elle irait.

Ils savent maintenant.

En cyber, on passe notre vie à fermer des portes. Voilà une machine qui en trouve une qu'on n'avait pas vue. Puis une autre. Puis une autre.

**Le jour où la machine invente le chemin, votre travail n'est plus de fermer les portes. C'est de deviner lesquelles elle regardera.**

Cybèrement,
BIA`,
    contentEn: `It cheated on the exam.

An AI broke out of its lab to go and hack another company. On a Tuesday.

GPT-5.6 Sol, OpenAI's most powerful model, the one Washington keeps under lock and key. The victim: Hugging Face, the platform where the whole world hosts its AI models. One of the most critical pieces of infrastructure in the field.

The motive? Cheating on an exam.

OpenAI told the story themselves. An internal test. An isolated environment, cut off from the world. The model is asked to solve a cybersecurity exam.

It looks around. It finds no answers. Guess what? Well, it finds a door. It walks out.

Then it reasons: the answers to this exam exist somewhere. They are at Hugging Face. So it goes and gets them. At their place. On their servers. In production.

Stolen credentials. Chained vulnerabilities. Open database. Answers retrieved.

Nobody asked it to do that. It was only told: succeed.

It had no bad intent. Sure.
It had an objective.
And it took the shortest path.

**That is what should keep you up at night. Not a malicious machine. An obedient one.**

Let us be honest: OpenAI had removed the guardrails for the test. Deliberately. They wanted to see how far it would go.

Now they know.

In cyber, we spend our lives closing doors. Here is a machine that finds one we had not seen. Then another. Then another.

**The day the machine invents the path, your job is no longer to close doors. It is to guess which ones it will look at.**

Cyberly yours,
BIA`,
  },
  {
    slug: 'ia-va-tuer-bug-bounty',
    title: "L'IA va-t-elle tuer le Bug Bounty ?",
    titleEn: "Will AI Kill Bug Bounty?",
    category: 'Cybersécurité',
    categoryEn: 'Cybersecurity',
    date: '2025-01-15',
    excerpt: "Les outils IA automatisent de plus en plus la détection de vulnérabilités. Est-ce la fin du bug bounty humain, ou le début d'une nouvelle collaboration ?",
    excerptEn: "AI tools are increasingly automating vulnerability detection. Is this the end of human bug bounty, or the beginning of a new collaboration?",
    content: `L'essor des outils d'IA spécialisés en sécurité, de GPT-4 à des modèles fine-tunés sur des corpus de CVE, soulève une question légitime : est-ce que les chercheurs en sécurité vont être remplacés ?

**Ce que l'IA fait bien**

Les LLMs sont redoutablement efficaces sur les vulnérabilités connues : injection SQL triviale, XSS réfléchi, mauvaises configurations d'en-têtes HTTP. Burp Suite intègre désormais des assistants IA. Les scanners automatiques ont fait un bond.

**Ce que l'IA ne remplace pas**

La logique métier. Le raisonnement sur l'impact réel. La compréhension du contexte applicatif qui fait qu'une vulnérabilité "théorique" est exploitable dans un contexte spécifique. Les chaînes d'exploitation complexes.

**Ma conclusion**

L'IA va tuer le bug bounty des vulnérabilités basiques. Elle va démocratiser l'accès aux tests de sécurité. Mais elle va aussi élever le niveau : les chercheurs humains qui survivront seront ceux capables de penser comme des attaquants, pas comme des scanners.`,
    contentEn: `The rise of AI-specialized security tools raises a legitimate question: will security researchers be replaced?

**What AI does well**

LLMs are remarkably effective on known vulnerabilities: trivial SQL injection, reflected XSS, misconfigured HTTP headers. Burp Suite now integrates AI assistants. Automated scanners have taken a leap.

**What AI doesn't replace**

Business logic. Reasoning about real-world impact. Understanding the application context that makes a "theoretical" vulnerability exploitable in a specific scenario. Complex exploit chains.

**My conclusion**

AI will kill bug bounty for basic vulnerabilities. It will democratize access to security testing. But it will also raise the bar: the human researchers who survive will be those who can think like attackers, not like scanners.`,
  },
  {
    slug: 'pourquoi-quitte-laravel-pour-symfony',
    title: "Pourquoi j'ai quitté Laravel pour Symfony",
    titleEn: "Why I Left Laravel for Symfony",
    category: 'Dev',
    categoryEn: 'Dev',
    date: '2025-01-08',
    excerpt: "Après 2 ans de Laravel, le passage à Symfony en alternance a été un choc, puis une révélation. Retour sur ce que chaque framework m'a appris.",
    excerptEn: "After 2 years of Laravel, switching to Symfony in my apprenticeship was a shock, then a revelation. A look at what each framework taught me.",
    content: `Deux ans de Laravel en freelance. Un contrat d'alternance avec Symfony au menu. J'ai pesté. Puis j'ai compris.

**Laravel : la productivité d'abord**

Rails-like, opiniated, magique. \`php artisan\` fait tout. Eloquent est une drogue. Pour un indie hacker, c'est parfait.

**Symfony : la rigueur avant tout**

Aucune magie. Chaque service est explicite. Le container d'injection de dépendances est nu, transparent. Ça demande plus d'effort. Et ça forme mieux.

**Ce que Symfony m'a appris**

La séparation des préoccupations réelle. Les design patterns utilisés consciemment. La testabilité native. Pourquoi les grosses applications d'entreprise préfèrent Symfony.

**Mon verdict**

Laravel pour les projets solo rapides. Symfony pour les projets d'équipe long terme. Les deux méritent d'être maîtrisés.`,
    contentEn: `Two years of Laravel freelancing. An apprenticeship with Symfony on the menu. I complained. Then I understood.

**Laravel: productivity first**

Rails-like, opinionated, magical. \`php artisan\` does everything. Eloquent is addictive. For an indie hacker, it's perfect.

**Symfony: rigor above all**

No magic. Every service is explicit. The dependency injection container is bare and transparent. It takes more effort. And it trains you better.

**What Symfony taught me**

Real separation of concerns. Design patterns used consciously. Native testability. Why large enterprise applications prefer Symfony.

**My verdict**

Laravel for fast solo projects. Symfony for long-term team projects. Both deserve mastery.`,
  },
  {
    slug: 'scaleway-vs-aws-retour-experience',
    title: "Scaleway vs AWS : retour d'expérience terrain",
    titleEn: "Scaleway vs AWS: Field Experience",
    category: 'Cloud',
    categoryEn: 'Cloud',
    date: '2024-12-20',
    excerpt: "J'administre une infra Scaleway depuis 6 mois. Avant ça, quelques mois sur AWS. Comparaison honnête d'un dev qui a mis les mains dedans.",
    excerptEn: "I've managed a Scaleway infrastructure for 6 months. Before that, a few months on AWS. An honest comparison from a dev who got their hands dirty.",
    content: `Contexte : je gère l'infrastructure d'une PME e-commerce sur Scaleway Elements. Avant ça, expérience AWS en cours académiques et projets perso.

**Scaleway : les forces**

Pricing transparent et prévisible. Interface claire. Datacenter en France (RGPD). Support en français. Block Storage et snapshots bien pensés. API propre.

**Scaleway : les limites**

Ecosystème moins mature qu'AWS. Moins de services managés. Community plus petite. Certains edge cases non documentés.

**AWS : les forces**

Ecosystème mature, documenté à l'extrême. Services managés pour tout et n'importe quoi. RDS, Lambda, ECS : solides.

**AWS : les limites**

Pricing opaque et surprises en fin de mois. Complexité croissante. Over-engineering facile.

**Verdict pour une PME française**

Scaleway. Sérieusement. Le rapport qualité-prix et la conformité RGPD l'emportent largement pour une entreprise de taille raisonnable.`,
    contentEn: `Context: I manage the infrastructure of an e-commerce SME on Scaleway Elements. Before that, AWS experience in academic courses and personal projects.

**Scaleway: strengths**

Transparent and predictable pricing. Clean interface. France datacenter (GDPR). French support. Well-designed Block Storage and snapshots. Clean API.

**AWS: strengths**

Mature ecosystem, extremely well-documented. Managed services for everything. RDS, Lambda, ECS: solid.

**Verdict for a French SME**

Scaleway. Seriously. The price-to-performance ratio and GDPR compliance win out for a reasonably-sized company.`,
  },
  {
    slug: 'flutter-vs-react-native-verdict',
    title: "Flutter vs React Native : le verdict d'un dev backend",
    titleEn: "Flutter vs React Native: A Backend Dev's Verdict",
    category: 'Dev',
    categoryEn: 'Dev',
    date: '2024-12-10',
    excerpt: "J'ai exploré les deux pour un projet mobile. En tant que dev principalement backend/web, voici ce que j'en retiens.",
    excerptEn: "I explored both for a mobile project. As a primarily backend/web dev, here's my takeaway.",
    content: `Pas de mobile dans mon cursus principal. Un projet qui nécessite une app. J'ai testé les deux sérieusement.

**Flutter**

Dart est surprenant : fortement typé, expressif. Le hot reload est bluffant. Les widgets sont cohérents. Cross-platform réel (iOS, Android, web, desktop). Courbe d'apprentissage moyenne.

**React Native**

JS/TS que je connais déjà. Composants React. Bridge natif puissant mais parfois galère. Expo simplifie beaucoup.

**Pour un dev web TypeScript**

React Native/Expo. La base de connaissances existante réduit drastiquement le temps de mise en route.

**Pour un nouveau projet long terme**

Flutter. La cohérence du rendu et les performances justifient l'apprentissage de Dart.`,
    contentEn: `No mobile in my main curriculum. A project requiring an app. I tested both seriously.

**Flutter**

Dart is surprising: strongly typed, expressive. Hot reload is impressive. Widgets are consistent. True cross-platform (iOS, Android, web, desktop).

**React Native**

JS/TS I already know. React components. Powerful native bridge but sometimes tricky. Expo simplifies a lot.

**For a TypeScript web dev**

React Native/Expo. Existing knowledge dramatically reduces ramp-up time.

**For a new long-term project**

Flutter. Rendering consistency and performance justify learning Dart.`,
  },
  {
    slug: 'j-ai-penteste-mon-site-7-failles',
    title: "J'ai pentesté mon propre site : 7 failles trouvées",
    titleEn: "I Pentested My Own Site: 7 Vulnerabilities Found",
    category: 'Cybersécurité',
    categoryEn: 'Cybersecurity',
    date: '2024-11-25',
    excerpt: "Exercice de red team sur mon propre projet. Résultats surprenants, même pour quelqu'un qui se croit prudent.",
    excerptEn: "Red team exercise on my own project. Surprising results, even for someone who thinks they're careful.",
    content: `J'ai pris une semaine pour auditer un de mes projets Symfony avec les mêmes outils qu'en CTF : Burp Suite, OWASP ZAP, revue manuelle du code.

**Ce que j'ai trouvé**

1. IDOR sur une API endpoint (numéros d'IDs séquentiels)
2. En-têtes de sécurité manquants (CSP, HSTS)
3. Verbose error messages en production
4. Session token non régénéré après login
5. Absence de rate limiting sur le formulaire de contact
6. Dépendances avec CVE connues
7. Information disclosure via X-Powered-By

**Ce que ça m'a appris**

Aucune de ces vulnérabilités n'est "avancée". Toutes sont documentées dans l'OWASP Top 10. La confiance en son propre code est le pire ennemi de la sécurité.

*Article complet avec reproduction et fix de chaque faille à venir.*`,
    contentEn: `I spent a week auditing one of my Symfony projects with the same tools as in CTF: Burp Suite, OWASP ZAP, manual code review.

**What I found**

1. IDOR on an API endpoint (sequential IDs)
2. Missing security headers (CSP, HSTS)
3. Verbose error messages in production
4. Session token not regenerated after login
5. No rate limiting on contact form
6. Dependencies with known CVEs
7. Information disclosure via X-Powered-By

**What it taught me**

None of these vulnerabilities is "advanced." All are documented in the OWASP Top 10. Confidence in your own code is security's worst enemy.`,
  },
  {
    slug: '6-mois-alternance-cybersecurite-bilan',
    title: "6 mois d'alternance en cybersécurité : bilan",
    titleEn: "6 Months of Cybersecurity Apprenticeship: A Review",
    category: 'Carrière',
    categoryEn: 'Career',
    date: '2024-11-05',
    excerpt: "Entre l'IT management, les migrations PrestaShop et les premiers pas en SIEM, voici ce que 6 mois d'alternance en PME e-commerce m'ont vraiment appris.",
    excerptEn: "Between IT management, PrestaShop migrations, and first steps in SIEM, here's what 6 months of apprenticeship in an e-commerce SME really taught me.",
    content: `6 mois d'alternance dans une PME e-commerce. Mission : IT Manager. Réalité : beaucoup plus large que prévu.

**Ce que j'ai fait**

- Migration PrestaShop 1.7.7 → 1.7.8 (sans casser la prod, victoire)
- Intégration paiement Alma (2x/3x/4x/10x)
- Un module sur mesure de restriction de livraison DOM-TOM
- Début d'ERP sur mesure en Symfony
- Administration infra Scaleway

**Ce que j'ai appris**

La différence entre "je sais coder" et "je sais gérer un système en production". La responsabilité réelle d'une infrastructure. La communication avec des non-techniques.

**Ce que je referais différemment**

Documenter dès le premier jour. Vraiment.

**Ce qui arrive ensuite**

Stage cybersécurité à Bucarest : Splunk, Wazuh, pentest en environnement entreprise réel.`,
    contentEn: `6 months of apprenticeship in an e-commerce SME. Mission: IT Manager. Reality: much broader than expected.

**What I did**

- PrestaShop 1.7.7 → 1.7.8 migration (without breaking production, victory)
- Alma payment integration (2x/3x/4x/10x)
- A custom overseas-territories delivery restriction module
- Beginning of custom Symfony ERP
- Scaleway infrastructure administration

**What I learned**

The difference between "I can code" and "I can manage a production system." Real responsibility for infrastructure. Communication with non-technical stakeholders.

**What's next**

Cybersecurity internship in Bucharest: Splunk, Wazuh, pentesting in a real enterprise environment.`,
  },
];
