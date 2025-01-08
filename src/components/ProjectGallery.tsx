import React from 'react';
import { Play } from 'lucide-react';
import type { Language } from '../types';
import { Section } from './ui/Section';
import { GradientText } from './decorative/GradientText';
import { Dialog } from './ui/Dialog';
import { projectMedia } from '../data/projectMedia';

interface Props {
  language: Language;
}

export function ProjectGallery({ language }: Props) {
  const [selectedMedia, setSelectedMedia] = React.useState<typeof projectMedia[0] | null>(null);

  return (
    <Section id="gallery" className="relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">
          <GradientText>
            {language === 'en' ? 'Project Gallery' : 'Galería de Proyectos'}
          </GradientText>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {language === 'en'
            ? 'Explore our projects and facilities through our media gallery'
            : 'Explore nuestros proyectos e instalaciones a través de nuestra galería multimedia'}
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectMedia.map((media) => (
          <div
            key={media.id}
            onClick={() => setSelectedMedia(media)}
            className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl bg-gray-900"
          >
            {media.type === 'image' ? (
              <img
                src={media.url}
                alt={language === 'en' ? media.title : media.titleEs}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-white/10 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">
                  {language === 'en' ? media.title : media.titleEs}
                </h3>
                <p className="mt-2 text-gray-300">
                  {language === 'en' ? media.description : media.descriptionEs}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Media Preview Modal */}
      {selectedMedia && (
        <Dialog onClose={() => setSelectedMedia(null)} size="xl">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.url}
                alt={language === 'en' ? selectedMedia.title : selectedMedia.titleEs}
                className="h-full w-full object-cover"
              />
            ) : (
              <iframe
                src={selectedMedia.url}
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-white">
              {language === 'en' ? selectedMedia.title : selectedMedia.titleEs}
            </h3>
            <p className="mt-2 text-gray-300">
              {language === 'en' ? selectedMedia.description : selectedMedia.descriptionEs}
            </p>
          </div>
        </Dialog>
      )}
    </Section>
  );
}
