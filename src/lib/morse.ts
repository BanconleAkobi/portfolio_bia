/**
 * Code morse international, réduit aux lettres et aux chiffres.
 * Sert la signature visuelle du site : le morse est un ornement, jamais
 * un porteur d'information. Tout ce qu'il code est toujours écrit en clair
 * juste à côté, et les marques sont masquées aux lecteurs d'écran.
 */
export const MORSE_CODE: Record<string, string> = {
  A: '.-',    B: '-...',  C: '-.-.',  D: '-..',   E: '.',
  F: '..-.',  G: '--.',   H: '....',  I: '..',    J: '.---',
  K: '-.-',   L: '.-..',  M: '--',    N: '-.',    O: '---',
  P: '.--.',  Q: '--.-',  R: '.-.',   S: '...',   T: '-',
  U: '..-',   V: '...-',  W: '.--',   X: '-..-',  Y: '-.--',
  Z: '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
};

/** Retire les diacritiques pour que « éloquence » se code comme « eloquence ». */
function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toUpperCase();
}

/**
 * Transcrit un texte en morse. Les lettres sont séparées par une espace,
 * les mots par trois. Les caractères hors alphabet sont ignorés.
 */
export function toMorse(text: string): string {
  return normalize(text)
    .split(/\s+/)
    .map((word) =>
      word
        .split('')
        .map((char) => MORSE_CODE[char])
        .filter(Boolean)
        .join(' ')
    )
    .filter(Boolean)
    .join('   ');
}

export type MorseUnit = {
  /** '.' pour un point, '-' pour un trait, 'gap' pour la respiration entre lettres */
  kind: '.' | '-' | 'gap';
  /** Lettre à laquelle appartient l'unité */
  letter: string;
  /** Index de la lettre dans le mot */
  letterIndex: number;
};

/**
 * Décompose un mot en unités affichables une à une, pour l'animation du hero.
 * Chaque lettre est suivie d'une unité « gap » qui marque sa fin : c'est elle
 * qui déclenche l'apparition de la lettre décodée.
 */
export function toUnits(word: string): MorseUnit[] {
  const units: MorseUnit[] = [];
  normalize(word)
    .split('')
    .forEach((letter, letterIndex) => {
      const code = MORSE_CODE[letter];
      if (!code) return;
      code.split('').forEach((char) => {
        units.push({ kind: char as '.' | '-', letter, letterIndex });
      });
      units.push({ kind: 'gap', letter, letterIndex });
    });
  return units;
}
