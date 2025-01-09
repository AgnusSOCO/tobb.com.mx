import React from 'react';
import type { Language } from '../types';
import type { Article } from '../types/article';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Clock, Calendar, Share2, Bookmark, X } from 'lucide-react';
import { formatDate } from '../utils/date';
import { Dialog } from './ui/Dialog';
import { GradientText } from './decorative/GradientText';
import { IconButton } from './ui/IconButton';
import ReactMarkdown from 'react-markdown';

interface Props {
  article: Article;
  language: Language;
}

export function ArticleCard({ article, language }: Props) {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <>
      <Card 
        className="group cursor-pointer overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
        onClick={() => setShowDetails(true)}
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

      {/* Article Modal */}
      {showDetails && (
        <Dialog onClose={() => setShowDetails(false)} size="xl">
          <div className="bg-black/90 backdrop-blur-xl rounded-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-lg bg-black/50 hover:bg-black/70 transition-colors group"
            >
              <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            </button>

            {/* Hero Image */}
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <img
                src={article.image}
                alt={language === 'en' ? article.title : article.titleEs}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-4xl font-bold mb-4">
                  <GradientText>
                    {language === 'en' ? article.title : article.titleEs}
                  </GradientText>
                </h2>
                <p className="text-xl text-gray-300">
                  {language === 'en' ? article.description : article.descriptionEs}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 md:px-8 py-12">
              {/* Metadata */}
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(article.date, language)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readingTime} min read</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <IconButton
                    variant="secondary"
                    size="sm"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-[#F4ED1F]"
                  >
                    <Share2 className="w-4 h-4" />
                  </IconButton>
                  <IconButton
                    variant="secondary"
                    size="sm"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-[#F4ED1F]"
                  >
                    <Bookmark className="w-4 h-4" />
                  </IconButton>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map(tag => (
                  <Badge key={tag} variant="secondary" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Key Highlights */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {language === 'en' ? 'Key Highlights' : 'Aspectos Destacados'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {article.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="group relative p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F4ED1F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                      <div className="relative flex items-start gap-4">
                        <div className="w-2 h-2 mt-2 rounded-full bg-[#F4ED1F] group-hover:scale-110 transition-transform" />
                        <p className="text-gray-300 group-hover:text-white transition-colors">
                          {language === 'en' ? highlight.text : highlight.textEs}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Main Content */}
              <section className="prose prose-invert prose-yellow max-w-none">
                <div className="text-gray-300 leading-relaxed">
                  <ReactMarkdown
                    className="prose prose-invert prose-yellow prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-300 prose-p:leading-relaxed prose-ul:list-disc prose-li:text-gray-300"
                  >
                    {language === 'en' ? article.content : article.contentEs}
                  </ReactMarkdown>
                </div>
              </section>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}
