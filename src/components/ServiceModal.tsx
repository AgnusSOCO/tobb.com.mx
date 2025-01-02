import React from 'react';
import type { Language, Service } from '../types';
import { Modal } from './ui/Modal/Modal';
import { GradientText } from './decorative/GradientText';
import { IconMap } from '../utils/icons';
import { Badge } from './ui/Badge';

interface Props {
  service: Service;
  language: Language;
  onClose: () => void;
}

export function ServiceModal({ service, language, onClose }: Props) {
  const Icon = IconMap[service.icon as keyof typeof IconMap];

  return (
    <Modal
      onClose={onClose}
      size="lg"
      title={
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-[#F4ED1F]/10">
            <Icon className="w-8 h-8 text-[#F4ED1F]" />
          </div>
          <div>
            <GradientText className="text-2xl sm:text-3xl font-bold">
              {language === 'en' ? service.title : service.titleEs}
            </GradientText>
          </div>
        </div>
      }
    >
      <div className="space-y-8">
        {/* Overview */}
        <div className="relative rounded-xl overflow-hidden bg-white/5 p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F4ED1F]/5 to-transparent" />
          <div className="relative">
            <p className="text-lg text-gray-300 leading-relaxed">
              {language === 'en' ? service.details.overview : service.details.overviewEs}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white">
            {language === 'en' ? 'Key Features' : 'Características Principales'}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.details.features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden bg-white/5 p-6 hover:bg-white/10 transition-colors"
              >
                <div className="space-y-2">
                  <Badge variant="default" size="sm">
                    {language === 'en' ? feature.title : feature.titleEs}
                  </Badge>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {language === 'en' ? feature.description : feature.descriptionEs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white">
            {language === 'en' ? 'Benefits' : 'Beneficios'}
          </h3>
          <div className="grid gap-4">
            {service.details.benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="p-4 sm:p-6 flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#F4ED1F] group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-medium text-white group-hover:text-[#F4ED1F] transition-colors">
                      {language === 'en' ? benefit.title : benefit.titleEs}
                    </h4>
                    <p className="mt-1 text-gray-400 group-hover:text-gray-300 transition-colors">
                      {language === 'en' ? benefit.description : benefit.descriptionEs}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}