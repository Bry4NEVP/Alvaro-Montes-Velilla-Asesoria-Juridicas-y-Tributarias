export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  businessUnit: 'legal' | 'tax' | 'accounting' | 'insurance';
  iconName: string;
  benefits: string[];
  deliverables: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  businessUnit: 'legal' | 'tax' | 'accounting' | 'insurance' | 'management';
  credentials: string[];
  email: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  tags: string[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  fileType: string;
  size: string;
  downloadCount: number;
  category: string;
  previewPages: string[];
  url: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'legal' | 'tax' | 'accounting' | 'insurance' | 'general';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}
