import type { Language } from './index';

export interface Article {
  id: string;
  date: string; // ISO date string
  type: 'security' | 'innovation' | 'research';
  image: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  content: string;
  contentEs: string;
  highlights: Array<{
    text: string;
    textEs: string;
  }>;
  tags: string[];
  readingTime: number; // in minutes
}

export interface ArticleMetadata {
  date: string;
  readingTime: number;
  tags: string[];
  type: Article['type'];
}
