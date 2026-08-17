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

/**
 * Routes dont le segment change de langue, et pas seulement le préfixe.
 * Le reste du site partage le même chemin après `/fr` ou `/en`, si bien qu'un
 * simple remplacement du préfixe suffisait jusqu'ici.
 */
const LOCALIZED_ROUTES: Record<Lang, string>[] = [
  { fr: '/fr/ecriture', en: '/en/writing' },
];

export function getWritingPath(lang: Lang): string {
  return LOCALIZED_ROUTES[0][lang];
}

/**
 * Équivalent d'un chemin dans l'autre langue, routes traduites comprises.
 * Sans ça, le sélecteur de langue enverrait de `/fr/ecriture` vers
 * `/en/ecriture`, qui n'existe pas.
 */
export function getAlternatePath(path: string, target: Lang): string {
  const bare = path.replace(/\/$/, '');
  for (const route of LOCALIZED_ROUTES) {
    if (bare === route.fr || bare === route.en) return route[target];
  }
  return path.replace(/^\/(fr|en)/, `/${target}`);
}
