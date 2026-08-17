export interface PublishedArticle {
  title: string;
  titleEn: string;
  /** Support de publication : nom du média, du blog ou de la plateforme. */
  outlet: string;
  /** Date de publication, au format ISO AAAA-MM-JJ. */
  date: string;
  /** Lien vers l'article en ligne. */
  url: string;
}

/**
 * Articles publiés ailleurs que sur ce site.
 *
 * TODO: à remplir. Tant que la liste est vide, la section « Articles publiés »
 * de la page Écriture ne s'affiche pas, plutôt que de montrer un bloc creux.
 *
 * Forme attendue, deux exemples :
 *
 * {
 *   title: 'Titre de l’article, en français',
 *   titleEn: 'Article title, in English',
 *   outlet: 'Nom du support',
 *   date: '2026-03-12',
 *   url: 'https://exemple.fr/chemin-de-larticle',
 * },
 * {
 *   title: 'Second titre',
 *   titleEn: 'Second title',
 *   outlet: 'Autre support',
 *   date: '2026-05-04',
 *   url: 'https://autre-exemple.fr/article',
 * },
 */
export const publishedArticles: PublishedArticle[] = [];
