

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
    𝟮𝟬𝟮𝟱 : 𝗙𝗮𝘂𝘁-𝗶𝗹 𝗲𝗻𝗰𝗼𝗿𝗲 𝗮𝗽𝗽𝗿𝗲𝗻𝗱𝗿𝗲 𝗣𝗛𝗣 ? 🤔<br>
    <br>
    Pour répondre à cette question, regarde pourquoi PHP n’est toujours pas mort.<br>
    <br>
    𝗩𝗼𝗶𝗰𝗶 𝟳 𝗿𝗮𝗶𝘀𝗼𝗻𝘀 :<br>
    <br>
    🌐 𝗟’𝗲𝘀𝗽𝗿𝗶𝘁 𝗰𝗼𝗺𝗺𝘂𝗻𝗮𝘂𝘁𝗮𝗶𝗿𝗲<br>
    La grande communauté de PHP assure un soutien constant et une collaboration continue, ce qui le rend ultra solide.<br>
    <br>
    📈 𝗨𝗻𝗲 𝗲́𝘃𝗼𝗹𝘂𝘁𝗶𝗼𝗻 𝗰𝗼𝗻𝘀𝘁𝗮𝗻𝘁𝗲<br>
    Des mises à jour régulières apportent de nouvelles fonctionnalités, ce qui rend PHP compétitif, même dans le temps.<br>
    <br>
    🏆 𝗟𝗲 𝗰𝗵𝗼𝗶𝘅 𝗱𝗲𝘀 𝗴𝗲́𝗮𝗻𝘁𝘀 𝗱𝘂 𝗪𝗲𝗯<br>
    En soutenant WordPress, Joomla et Drupal, PHP est l'épine dorsale des géants d'internet.<br>
    <br>
    🧰 𝗨𝗻𝗲 𝗽𝗼𝗹𝘆𝘃𝗮𝗹𝗲𝗻𝗰𝗲 𝗮̀ 𝘁𝗼𝘂𝘁𝗲 𝗲́𝗽𝗿𝗲𝘂𝘃𝗲<br>
    PHP n'est pas seulement pour le web ; il est utile pour diverses applications et besoins en programmation.<br>
    <br>
    💼 𝗟𝗮 𝘀𝗲́𝗰𝘂𝗿𝗶𝘁𝗲́ 𝗱𝗲 𝗹'𝗲𝗺𝗽𝗹𝗼𝗶<br>
    La demande de développeurs PHP est croissante, ce qui signifie plus d'opportunités d'emploi dans le développement web.<br>
    <br>
    👑 𝗟𝗲 𝗿𝗼𝗶 𝗰𝗼̂𝘁𝗲́ 𝘀𝗲𝗿𝘃𝗲𝘂𝗿<br>
    L'efficacité de PHP dans le code côté serveur maintient sa domination.<br>
    <br>
    🐣 𝗟𝗮 𝗳𝗮𝗰𝗶𝗹𝗶𝘁𝗲́ 𝗽𝗼𝘂𝗿 𝗹𝗲𝘀 𝗱𝗲́𝗯𝘂𝘁𝗮𝗻𝘁𝘀<br>
    Sa syntaxe simple fait de PHP un excellent point de départ pour les nouveaux développeurs.<br>
    <br>
    𝗘𝘁 𝗲𝗻 𝗽𝗹𝘂𝘀 ? 
    De <strong> Daminen carrier</strong>
  `,
  
  article2: `
    Récemment, une équipe de chercheurs chinois a affirmé avoir réalisé une avancée majeure en cryptographie quantique,<br>
    en annonçant qu’ils pouvaient casser des clés RSA et AES à l’aide d’un ordinateur quantique.<br>
    Cependant, ces affirmations ont été largement critiquées par la communauté scientifique.<br>
    L’algorithme utilisé, basé sur les travaux de Schnorr combiné à des techniques quantiques,<br>
    n’a pas encore prouvé sa capacité à surpasser les méthodes classiques de décryptage.<br>
    <strong>Des experts comme Scott Aaronson</strong> ont souligné que cette approche est loin d’être efficace pour des clés de taille réelle.<br>
    Les résultats actuels ne dépassent pas les 48 bits, loin des standards actuels de sécurité qui utilisent des clés de 2048 bits et plus.<br>
    En réalité, même si les progrès en calcul quantique sont impressionnants,<br>
    la technologie n’est pas encore à un stade où elle peut casser des systèmes cryptographiques modernes à grande échelle.<br>
    La démonstration des chercheurs chinois reste limitée et critiquée pour être <em>“l’une des publications les plus trompeuses en 25 ans”</em><br>
    dans le domaine du calcul quantique, selon Aaronson.<br>
    Les défis liés aux ordinateurs quantiques, comme la stabilité des qubits et la mise à l’échelle,<br>
    rendent ces attaques largement théoriques pour l’instant.<br>
    <strong>En résumé</strong>, les clés RSA et AES restent pour le moment sécurisées face à ces attaques.<br>
    La vigilance reste cependant de mise, car la technologie évolue rapidement.<br>
    <span class="text-muted">Merci et bonne soirée. 🙏🏻<br>BIA</span>
  `,
  
  article3: `
    Suivez-moi sur LinkedIn pour plus de contenu technique,<br>
    des astuces de programmation et les dernières actualités dans le domaine de la tech !<br>
    <a href="https://www.linkedin.com/in/banconl%C3%A9-akobi-a88940273/" class="btn btn-primary mt-3">Mon LinkedIn</a>
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