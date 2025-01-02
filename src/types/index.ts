export type Language = 'en' | 'es';

export type NavItem = {
  title: string;
  titleEs: string;
  href: string;
};

export type Service = {
  icon: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  details: ServiceDetails;
};

export type ServiceDetails = {
  overview: string;
  overviewEs: string;
  features: Feature[];
  benefits: Benefit[];
};

export type Feature = {
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
};

export type Benefit = {
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
};

export type InnovationProject = {
  id: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  image: string;
  highlights: Array<{
    text: string;
    textEs: string;
  }>;
  technicalDetails?: {
    content: string;
    contentEs: string;
  };
};