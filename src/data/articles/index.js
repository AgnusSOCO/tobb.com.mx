import { Article } from '../../types/article';
import { firescamArticle } from './firescam';
import { miraiArticle } from './mirai';

export const articles: Article[] = [
  firescamArticle,
  miraiArticle,
];

export * from './firescam';
export * from './mirai';
