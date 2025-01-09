import { Article } from '../../types/article';
import { phishingGtldsArticle } from './phishing-gtlds';
import { firescamArticle } from './firescam';
import { miraiArticle } from './mirai';
import { ukraineEspionageArticle } from './ukraine-espionage';

export const articles: Article[] = [
  phishingGtldsArticle, // Most recent first
  ukraineEspionageArticle,
  firescamArticle,
  miraiArticle,
];

export * from './phishing-gtlds';
export * from './firescam';
export * from './mirai';
export * from './ukraine-espionage';
