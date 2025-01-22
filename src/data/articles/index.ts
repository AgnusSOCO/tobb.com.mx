import { Article } from '../../types/article';
import { phishingGtldsArticle } from './phishing-gtlds';
import { firescamArticle } from './firescam';
import { miraiArticle } from './mirai';
import { ukraineEspionageArticle } from './ukraine-espionage';
import { silkRoadArticle } from './silk-road';

export const articles: Article[] = [
  silkRoadArticle, // Most recent first
  phishingGtldsArticle,
  ukraineEspionageArticle,
  firescamArticle,
  miraiArticle,
];

export * from './phishing-gtlds';
export * from './firescam';
export * from './mirai';
export * from './ukraine-espionage';
export * from './silk-road';
