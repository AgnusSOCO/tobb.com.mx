import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import type { Language } from '../types';
import { Section } from '../components/ui/Section';
import { GradientText } from '../components/decorative/GradientText';
import { articles } from '../data/articles';
import { formatDate } from '../utils/date';
import { Badge } from '../components/ui/Badge';
import { Calendar, Clock, Share2, Bookmark, ArrowLeft } from 'lucide-react';
import { IconButton } from '../components/ui/IconButton';
import { Button } from '../components/ui/Button';
import { Toast } from '../components/ui/Toast';
import { shareArticle } from '../utils/share';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

interface Props {
  language: Language;
}

export function ArticlePage({ language }: Props) {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [showToast, setShowToast] = React.useState(false);
  const [isBookmarked, setIsBookmarked] = React.useState(false);

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

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // TODO: Implement bookmark functionality
  };

  const title = language === 'en' ? article.title : article.titleEs;
  const description = language === 'en' ? article.description : article.descriptionEs;
  const content = language === 'en' ? article.content : article.contentEs;

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{title} | több</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={article.image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={article.image} />

        {/* Article Specific */}
        <meta property="article:published_time" content={article.date} />
        <meta property="article:section" content={article.type} />
        {article.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <Section className="relative pb-0">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button
              variant="secondary"
              onClick={() => navigate('/innovation-lab')}
              className="group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {language === 'en' ? 'Back to Innovation Lab' : 'Volver al Laboratorio'}
            </Button>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-t-2xl overflow-hidden"
          >
            <div className="relative h-[60vh] overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <img
                  src={article.image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 flex items-end">
                <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map(tag => (
                      <Badge key={tag} variant="secondary" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                    <GradientText>{title}</GradientText>
                  </h1>

                  {/* Description */}
                  <p className="text-xl text-gray-300 mb-6 max-w-3xl">
                    {description}
                  </p>

                  {/* Metadata */}
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
          </motion.div>
        </Section>

        {/* Article Content */}
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
                onClick={handleBookmark}
                className={`hover:text-[#F4ED1F] ${isBookmarked ? 'text-[#F4ED1F]' : ''}`}
              >
                <Bookmark className="w-4 h-4" />
              </IconButton>
            </div>

            {/* Key Highlights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                {language === 'en' ? 'Key Highlights' : 'Aspectos Destacados'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {article.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F4ED1F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                    <div className="relative flex items-start gap-4">
                      <div className="w-2 h-2 mt-2 rounded-full bg-[#F4ED1F] group-hover:scale-110 transition-transform" />
                      <p className="text-gray-300 group-hover:text-white transition-colors">
                        {language === 'en' ? highlight.text : highlight.textEs}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-yellow max-w-none"
            >
              <ReactMarkdown
                className="text-gray-300 leading-relaxed"
                components={{
                  h1: ({ children }) => <h1 className="text-4xl font-bold text-white mt-8 mb-4">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-2xl font-bold text-white mt-6 mb-3">{children}</h3>,
                  p: ({ children }) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside text-gray-300 mb-4">{children}</ul>,
                  li: ({ children }) => <li className="mb-2">{children}</li>,
                }}
              >
                {content}
              </ReactMarkdown>
            </motion.div>
          </div>
        </Section>
      </div>

      {/* Toast Notification */}
      <Toast
        message={language === 'en' ? 'Link copied to clipboard!' : '¡Enlace copiado al portapapeles!'}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}
