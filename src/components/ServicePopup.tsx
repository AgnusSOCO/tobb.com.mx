import React from 'react';
import { X } from 'lucide-react';
import type { Language, Service } from '../types';
import { IconMap } from '../utils/icons';
import { Dialog } from './ui/Dialog';
import { Card } from './ui/Card';
import { GradientText } from './decorative/GradientText';

interface Props {
  service: Service;
  language: Language;
  onClose: () => void;
}

export function ServicePopup({ service, language, onClose }: Props) {
  const Icon = IconMap[service.icon as keyof typeof IconMap];

  return (
    <Dialog onClose={onClose}>
      <Card className="relative overflow-hidden bg-black/90">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10 group"
        >
          <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
        </button>

        {/* Header */}
        <div className="relative p-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="relative">
              {/* Icon container with gradient border */}
              <div className="relative p-4 rounded-xl overflow-hidden">
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F4ED1F] to-yellow-300 opacity-20" />
                {/* Icon */}
                <div className="relative z-10">
                  <Icon className="w-10 h-10 text-[#F4ED1F]" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {language === 'en' ? service.title : service.titleEs}
              </h2>
              <p className="text-gray-400">
                {language === 'en' ? service.description : service.descriptionEs}
              </p>
            </div>
          </div>

          {/* Overview */}
          <div className="relative rounded-xl overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F4ED1F]/5 to-transparent" />
            <div className="relative p-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                {language === 'en' ? service.details.overview : service.details.overviewEs}
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="p-8 pt-0">
          <h3 className="text-xl font-semibold mb-6">
            <GradientText>
              {language === 'en' ? 'Key Features' : 'Características Principales'}
            </GradientText>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.details.features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Feature card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
                <div className="relative p-6">
                  <h4 className="font-medium text-white mb-2 group-hover:text-[#F4ED1F] transition-colors">
                    {language === 'en' ? feature.title : feature.titleEs}
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {language === 'en' ? feature.description : feature.descriptionEs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="p-8 pt-0">
          <h3 className="text-xl font-semibold mb-6">
            <GradientText>
              {language === 'en' ? 'Benefits' : 'Beneficios'}
            </GradientText>
          </h3>
          <div className="space-y-4">
            {service.details.benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative rounded-lg overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Benefit card background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent" />
                <div className="relative p-4 flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#F4ED1F] group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-medium text-white mb-1 group-hover:text-[#F4ED1F] transition-colors">
                      {language === 'en' ? benefit.title : benefit.titleEs}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {language === 'en' ? benefit.description : benefit.descriptionEs}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Dialog>
  );
}