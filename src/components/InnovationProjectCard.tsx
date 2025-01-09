import React from 'react';
import type { Language, InnovationProject } from '../types';
import { Card } from './ui/Card';
import { Dialog } from './ui/Dialog';
import { GradientText } from './decorative/GradientText';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Share2, Bookmark, X } from 'lucide-react';
import { IconButton } from './ui/IconButton';
import ReactMarkdown from 'react-markdown';

interface Props {
  project: InnovationProject;
  language: Language;
}

export function InnovationProjectCard({ project, language }: Props) {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <>
      <Card 
        className="group cursor-pointer overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
        onClick={() => setShowDetails(true)}
      >
        {/* Card content stays the same */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
          <img
            src={project.image}
            alt={language === 'en' ? project.title : project.titleEs}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-[#F4ED1F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
        </div>

        <div className="p-6 relative">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F4ED1F] transition-colors">
            {language === 'en' ? project.title : project.titleEs}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2">
            {language === 'en' ? project.description : project.descriptionEs}
          </p>

          <div className="flex items-center gap-2 text-sm font-medium text-[#F4ED1F]">
            <span className="group-hover:mr-2 transition-all duration-300">
              {language === 'en' ? 'Read more' : 'Leer más'}
            </span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-[#F4ED1F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </Card>

      {/* Article Modal */}
      <AnimatePresence>
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
                  src={project.image}
                  alt={language === 'en' ? project.title : project.titleEs}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-4xl font-bold mb-4">
                    <GradientText>
                      {language === 'en' ? project.title : project.titleEs}
                    </GradientText>
                  </h2>
                  <p className="text-xl text-gray-300">
                    {language === 'en' ? project.description : project.descriptionEs}
                  </p>
                </div>
              </div>

              {/* Rest of the modal content stays the same */}
              <div className="max-w-4xl mx-auto px-6 md:px-8 py-12">
                <div className="flex items-center gap-6 mb-12 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>5 min read</span>
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

                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    {language === 'en' ? 'Key Highlights' : 'Aspectos Destacados'}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.highlights.map((highlight, index) => (
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

                {project.technicalDetails && (
                  <section className="prose prose-invert prose-yellow max-w-none">
                    <div className="text-gray-300 leading-relaxed">
                      <ReactMarkdown
                        className="prose prose-invert prose-yellow prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-300 prose-p:leading-relaxed prose-ul:list-disc prose-li:text-gray-300"
                      >
                        {language === 'en' 
                          ? project.technicalDetails.content 
                          : project.technicalDetails.contentEs}
                      </ReactMarkdown>
                    </div>
                  </section>
                )}
              </div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
