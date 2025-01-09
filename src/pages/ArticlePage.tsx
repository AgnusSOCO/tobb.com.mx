import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Language } from '../types';
import { Section } from '../components/ui/Section';
import { GradientText } from '../components/decorative/GradientText';
import { articles } from '../data/articles';
import { formatDate } from '../utils/date';
import { Clock, Calendar, Share2, Bookmark, ArrowLeft, ArrowRight } from 'lucide-react';
import { IconButton } from '../components/ui/IconButton';
import { Badge } from '../components/ui/Badge';
import { Toast } from '../components/ui/Toast';
import { shareArticle } from '../utils/share';
import ReactMarkdown from 'react-markdown';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

interface Props {
  language: Language;
}

export function ArticlePage({ language }: Props) {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [showToast, setShowToast] = React.useState(false);

  const currentIndex = articles.findIndex(a => a.id === articleId);
  const article = articles[currentIndex];
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  if (!article) {
    React.useEffect(() => {
      navigate('/');
    }, [navigate]);
    return null;
  }

  React.useEffect(() => {
    // Update meta tags
    const title = language === 'en' ? article.title : article.titleEs;
    const description = language === 'en' ? article.description : article.descriptionEs;
    const url = `${window.location.origin}/articles/${article.id}`;

    document.title = `${title} | több`;

    // Update standard meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph meta tags
    const updateMetaTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:url', url);
    updateMetaTag('og:image', article.image);
    updateMetaTag('og:type', 'article');

    // Update Twitter Card meta tags
    const updateTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);
    updateTwitterTag('twitter:image', article.image);

    // Update article schema
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      image: article.image,
      datePublished: article.date,
      url: url
    };

    const scriptTag = document.getElementById('article-schema');
    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(schema);
    }

    // Cleanup function
    return () => {
      document.title = 'több | Securing Tomorrow, Innovating Today';
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Leading cybersecurity and technology solutions provider in Mexico. Empowering businesses with next-generation security solutions and cutting-edge innovation.');
      }
    };
  }, [article, language]);

  const handleShare = async () => {
    const shared = await shareArticle(article, language);
    if (shared) {
      setShowToast(true);
    }
  };

  const navigateToArticle = (articleId: string) => {
    navigate(`/articles/${articleId}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh]">
        <div className="absolute inset-0">
          <img
            src={article.image}
            alt={language === 'en' ? article.title : article.titleEs}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-end h-full pb-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {language === 'en' ? article.title : article.titleEs}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {language === 'en' ? article.description : article.descriptionEs}
              </p>

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
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Action Buttons */}
          <div className="flex justify-end gap-2 mb-8">
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
              <GradientText>
                {language === 'en' ? 'Key Highlights' : 'Aspectos Destacados'}
              </GradientText>
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
          <section className="prose prose-invert prose-yellow max-w-none mb-16">
            <div className="text-gray-300 leading-relaxed">
              <ReactMarkdown
                className="prose prose-invert prose-yellow prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-300 prose-p:leading-relaxed prose-ul:list-disc prose-li:text-gray-300"
              >
                {language === 'en' ? article.content : article.contentEs}
              </ReactMarkdown>
            </div>
          </section>

          {/* Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {prevArticle && (
              <Card
                className="group cursor-pointer p-6"
                onClick={() => navigateToArticle(prevArticle.id)}
              >
                <div className="flex items-center gap-4">
                  <ArrowLeft className="w-5 h-5 text-[#F4ED1F] group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <div className="text-sm text-gray-400 mb-1">
                      {language === 'en' ? 'Previous Article' : 'Artículo Anterior'}
                    </div>
                    <div className="text-white group-hover:text-[#F4ED1F] transition-colors">
                      {language === 'en' ? prevArticle.title : prevArticle.titleEs}
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {nextArticle && (
              <Card
                className="group cursor-pointer p-6"
                onClick={() => navigateToArticle(nextArticle.id)}
              >
                <div className="flex items-center justify-end gap-4">
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">
                      {language === 'en' ? 'Next Article' : 'Siguiente Artículo'}
                    </div>
                    <div className="text-white group-hover:text-[#F4ED1F] transition-colors">
                      {language === 'en' ? nextArticle.title : nextArticle.titleEs}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#F4ED1F] group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            )}
          </div>

          {/* Back to Articles */}
          <div className="flex justify-center mt-12">
            <Button
              variant="secondary"
              onClick={() => navigate('/innovation-lab')}
              className="group"
            >
              <span className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                {language === 'en' ? 'Back to Articles' : 'Volver a Artículos'}
              </span>
            </Button>
          </div>
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
