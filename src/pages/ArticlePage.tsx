import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Language } from '../types';
import { Section } from '../components/ui/Section';
import { GradientText } from '../components/decorative/GradientText';
import { articles } from '../data/articles';
import { formatDate } from '../utils/date';
import { Badge } from '../components/ui/Badge';
import { Calendar, Clock, Share2, Bookmark } from 'lucide-react';
import { IconButton } from '../components/ui/IconButton';
import { Toast } from '../components/ui/Toast';
import { shareArticle } from '../utils/share';
import ReactMarkdown from 'react-markdown';

interface Props {
  language: Language;
}

export function ArticlePage({ language }: Props) {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [showToast, setShowToast] = React.useState(false);

  const article = articles.find(a => a.id === articleId);

  if (!article) {
    navigate('/innovation-lab');
    return null;
  }

  const handleShare = async () => {
    const shared = await shareArticle(article, language);
    if (shared) {
      setShowToast(true);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative">
        <div className="relative h-[30vh] sm:h-[40vh] md:h-[50vh]">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <img
            src={article.image}
            alt={language === 'en' ? article.title : article.titleEs}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <GradientText>
                {language === 'en' ? article.title : article.titleEs}
              </GradientText>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              {language === 'en' ? article.description : article.descriptionEs}
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Metadata and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
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
                onClick={handleShare}
                className="hover:text-[#F4ED1F]"
              >
                <Share2 className="w-4 h-4" />
              </IconButton>
              <IconButton
                variant="secondary"
                size="sm"
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
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              {language === 'en' ? 'Key Highlights' : 'Aspectos Destacados'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      </Section>

      {/* Toast Notification */}
      <Toast
        message={language === 'en' ? 'Link copied to clipboard!' : '¡Enlace copiado al portapapeles!'}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
