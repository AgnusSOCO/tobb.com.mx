import type { Article } from '../../types/article';
import { firescamArticle } from './firescam';
import { miraiArticle } from './mirai';
import { ukraineEspionageArticle } from './ukraine-espionage';

export const articles: Article[] = [
  ukraineEspionageArticle, // Most recent first
  firescamArticle,
  miraiArticle
];

export * from './firescam';
export * from './mirai';
export * from './ukraine-espionage';
