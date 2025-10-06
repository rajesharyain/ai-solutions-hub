// AI Automation Hub - Configuration System
// This file manages all automations and their metadata

export interface Automation {
  id: string;
  title: string;
  description: string;
  category: 'lead-generation' | 'accounting' | 'marketing' | 'productivity' | 'legal';
  subcategory: string;
  pricing: {
    type: 'free' | 'premium' | 'marketplace';
    price?: number;
    currency?: string;
  };
  features: string[];
  requirements: string[];
  deliveryMethod: 'cloud' | 'downloadable' | 'hybrid';
  estimatedTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  author: {
    name: string;
    type: 'platform' | 'community';
    avatar?: string;
  };
  rating: number;
  downloads: number;
  lastUpdated: string;
  status: 'active' | 'beta' | 'coming-soon';
}

export const automationCategories = {
  'lead-generation': {
    name: 'Lead Generation',
    description: 'Find and convert prospects into customers',
    icon: '🎯',
    color: 'from-blue-500 to-purple-600'
  },
  'accounting': {
    name: 'Accounting',
    description: 'Streamline financial processes and reporting',
    icon: '💰',
    color: 'from-green-500 to-emerald-600'
  },
  'marketing': {
    name: 'Marketing',
    description: 'Automate campaigns and content creation',
    icon: '📈',
    color: 'from-pink-500 to-rose-600'
  },
  'productivity': {
    name: 'Productivity',
    description: 'Boost efficiency and organization',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600'
  },
  'legal': {
    name: 'Legal',
    description: 'Simplify document and case management',
    icon: '⚖️',
    color: 'from-indigo-500 to-blue-600'
  }
};

