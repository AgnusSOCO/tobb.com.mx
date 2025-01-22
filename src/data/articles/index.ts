import { Article } from '../../types/article';
import { phishingGtldsArticle } from './phishing-gtlds';
import { firescamArticle } from './firescam';
import { miraiArticle } from './mirai';
import { ukraineEspionageArticle } from './ukraine-espionage';
import { silkRoadArticle } from './silk-road';
import { saasSecurityArticle } from './saas-security';
import { odooPartnershipArticle } from './odoo-partnership';

export const articles: Article[] = [
  odooPartnershipArticle, // Most recent first
  saasSecurityArticle,
  silkRoadArticle,
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
export * from './saas-security';
export * from './odoo-partnership';
