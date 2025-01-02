import React from 'react';
import type { Language, InnovationProject } from '../types';
import { Card } from './ui/Card';
import { Dialog } from './ui/Dialog';
import { GradientText } from './decorative/GradientText';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
          
          {/* Image */}
          <img
            src={project.image}
            alt={language === 'en' ? project.title : project.titleEs}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />

          {/* Hover effect */}
          <div className="absolute inset-0 bg-[#F4ED1F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
        </div>

        {/* Content */}
        <div className="p-6 relative">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F4ED1F] transition-colors">
            {language === 'en' ? project.title : project.titleEs}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2">
            {language === 'en' ? project.description : project.descriptionEs}
          </p>

          {/* Read more button */}
          <div className="flex items-center gap-2 text-sm font-medium text-[#F4ED1F]">
            <span className="group-hover:mr-2 transition-all duration-300">
              {language === 'en' ? 'Read more' : 'Leer más'}
            </span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Interactive hover effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4ED1F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </Card>

      {/* Project Details Dialog */}
      <AnimatePresence>
        {showDetails && (
          <Dialog onClose={() => setShowDetails(false)} size="xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden bg-black/90 backdrop-blur-xl">
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

                {/* Content */}
                <div className="p-8">
                  {/* Key Highlights */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-6">
                      {language === 'en' ? 'Key Highlights' : 'Aspectos Destacados'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
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

                  {/* Technical Details */}
                  {project.technicalDetails && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white mb-6">
                        {language === 'en' ? 'Technical Details' : 'Detalles Técnicos'}
                      </h3>
                      <div className="prose prose-invert max-w-none">
                        {language === 'en' 
                          ? project.technicalDetails.content 
                          : project.technicalDetails.contentEs}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}