export const automations: Automation[] = [
  // Lead Generation Automations
  {
    id: 'linkedin-scraper-outreach',
    title: 'LinkedIn Profile Scraper + Personalized Outreach',
    description: 'Automatically scrape LinkedIn profiles based on criteria and generate personalized outreach emails using AI.',
    category: 'lead-generation',
    subcategory: 'Social Media',
    pricing: {
      type: 'premium',
      price: 29,
      currency: 'USD'
    },
    features: [
      'LinkedIn profile scraping with filters',
      'AI-powered personalized email generation',
      'Email sequence automation',
      'Lead scoring and qualification',
      'CRM integration ready'
    ],
    requirements: [
      'LinkedIn Sales Navigator account',
      'Email service provider (Gmail, Outlook)',
      'OpenAI API key'
    ],
    deliveryMethod: 'hybrid',
    estimatedTime: '2-3 hours setup',
    difficulty: 'intermediate',
    tags: ['linkedin', 'email', 'outreach', 'ai', 'scraping'],
    author: {
      name: 'AI Automation Hub',
      type: 'platform'
    },
    rating: 4.8,
    downloads: 1247,
    lastUpdated: '2024-01-15',
    status: 'active'
  },
  {
    id: 'website-lead-tracker',
    title: 'Website Visitor to Lead Conversion Tracker',
    description: 'Track website visitors, identify high-value prospects, and automatically trigger personalized follow-up sequences.',
    category: 'lead-generation',
    subcategory: 'Website Analytics',
    pricing: {
      type: 'free'
    },
    features: [
      'Real-time visitor tracking',
      'Lead scoring based on behavior',
      'Automatic follow-up sequences',
      'Integration with popular CRMs',
      'Custom conversion triggers'
    ],
    requirements: [
      'Website with tracking capability',
      'CRM system (HubSpot, Salesforce)',
      'Email marketing tool'
    ],
    deliveryMethod: 'cloud',
    estimatedTime: '30 minutes setup',
    difficulty: 'beginner',
    tags: ['website', 'tracking', 'conversion', 'crm', 'analytics'],
    author: {
      name: 'AI Automation Hub',
      type: 'platform'
    },
    rating: 4.6,
    downloads: 2156,
    lastUpdated: '2024-01-10',
    status: 'active'
  },

  // Accounting Automations
  {
    id: 'invoice-generator',
    title: 'Invoice Generator from Spreadsheet Data',
    description: 'Automatically generate professional invoices from spreadsheet data with customizable templates and automated sending.',
    category: 'accounting',
    subcategory: 'Invoicing',
    pricing: {
      type: 'free'
    },
    features: [
      'Excel/CSV data import',
      'Customizable invoice templates',
      'Automated invoice generation',
      'PDF export and email sending',
      'Payment tracking integration'
    ],
    requirements: [
      'Spreadsheet with client data',
      'Email service for sending',
      'PDF generation service'
    ],
    deliveryMethod: 'hybrid',
    estimatedTime: '1 hour setup',
    difficulty: 'beginner',
    tags: ['invoicing', 'spreadsheet', 'pdf', 'automation', 'accounting'],
    author: {
      name: 'AI Automation Hub',
      type: 'platform'
    },
    rating: 4.7,
    downloads: 1893,
    lastUpdated: '2024-01-12',
    status: 'active'
  },
  {
    id: 'expense-categorizer',
    title: 'AI-Powered Expense Categorization & Reporting',
    description: 'Automatically categorize expenses using AI and generate comprehensive financial reports for tax and business purposes.',
    category: 'accounting',
    subcategory: 'Expense Management',
    pricing: {
      type: 'premium',
      price: 19,
      currency: 'USD'
    },
    features: [
      'AI-powered expense categorization',
      'Receipt scanning and OCR',
      'Tax-deductible identification',
      'Automated report generation',
      'Integration with accounting software'
    ],
    requirements: [
      'Bank account or credit card statements',
      'Receipt images or PDFs',
      'Accounting software (QuickBooks, Xero)'
    ],
    deliveryMethod: 'cloud',
    estimatedTime: '45 minutes setup',
    difficulty: 'intermediate',
    tags: ['expenses', 'ai', 'categorization', 'tax', 'reporting'],
    author: {
      name: 'AI Automation Hub',
      type: 'platform'
    },
    rating: 4.9,
    downloads: 987,
    lastUpdated: '2024-01-14',
    status: 'active'
  },

  // Marketing Automations
  {
    id: 'social-content-calendar',
    title: 'Social Media Content Calendar Generator',
    description: 'AI-powered social media content calendar that generates posts, schedules them, and tracks performance across platforms.',
    category: 'marketing',
    subcategory: 'Social Media',
    pricing: {
      type: 'premium',
      price: 39,
      currency: 'USD'
    },
    features: [
      'AI-generated content ideas',
      'Multi-platform scheduling',
      'Hashtag optimization',
      'Performance analytics',
      'Brand voice consistency'
    ],
    requirements: [
      'Social media accounts (Instagram, Twitter, LinkedIn)',
      'Content calendar tool',
      'Analytics access'
    ],
    deliveryMethod: 'cloud',
    estimatedTime: '1.5 hours setup',
    difficulty: 'intermediate',
    tags: ['social-media', 'content', 'scheduling', 'ai', 'analytics'],
    author: {
      name: 'AI Automation Hub',
      type: 'platform'
    },
    rating: 4.8,
    downloads: 1456,
    lastUpdated: '2024-01-13',
    status: 'active'
  },
  {
    id: 'email-campaign-analyzer',
    title: 'Email Campaign Performance Analyzer',
    description: 'Comprehensive email campaign analysis with AI insights, A/B testing recommendations, and automated optimization suggestions.',
    category: 'marketing',
    subcategory: 'Email Marketing',
    pricing: {
      type: 'free'
    },
    features: [
      'Campaign performance analysis',
      'AI-powered insights and recommendations',
      'A/B testing suggestions',
      'Subscriber behavior tracking',
      'Automated optimization alerts'
    ],
    requirements: [
      'Email marketing platform (Mailchimp, Constant Contact)',
      'Campaign data access',
      'Analytics integration'
    ],
    deliveryMethod: 'cloud',
    estimatedTime: '20 minutes setup',
    difficulty: 'beginner',
    tags: ['email', 'analytics', 'optimization', 'ai', 'marketing'],
    author: {
      name: 'AI Automation Hub',
      type: 'platform'
    },
    rating: 4.5,
    downloads: 2034,
    lastUpdated: '2024-01-11',
    status: 'active'
  },

  // Productivity Automations
  {
    id: 'meeting-notes-summarizer',
    title: 'AI Meeting Notes Summarizer',
    description: 'Automatically transcribe meetings, extract key points, create action items, and generate comprehensive summaries.',
    category: 'productivity',
    subcategory: 'Meeting Management',
    pricing: {
      type: 'free'
    },
    features: [
      'Real-time meeting transcription',
      'AI-powered key point extraction',
      'Action item identification',
      'Meeting summary generation',
      'Integration with calendar apps'
    ],
    requirements: [
      'Microphone access',
      'Calendar integration',
      'Cloud storage (Google Drive, Dropbox)'
    ],
    deliveryMethod: 'cloud',
    estimatedTime: '15 minutes setup',
    difficulty: 'beginner',
    tags: ['meetings', 'transcription', 'ai', 'summarization', 'productivity'],
    author: {
      name: 'AI Automation Hub',
      type: 'platform'
    },
    rating: 4.7,
    downloads: 3124,
    lastUpdated: '2024-01-16',
    status: 'active'
  },
  {
    id: 'task-prioritizer',
    title: 'Smart Task Prioritization System',
    description: 'AI-powered task prioritization based on deadlines, importance, and workload to optimize productivity and reduce stress.',
    category: 'productivity',
    subcategory: 'Task Management',
    pricing: {
      type: 'premium',
      price: 24,
      currency: 'USD'
    },
    features: [
      'AI-powered task prioritization',
      'Deadline and importance analysis',
      'Workload balancing',
      'Productivity insights',
      'Integration with task management tools'
    ],
    requirements: [
      'Task management tool (Todoist, Asana, Trello)',
      'Calendar integration',
      'Time tracking capability'
    ],
    deliveryMethod: 'hybrid',
    estimatedTime: '1 hour setup',
    difficulty: 'intermediate',
    tags: ['tasks', 'prioritization', 'ai', 'productivity', 'optimization'],
    author: {
      name: 'AI Automation Hub',
      type: 'platform'
    },
    rating: 4.6,
    downloads: 1678,
    lastUpdated: '2024-01-09',
    status: 'active'
  },

  // Legal Automations
  {
    id: 'contract-clause-analyzer',
    title: 'Contract Clause Analyzer',
    description: 'AI-powered contract analysis that identifies key clauses, potential risks, and provides recommendations for improvements.',
    category: 'legal',
    subcategory: 'Contract Analysis',
    pricing: {
      type: 'premium',
      price: 49,
      currency: 'USD'
    },
    features: [
      'Contract clause identification',
      'Risk assessment and flagging',
      'Compliance checking',
      'Recommendation generation',
      'Document comparison tools'
    ],
    requirements: [
      'Contract documents (PDF, Word)',
      'Legal database access',
      'Document management system'
    ],
    deliveryMethod: 'cloud',
    estimatedTime: '2 hours setup',
    difficulty: 'advanced',
    tags: ['contracts', 'analysis', 'legal', 'ai', 'compliance'],
    author: {
      name: 'AI Automation Hub',
      type: 'platform'
    },
    rating: 4.9,
    downloads: 756,
    lastUpdated: '2024-01-08',
    status: 'active'
  },
  {
    id: 'document-template-generator',
    title: 'Legal Document Template Generator',
    description: 'Generate customized legal documents from templates using AI, ensuring compliance and accuracy for common legal needs.',
    category: 'legal',
    subcategory: 'Document Generation',
    pricing: {
      type: 'free'
    },
    features: [
      'AI-powered document generation',
      'Template customization',
      'Compliance checking',
      'Multi-jurisdiction support',
      'Version control and tracking'
    ],
    requirements: [
      'Document templates',
      'Legal knowledge base',
      'PDF generation service'
    ],
    deliveryMethod: 'hybrid',
    estimatedTime: '1.5 hours setup',
    difficulty: 'intermediate',
    tags: ['documents', 'templates', 'legal', 'ai', 'compliance'],
    author: {
      name: 'AI Automation Hub',
      type: 'platform'
    },
    rating: 4.8,
    downloads: 1234,
    lastUpdated: '2024-01-07',
    status: 'active'
  }
];

// Helper functions for automation management
export const getAutomationsByCategory = (category: string) => {
  return automations.filter(automation => automation.category === category);
};

export const getAutomationsByPricing = (pricingType: 'free' | 'premium' | 'marketplace') => {
  return automations.filter(automation => automation.pricing.type === pricingType);
};

export const searchAutomations = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return automations.filter(automation => 
    automation.title.toLowerCase().includes(lowercaseQuery) ||
    automation.description.toLowerCase().includes(lowercaseQuery) ||
    automation.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getFeaturedAutomations = () => {
  return automations
    .filter(automation => automation.rating >= 4.7)
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 6);
};



