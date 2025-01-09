import React from 'react';
import type { Language } from '../types';
import type { Article, ArticleMetadata } from '../types/article';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Clock, Calendar } from 'lucide-react';
import { formatDate } from '../utils/date';

interface Props {
  article: Article;
  language: Language;
  onClick: () => void;
}

export function ArticleCard({ article, language, onClick }: Props) {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
        <img
          src={article.image}
          alt={language === 'en' ? article.title : article.titleEs}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-[#F4ED1F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
      </div>

      {/* Content */}
      <div className="p-6 relative space-y-4">
        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(article.date, language)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{article.readingTime} min read</span>
          </div>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F4ED1F] transition-colors">
            {language === 'en' ? article.title : article.titleEs}
          </h3>
          <p className="text-gray-400 line-clamp-2">
            {language === 'en' ? article.description : article.descriptionEs}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <Badge key={tag} variant="secondary" size="sm">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
