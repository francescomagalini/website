(() => {
  const supportedLanguages = ['en', 'it', 'fr', 'nl', 'de', 'es'];
  const defaultLanguage = 'en';
  const storageKey = 'preferredLanguage';

  const textBindings = [
    { selector: 'header .logo h1', key: 'brand.name' },

    { selector: '#desktop-nav ul li:nth-child(1) a', key: 'nav.home' },
    { selector: '#desktop-nav ul li:nth-child(2) a', key: 'nav.solutions' },
    { selector: '#desktop-nav ul li:nth-child(3) a', key: 'nav.services' },
    { selector: '#desktop-nav ul li:nth-child(4) a', key: 'nav.about' },
    { selector: '#desktop-nav ul li:nth-child(5) a', key: 'nav.contact' },

    { selector: '#mobile-menu ul li:nth-child(1) a', key: 'nav.home' },
    { selector: '#mobile-menu ul li:nth-child(2) a', key: 'nav.solutions' },
    { selector: '#mobile-menu ul li:nth-child(3) a', key: 'nav.services' },
    { selector: '#mobile-menu ul li:nth-child(4) a', key: 'nav.about' },
    { selector: '#mobile-menu ul li:nth-child(5) a', key: 'nav.contact' },

    { selector: 'header .auth-buttons a.btn.btn-primary', key: 'cta.header' },
    { selector: '#mobile-menu .mobile-menu-footer a.btn.btn-primary', key: 'cta.header' },

    { selector: '#home .hero-content h1', key: 'hero.title' },
    { selector: '#home .hero-content p', key: 'hero.subtitle' },
    { selector: '#home .hero-buttons a.btn.btn-primary', key: 'hero.primaryCta' },
    { selector: '#home .hero-buttons a.btn.btn-secondary', key: 'hero.secondaryCta' },

    { selector: '#solutions .section-title', key: 'solutions.title' },
    { selector: '#solutions .section-description', key: 'solutions.subtitle' },
    { selector: '#solutions .solutions-grid .solution-card:nth-child(1) h3', key: 'solutions.cards.0.title' },
    { selector: '#solutions .solutions-grid .solution-card:nth-child(1) p', key: 'solutions.cards.0.text' },
    { selector: '#solutions .solutions-grid .solution-card:nth-child(2) h3', key: 'solutions.cards.1.title' },
    { selector: '#solutions .solutions-grid .solution-card:nth-child(2) p', key: 'solutions.cards.1.text' },
    { selector: '#solutions .solutions-grid .solution-card:nth-child(3) h3', key: 'solutions.cards.2.title' },
    { selector: '#solutions .solutions-grid .solution-card:nth-child(3) p', key: 'solutions.cards.2.text' },
    { selector: '#solutions .solutions-grid .solution-card:nth-child(4) h3', key: 'solutions.cards.3.title' },
    { selector: '#solutions .solutions-grid .solution-card:nth-child(4) p', key: 'solutions.cards.3.text' },

    { selector: '#services .section-title', key: 'services.title' },
    { selector: '#services .section-description', key: 'services.subtitle' },
    { selector: '#services .tabs-navigation .tab-btn:nth-child(1)', key: 'services.tabs.0' },
    { selector: '#services .tabs-navigation .tab-btn:nth-child(2)', key: 'services.tabs.1' },
    { selector: '#services .tabs-navigation .tab-btn:nth-child(3)', key: 'services.tabs.2' },
    { selector: '#services .tabs-navigation .tab-btn:nth-child(4)', key: 'services.tabs.3' },

    { selector: '#consulting h3', key: 'services.panes.consulting.title' },
    { selector: '#consulting p', key: 'services.panes.consulting.text' },
    { selector: '#consulting li:nth-child(1)', key: 'services.panes.consulting.bullets.0' },
    { selector: '#consulting li:nth-child(2)', key: 'services.panes.consulting.bullets.1' },
    { selector: '#consulting li:nth-child(3)', key: 'services.panes.consulting.bullets.2' },
    { selector: '#consulting li:nth-child(4)', key: 'services.panes.consulting.bullets.3' },

    { selector: '#implementation h3', key: 'services.panes.implementation.title' },
    { selector: '#implementation p', key: 'services.panes.implementation.text' },
    { selector: '#implementation li:nth-child(1)', key: 'services.panes.implementation.bullets.0' },
    { selector: '#implementation li:nth-child(2)', key: 'services.panes.implementation.bullets.1' },
    { selector: '#implementation li:nth-child(3)', key: 'services.panes.implementation.bullets.2' },
    { selector: '#implementation li:nth-child(4)', key: 'services.panes.implementation.bullets.3' },

    { selector: '#support h3', key: 'services.panes.support.title' },
    { selector: '#support p', key: 'services.panes.support.text' },
    { selector: '#support li:nth-child(1)', key: 'services.panes.support.bullets.0' },
    { selector: '#support li:nth-child(2)', key: 'services.panes.support.bullets.1' },
    { selector: '#support li:nth-child(3)', key: 'services.panes.support.bullets.2' },
    { selector: '#support li:nth-child(4)', key: 'services.panes.support.bullets.3' },

    { selector: '#training h3', key: 'services.panes.training.title' },
    { selector: '#training p', key: 'services.panes.training.text' },
    { selector: '#training li:nth-child(1)', key: 'services.panes.training.bullets.0' },
    { selector: '#training li:nth-child(2)', key: 'services.panes.training.bullets.1' },
    { selector: '#training li:nth-child(3)', key: 'services.panes.training.bullets.2' },
    { selector: '#training li:nth-child(4)', key: 'services.panes.training.bullets.3' },

    { selector: '#about .section-title', key: 'about.title' },
    { selector: '#about .about-content > p:nth-of-type(1)', key: 'about.p1' },
    { selector: '#about .about-content > p:nth-of-type(2)', key: 'about.p2' },
    { selector: '#about .about-stats .stat-item:nth-child(1) h3', key: 'about.stats.0.title' },
    { selector: '#about .about-stats .stat-item:nth-child(1) p', key: 'about.stats.0.text' },
    { selector: '#about .about-stats .stat-item:nth-child(2) h3', key: 'about.stats.1.title' },
    { selector: '#about .about-stats .stat-item:nth-child(2) p', key: 'about.stats.1.text' },
    { selector: '#about .about-stats .stat-item:nth-child(3) h3', key: 'about.stats.2.title' },
    { selector: '#about .about-stats .stat-item:nth-child(3) p', key: 'about.stats.2.text' },
    { selector: '#about .ms-partnership h3', key: 'about.callout.title' },
    { selector: '#about .ms-partnership p', key: 'about.callout.text' },

    { selector: '#contact .section-title', key: 'contact.title' },
    { selector: '#contact .section-description', key: 'contact.subtitle' },
    { selector: '#contact label[for="name"]', key: 'contact.form.name' },
    { selector: '#contact label[for="email"]', key: 'contact.form.email' },
    { selector: '#contact label[for="message"]', key: 'contact.form.message' },
    { selector: '#contact .contact-form button.btn.btn-primary', key: 'contact.form.send' },

    { selector: '#contact .contact-info .info-item:nth-child(2) p', key: 'contact.info.1' },
    { selector: '#contact .contact-info .info-item:nth-child(3) p', key: 'contact.info.2' },

    { selector: 'footer .footer-logo h2', key: 'brand.name' },
    { selector: 'footer .footer-logo p', key: 'brand.tagline' },

    { selector: 'footer .footer-column:nth-child(1) h3', key: 'footer.columns.0.title' },
    { selector: 'footer .footer-column:nth-child(1) li:nth-child(1) a', key: 'footer.columns.0.links.0' },
    { selector: 'footer .footer-column:nth-child(1) li:nth-child(2) a', key: 'footer.columns.0.links.1' },
    { selector: 'footer .footer-column:nth-child(1) li:nth-child(3) a', key: 'footer.columns.0.links.2' },
    { selector: 'footer .footer-column:nth-child(1) li:nth-child(4) a', key: 'footer.columns.0.links.3' },

    { selector: 'footer .footer-column:nth-child(2) h3', key: 'footer.columns.1.title' },
    { selector: 'footer .footer-column:nth-child(2) li:nth-child(1) a', key: 'footer.columns.1.links.0' },
    { selector: 'footer .footer-column:nth-child(2) li:nth-child(2) a', key: 'footer.columns.1.links.1' },
    { selector: 'footer .footer-column:nth-child(2) li:nth-child(3) a', key: 'footer.columns.1.links.2' },
    { selector: 'footer .footer-column:nth-child(2) li:nth-child(4) a', key: 'footer.columns.1.links.3' },

    { selector: 'footer .footer-column:nth-child(3) h3', key: 'footer.columns.2.title' },
    { selector: 'footer .footer-column:nth-child(3) li:nth-child(1) a', key: 'footer.columns.2.links.0' },
    { selector: 'footer .footer-column:nth-child(3) li:nth-child(2) a', key: 'footer.columns.2.links.1' },
    { selector: 'footer .footer-column:nth-child(3) li:nth-child(3) a', key: 'footer.columns.2.links.2' },
    { selector: 'footer .footer-column:nth-child(3) li:nth-child(4) a', key: 'footer.columns.2.links.3' },

    { selector: 'footer .footer-bottom .footer-legal a:nth-child(1)', key: 'footer.legal.privacy' },
    { selector: 'footer .footer-bottom .footer-legal a:nth-child(2)', key: 'footer.legal.terms' }
  ];

  const attrBindings = [
    { selector: 'meta[name="description"]', attr: 'content', key: 'meta.description' }
  ];

  function detectInitialLanguage() {
    const url = new URL(window.location.href);
    const urlLang = (url.searchParams.get('lang') || '').toLowerCase();
    if (supportedLanguages.includes(urlLang)) return urlLang;

    const stored = (window.localStorage.getItem(storageKey) || '').toLowerCase();
    if (supportedLanguages.includes(stored)) return stored;

    const browser = (navigator.language || '').slice(0, 2).toLowerCase();
    if (supportedLanguages.includes(browser)) return browser;

    return defaultLanguage;
  }

  async function loadLocales() {
    const response = await fetch('/locales.json', { cache: 'no-cache' });
    if (!response.ok) throw new Error(`Failed to load locales.json (${response.status})`);
    return response.json();
  }

  function toI18nextResources(localesByLanguage) {
    const resources = {};
    for (const [language, messages] of Object.entries(localesByLanguage)) {
      resources[language] = { translation: messages };
    }
    return resources;
  }

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  }

  function setAttr(selector, attr, value) {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attr, value);
    });
  }

  function applyTranslations() {
    if (!window.i18next) return;

    const language = i18next.language || defaultLanguage;
    document.documentElement.lang = language;

    const brandName = i18next.t('brand.name');

    document.title = i18next.t('meta.title');

    attrBindings.forEach(({ selector, attr, key }) => {
      setAttr(selector, attr, i18next.t(key));
    });

    textBindings.forEach(({ selector, key }) => {
      setText(selector, i18next.t(key, { brand: brandName }));
    });

    const copyright = i18next.t('footer.copyright', {
      year: new Date().getFullYear(),
      brand: brandName
    });
    setText('footer .footer-bottom > p', copyright);
  }

  function setupLanguageSwitchers(initialLanguage) {
    const switchers = document.querySelectorAll('select.language-switcher');

    switchers.forEach((switcher) => {
      switcher.value = initialLanguage;
      switcher.addEventListener('change', async (event) => {
        const nextLanguage = event.target.value;
        if (!supportedLanguages.includes(nextLanguage)) return;

        window.localStorage.setItem(storageKey, nextLanguage);

        const url = new URL(window.location.href);
        url.searchParams.set('lang', nextLanguage);
        window.history.replaceState({}, '', url);

        await i18next.changeLanguage(nextLanguage);
        applyTranslations();

        switchers.forEach((other) => {
          other.value = nextLanguage;
        });
      });
    });
  }

  async function start() {
    if (!window.i18next) {
      console.error('i18next not loaded');
      return;
    }

    let locales;
    try {
      locales = await loadLocales();
    } catch (error) {
      console.error(error);
      return;
    }

    const resources = toI18nextResources(locales);
    const initialLanguage = detectInitialLanguage();

    await i18next.init({
      lng: initialLanguage,
      fallbackLng: defaultLanguage,
      resources,
      interpolation: {
        escapeValue: false
      }
    });

    setupLanguageSwitchers(initialLanguage);
    applyTranslations();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
