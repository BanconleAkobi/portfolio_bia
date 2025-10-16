

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
    <h4>Will AI Kill Bug Bounty? 🤖</h4>
    <br>
    <strong>TL;DR:</strong> No, but it will change the game. And that's great!<br>
    <br>
    <strong>The reality:</strong> ChatGPT finds vulnerabilities in 2 minutes. GitHub Copilot generates secure code. AI tools are multiplying like mushrooms.<br>
    <br>
    <strong>But here's the thing:</strong> AI doesn't replace human intuition. It doesn't understand business context. It doesn't see logical flaws that only a human can identify.<br>
    <br>
    <strong>My experience:</strong> I tested ChatGPT on CTFs. Result? It finds basic vulnerabilities (SQL injection, XSS) but completely misses creative exploits. AI is a super assistant, not a replacement.<br>
    <br>
    <strong>The future of Bug Bounty:</strong><br>
    • More focus on business logic<br>
    • More sophisticated exploits<br>
    • Human-AI collaboration<br>
    • Higher rewards for real experts<br>
    <br>
    <strong>Bottom line:</strong> AI will raise the bar, not kill the job. The best hunters will become even better. Others... well, they'll have to adapt.<br>
    <br>
    <em>What do you think about AI in cybersecurity?</em> 💭
  `,
  
  article2: `
    <h4>Symfony 8: Why I Said Goodbye to Laravel 🚀</h4>
    <br>
    <strong>Disclaimer:</strong> I have nothing against Laravel, but Symfony won me over. Here's why.<br>
    <br>
    <strong>The trigger:</strong> After 2 years with Laravel, I migrated a project to Symfony 8. And there, revelation!<br>
    <br>
    <strong>Why Symfony wins:</strong><br>
    • <strong>Performance:</strong> 3x faster than Laravel in my tests<br>
    • <strong>Flexibility:</strong> No hidden "magic", everything is explicit<br>
    • <strong>Ecosystem:</strong> Components are reusable everywhere<br>
    • <strong>Standards:</strong> PSR-4, PSR-7, PSR-15... Symfony respects everything<br>
    <br>
    <strong>The Laravel trap:</strong> Too much "sugar coating". Eloquent is practical but masks complexity. When it breaks, you struggle to debug.<br>
    <br>
    <strong>Symfony in enterprise:</strong> More robust, more maintainable, more scalable. Perfect for big projects.<br>
    <br>
    <strong>My advice:</strong> If you're starting, begin with Laravel. If you want to become an expert, switch to Symfony.<br>
    <br>
    <strong>Result:</strong> My Symfony 8 app runs like clockwork. Zero regrets. 🎯<br>
    <br>
    <em>What about you, Laravel or Symfony? Open debate!</em> 🔥
  `,
  
  article3: `
    <h4>Scaleway vs AWS: The Match of the Century 💰</h4>
    <br>
    <strong>Context:</strong> I migrated 3 PrestaShops from AWS to Scaleway. Result? 60% savings and zero regrets.<br>
    <br>
    <strong>The numbers speak:</strong><br>
    • <strong>AWS:</strong> €450/month for 3 instances<br>
    • <strong>Scaleway:</strong> €180/month for the same config<br>
    • <strong>Performance:</strong> Identical, even better<br>
    <br>
    <strong>Why Scaleway wins:</strong><br>
    • <strong>Transparent pricing:</strong> No surprises on the bill<br>
    • <strong>French support:</strong> 2h response vs 24h at AWS<br>
    • <strong>Simplicity:</strong> Clear interface, no AWS maze<br>
    • <strong>Ecology:</strong> Datacenters in France, less CO2<br>
    <br>
    <strong>Weak points:</strong><br>
    • Fewer tools than AWS<br>
    • Smaller community<br>
    • Documentation sometimes behind<br>
    <br>
    <strong>My verdict:</strong> For 80% of projects, Scaleway is more than enough. AWS remains for very specific cases.<br>
    <br>
    <strong>Bonus:</strong> Scaleway support helped me optimize my instances. At AWS, I would have had to pay a consultant.<br>
    <br>
    <em>What cloud do you use?</em> ☁️
  `,
  
  article4: `
    <h4>Flutter vs React Native: A Backend Dev's Verdict 📱</h4>
    <br>
    <strong>The challenge:</strong> Build a shopping management app. As a PHP/Symfony dev, I tested both.<br>
    <br>
    <strong>Flutter wins hands down. Here's why:</strong><br>
    <br>
    <strong>Performance:</strong><br>
    • <strong>Flutter:</strong> Constant 60 FPS, smooth animations<br>
    • <strong>React Native:</strong> Lag on complex animations<br>
    <br>
    <strong>Development:</strong><br>
    • <strong>Flutter:</strong> Instant hot reload, easy debug<br>
    • <strong>React Native:</strong> Metro bundler crashes, complicated debug<br>
    <br>
    <strong>UI/UX:</strong><br>
    • <strong>Flutter:</strong> Consistent design system, perfect Material Design<br>
    • <strong>React Native:</strong> Inconsistencies between iOS/Android<br>
    <br>
    <strong>My app in numbers:</strong><br>
    • <strong>Development:</strong> 2 weeks with Flutter vs 1 month estimated with RN<br>
    • <strong>Size:</strong> 15MB vs 25MB+ with RN<br>
    • <strong>Bugs:</strong> 3 Flutter bugs vs 12+ with RN<br>
    <br>
    <strong>The React Native trap:</strong> You need to know React + JavaScript + iOS + Android. With Flutter, just Dart.<br>
    <br>
    <strong>Bottom line:</strong> Flutter is simpler, faster, more reliable. React Native has its fans, but Flutter dominates.<br>
    <br>
    <em>My app is available on GitHub if you want to see the code!</em> 🚀
  `,
  
  article5: `
    <h4>How I Hacked My Own Site (and Why It's Important) 🔒</h4>
    <br>
    <strong>The challenge:</strong> Pentest of my own portfolio. Result? 7 vulnerabilities found. Oops! 😅<br>
    <br>
    <strong>Discovered vulnerabilities:</strong><br>
    • <strong>XSS:</strong> Script injection via contact form<br>
    • <strong>CSRF:</strong> No tokens on forms<br>
    • <strong>Information disclosure:</strong> PHP version exposed<br>
    • <strong>Directory traversal:</strong> System file access<br>
    • <strong>SQL injection:</strong> Via URL parameters<br>
    • <strong>Clickjacking:</strong> No X-Frame-Options<br>
    • <strong>Insecure cookies:</strong> No security flags<br>
    <br>
    <strong>How to fix them:</strong><br>
    • <strong>XSS:</strong> Escape inputs, use CSP<br>
    • <strong>CSRF:</strong> Add CSRF tokens<br>
    • <strong>Headers:</strong> X-Frame-Options, X-Content-Type-Options<br>
    • <strong>Cookies:</strong> HttpOnly, Secure, SameSite<br>
    <br>
    <strong>Why it's crucial:</strong> If I can hack my site, an attacker can too. Security is not optional.<br>
    <br>
    <strong>My advice:</strong> Test your sites regularly. Use OWASP ZAP, Burp Suite, or free tools.<br>
    <br>
    <strong>Result:</strong> My site is now secure. And I learned a lot!<br>
    <br>
    <em>Do you test the security of your projects?</em> 🛡️
  `,
  
  article6: `
    <h4>Cybersecurity Apprenticeship: My 6 Months of Struggle and Success 🎯</h4>
    <br>
    <strong>Context:</strong> Early September 2024, I arrive at MagicRecycle. Goal: become a cybersecurity expert. Spoiler: mission accomplished!<br>
    <br>
    <strong>First months (total struggle):</strong><br>
    • <strong>Week 1:</strong> "What's a firewall?" 😅<br>
    • <strong>Month 1:</strong> I crash the prod server (oops)<br>
    • <strong>Month 2:</strong> I finally understand logs<br>
    • <strong>Month 3:</strong> First successful pentest!<br>
    <br>
    <strong>The victories:</strong><br>
    • <strong>ISC2 Certification:</strong> Security CC obtained<br>
    • <strong>Bug Bounty:</strong> First €500 bounty<br>
    • <strong>CTF:</strong> Top 10% on TryHackMe<br>
    • <strong>Projects:</strong> Securing 3 PrestaShops<br>
    <br>
    <strong>My tips for success:</strong><br>
    • <strong>Daily practice:</strong> 1h of CTF per day<br>
    • <strong>Community:</strong> Join cybersecurity Discords<br>
    • <strong>Concrete projects:</strong> Hack your own sites<br>
    • <strong>Certifications:</strong> ISC2, CEH, OSCP<br>
    <br>
    <strong>Mistakes to avoid:</strong><br>
    • Don't test in prod (obvious but...)<br>
    • Neglect documentation<br>
    • Isolate security problems<br>
    <br>
    <strong>Result:</strong> In 6 months, I went from beginner to expert. Cybersecurity is accessible with motivation!<br>
    <br>
    <em>Do you have questions about cybersecurity apprenticeships?</em> 💪
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