

(function() {
  "use strict";


  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);


  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);


  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });


  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);


  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);


  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }


  new PureCounter();


  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });



  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  const glightbox = GLightbox({
    selector: '.glightbox'
  });


  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });



    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

})();


const articles = {
  article1: `
    <h4>L'IA va-t-elle tuer le Bug Bounty ? 🤖</h4>
    <br>
    <strong>TL;DR :</strong> Non, mais elle va changer la donne. Et c'est tant mieux !<br>
    <br>
    <strong>Le constat :</strong> ChatGPT trouve des vulnérabilités en 2 minutes. GitHub Copilot génère du code sécurisé. Les outils d'IA se multiplient comme des champignons.<br>
    <br>
    <strong>Mais voilà le truc :</strong> L'IA ne remplace pas l'intuition humaine. Elle ne comprend pas le contexte business. Elle ne voit pas les failles logiques que seul un humain peut identifier.<br>
    <br>
    <strong>Mon expérience :</strong> J'ai testé ChatGPT sur des CTF. Résultat ? Il trouve les vulnérabilités basiques (SQL injection, XSS) mais rate complètement les exploits créatifs. L'IA est un super assistant, pas un remplaçant.<br>
    <br>
    <strong>L'avenir du Bug Bounty :</strong><br>
    • Plus de focus sur la logique métier<br>
    • Exploits plus sophistiqués<br>
    • Collaboration humain-IA<br>
    • Récompenses plus élevées pour les vrais experts<br>
    <br>
    <strong>Bottom line :</strong> L'IA va élever le niveau, pas tuer le métier. Les meilleurs hunters vont devenir encore meilleurs. Les autres... eh bien, ils devront s'adapter.<br>
    <br>
    <em>Et vous, vous pensez quoi de l'IA en cybersécurité ?</em> 💭
  `,
  
  article2: `
    <h4>Symfony 8 : Pourquoi j'ai dit adieu à Laravel 🚀</h4>
    <br>
    <strong>Disclaimer :</strong> J'ai rien contre Laravel, mais Symfony m'a conquis. Voici pourquoi.<br>
    <br>
    <strong>Le déclic :</strong> Après 2 ans avec Laravel, j'ai migré un projet sur Symfony 8. Et là, révélation !<br>
    <br>
    <strong>Pourquoi Symfony gagne :</strong><br>
    • <strong>Performance :</strong> 3x plus rapide que Laravel sur mes tests<br>
    • <strong>Flexibilité :</strong> Pas de "magie" cachée, tout est explicite<br>
    • <strong>Écosystème :</strong> Les composants sont réutilisables partout<br>
    • <strong>Standards :</strong> PSR-4, PSR-7, PSR-15... Symfony respecte tout<br>
    <br>
    <strong>Le piège Laravel :</strong> Trop de "sugar coating". Eloquent est pratique mais masque la complexité. Quand ça plante, tu galères à debugger.<br>
    <br>
    <strong>Symfony en entreprise :</strong> Plus robuste, plus maintenable, plus évolutif. Parfait pour les gros projets.<br>
    <br>
    <strong>Mon conseil :</strong> Si tu débutes, commence par Laravel. Si tu veux devenir expert, passe à Symfony.<br>
    <br>
    <strong>Résultat :</strong> Mon app Symfony 8 tourne comme une horloge. Zéro regret. 🎯<br>
    <br>
    <em>Et vous, Laravel ou Symfony ? Débat ouvert !</em> 🔥
  `,
  
  article3: `
    <h4>Scaleway vs AWS : Le match du siècle 💰</h4>
    <br>
    <strong>Le contexte :</strong> J'ai migré 3 PrestaShops de AWS vers Scaleway. Résultat ? 60% d'économies et zéro regret.<br>
    <br>
    <strong>Les chiffres qui parlent :</strong><br>
    • <strong>AWS :</strong> 450€/mois pour 3 instances<br>
    • <strong>Scaleway :</strong> 180€/mois pour la même config<br>
    • <strong>Performance :</strong> Identique, voire meilleure<br>
    <br>
    <strong>Pourquoi Scaleway gagne :</br>
    • <strong>Prix transparents :</strong> Pas de surprise sur la facture<br>
    • <strong>Support français :</strong> Réponse en 2h vs 24h chez AWS<br>
    • <strong>Simplicité :</strong> Interface claire, pas de labyrinthe AWS<br>
    • <strong>Écologie :</strong> Datacenters en France, moins de CO2<br>
    <br>
    <strong>Les points faibles :</strong><br>
    • Moins d'outils que AWS<br>
    • Communauté plus petite<br>
    • Documentation parfois en retard<br>
    <br>
    <strong>Mon verdict :</strong> Pour 80% des projets, Scaleway suffit largement. AWS reste pour les cas très spécifiques.<br>
    <br>
    <strong>Bonus :</strong> Le support Scaleway m'a aidé à optimiser mes instances. Chez AWS, j'aurais dû payer un consultant.<br>
    <br>
    <em>Et vous, vous utilisez quoi comme cloud ?</em> ☁️
  `,
  
  article4: `
    <h4>Flutter vs React Native : Le verdict d'un dev backend 📱</h4>
    <br>
    <strong>Le défi :</strong> Build une app de gestion de courses. En tant que dev PHP/Symfony, j'ai testé les deux.<br>
    <br>
    <strong>Flutter gagne haut la main. Voici pourquoi :</strong><br>
    <br>
    <strong>Performance :</strong><br>
    • <strong>Flutter :</strong> 60 FPS constant, animations fluides<br>
    • <strong>React Native :</strong> Lag sur les animations complexes<br>
    <br>
    <strong>Développement :</strong><br>
    • <strong>Flutter :</strong> Hot reload instantané, debug facile<br>
    • <strong>React Native :</strong> Metro bundler qui plante, debug compliqué<br>
    <br>
    <strong>UI/UX :</strong><br>
    • <strong>Flutter :</strong> Design system cohérent, Material Design parfait<br>
    • <strong>React Native :</strong> Inconsistances entre iOS/Android<br>
    <br>
    <strong>Mon app en chiffres :</strong><br>
    • <strong>Développement :</strong> 2 semaines avec Flutter vs 1 mois estimé avec RN<br>
    • <strong>Taille :</strong> 15MB vs 25MB+ avec RN<br>
    • <strong>Bugs :</strong> 3 bugs Flutter vs 12+ avec RN<br>
    <br>
    <strong>Le piège React Native :</strong> Tu dois connaître React + JavaScript + iOS + Android. Avec Flutter, juste Dart.<br>
    <br>
    <strong>Bottom line :</strong> Flutter est plus simple, plus rapide, plus fiable. React Native a ses fans, mais Flutter domine.<br>
    <br>
    <em>Mon app est dispo sur GitHub si vous voulez voir le code !</em> 🚀
  `,
  
  article5: `
    <h4>Comment j'ai hacké mon propre site (et pourquoi c'est important) 🔒</h4>
    <br>
    <strong>Le défi :</strong> Pentest de mon propre portfolio. Résultat ? 7 vulnérabilités trouvées. Oups ! 😅<br>
    <br>
    <strong>Les vulnérabilités découvertes :</strong><br>
    • <strong>XSS :</strong> Injection de script via le formulaire de contact<br>
    • <strong>CSRF :</strong> Pas de token sur les formulaires<br>
    • <strong>Information disclosure :</strong> Version PHP exposée<br>
    • <strong>Directory traversal :</strong> Accès aux fichiers système<br>
    • <strong>SQL injection :</strong> Via les paramètres URL<br>
    • <strong>Clickjacking :</strong> Pas de X-Frame-Options<br>
    • <strong>Insecure cookies :</strong> Pas de flags sécurisés<br>
    <br>
    <strong>Comment les corriger :</strong><br>
    • <strong>XSS :</strong> Échapper les entrées, utiliser CSP<br>
    • <strong>CSRF :</strong> Ajouter des tokens CSRF<br>
    • <strong>Headers :</strong> X-Frame-Options, X-Content-Type-Options<br>
    • <strong>Cookies :</strong> HttpOnly, Secure, SameSite<br>
    <br>
    <strong>Pourquoi c'est crucial :</strong> Si je peux hacker mon site, un attaquant aussi. La sécurité, c'est pas optionnel.<br>
    <br>
    <strong>Mon conseil :</strong> Testez vos sites régulièrement. Utilisez OWASP ZAP, Burp Suite, ou des outils gratuits.<br>
    <br>
    <strong>Résultat :</strong> Mon site est maintenant sécurisé. Et j'ai appris énormément !<br>
    <br>
    <em>Et vous, vous testez la sécurité de vos projets ?</em> 🛡️
  `,
  
  article6: `
    <h4>Alternance en cybersécurité : Mes 6 mois de galère et de réussite 🎯</h4>
    <br>
    <strong>Le contexte :</strong> Début septembre 2024, je débarque chez MagicRecycle. Objectif : devenir expert cybersécurité. Spoiler : mission accomplie !<br>
    <br>
    <strong>Les premiers mois (galère totale) :</strong><br>
    • <strong>Semaine 1 :</strong> "C'est quoi un firewall ?" 😅<br>
    • <strong>Mois 1 :</strong> Je plante le serveur de prod (oups)<br>
    • <strong>Mois 2 :</strong> Je comprends enfin les logs<br>
    • <strong>Mois 3 :</strong> Premier pentest réussi !<br>
    <br>
    <strong>Les victoires :</strong><br>
    • <strong>Certification ISC2 :</strong> Security CC obtenue<br>
    • <strong>Bug Bounty :</strong> Premier bounty de 500€<br>
    • <strong>CTF :</strong> Top 10% sur TryHackMe<br>
    • <strong>Projets :</strong> Sécurisation de 3 PrestaShops<br>
    <br>
    <strong>Mes conseils pour réussir :</strong><br>
    • <strong>Pratique quotidienne :</strong> 1h de CTF par jour<br>
    • <strong>Communauté :</strong> Rejoignez des Discord cybersec<br>
    • <strong>Projets concrets :</strong> Hackez vos propres sites<br>
    • <strong>Certifications :</strong> ISC2, CEH, OSCP<br>
    <br>
    <strong>Les erreurs à éviter :</strong><br>
    • Ne pas tester en prod (évident mais...)<br>
    • Négliger la documentation<br>
    • Isoler les problèmes de sécurité<br>
    <br>
    <strong>Résultat :</strong> En 6 mois, je suis passé de débutant à expert. La cybersécurité, c'est accessible avec de la motivation !<br>
    <br>
    <em>Et vous, vous avez des questions sur l'alternance en cybersec ?</em> 💪
  `
};


function showArticle(articleKey) {
  const articleText = articles[articleKey];
  const articleContent = document.getElementById('articleContent');
  const articleParagraph = document.getElementById('articleText');

  articleParagraph.innerHTML = articleText;
  const info = document.getElementById('info');
  console.log(info.textContent);
  if(info.textContent != ''){
      info.innerHTML = "" ; 
  }

  articleContent.style.display = 'block';
  setTimeout(() => {
    articleContent.classList.add('show');
  }, 10); 
}