import React from 'react';
import type { Language, Service } from '../types';
import { IconMap } from '../utils/icons';
import { ServiceModal } from './ServiceModal';

interface Props {
  service: Service;
  language: Language;
  index: number;
}

export function ServiceCard({ service, language, index }: Props) {
  const [showModal, setShowModal] = React.useState(false);
  const Icon = IconMap[service.icon as keyof typeof IconMap];
  
  return (
    <>
      <div
        className="group relative bg-white/5 rounded-xl overflow-hidden cursor-pointer animate-fade-in-up hover:bg-white/10 transition-all duration-300"
        style={{ animationDelay: `${index * 100}ms` }}
        onClick={() => setShowModal(true)}
      >
        <div className="relative p-6 sm:p-8">
          {/* Icon */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F4ED1F] to-yellow-300 opacity-10 rounded-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300" />
            <div className="relative bg-white/5 p-4 rounded-lg">
              <Icon className="w-8 h-8 text-[#F4ED1F] transform transition-all duration-300 group-hover:scale-110" />
            </div>
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F4ED1F] transition-colors duration-300">
            {language === 'en' ? service.title : service.titleEs}
          </h3>
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
            {language === 'en' ? service.description : service.descriptionEs}
          </p>

          {/* Learn more link */}
          <div className="mt-6 flex items-center text-sm font-medium text-[#F4ED1F]">
            <span className="group-hover:mr-2 transition-all duration-300">
              {language === 'en' ? 'Learn more' : 'Más información'}
            </span>
            <svg
              className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        {/* Bottom gradient border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F4ED1F] to-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>

      {/* Modal */}
      {showModal && (
        <ServiceModal
          service={service}
          language={language}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}