import { Article } from '../types/article';
import type { Language } from '../types';

export async function shareArticle(article: Article, language: Language) {
  const title = language === 'en' ? article.title : article.titleEs;
  const url = `${window.location.origin}/articles/${article.id}`;

  // Try to use the Web Share API if available
  if (navigator.share) {
    try {
      await navigator.share({
        title,
        text: language === 'en' ? article.description : article.descriptionEs,
        url
      });
      return true;
    } catch (error) {
      console.log('Error sharing:', error);
    }
  }

  // Fallback to clipboard copy
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch (error) {
    console.error('Failed to copy:', error);
    return false;
  }
}
