import fr from './fr.json';
import en from './en.json';

export type Lang = 'fr' | 'en';

const translations = { fr, en } as const;

export function getLang(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'fr';
}

export function t(lang: Lang) {
  return translations[lang];
}

export function getLocalePath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}

export function getOtherLang(lang: Lang): Lang {
  return lang === 'fr' ? 'en' : 'fr';
}
