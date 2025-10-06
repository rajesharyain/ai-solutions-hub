'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Book, Zap, Users, MessageCircle, ArrowRight, Search, Download, Settings, Code, Shield } from 'lucide-react'

export default function DocsPage() {
  const docSections = [
    {
      title: 'Getting Started',
      icon: Zap,
      description: 'Learn the basics and set up your first automation',
      articles: [
        { title: 'Quick Start Guide', href: '/docs/quick-start' },
        { title: 'Creating Your First Automation', href: '/docs/first-automation' },
        { title: 'Understanding Categories', href: '/docs/categories' },
        { title: 'Account Setup', href: '/docs/account-setup' }
      ]
    },
    {
      title: 'Automation Management',
      icon: Settings,
      description: 'Configure, monitor, and optimize your automations',
      articles: [
        { title: 'Configuring Automations', href: '/docs/configuration' },
        { title: 'Monitoring Performance', href: '/docs/monitoring' },
        { title: 'Troubleshooting Issues', href: '/docs/troubleshooting' },
        { title: 'Best Practices', href: '/docs/best-practices' }
      ]
    },
    {
      title: 'API Reference',
      icon: Code,
      description: 'Integrate with our platform using our REST API',
      articles: [
        { title: 'Authentication', href: '/docs/api/auth' },
        { title: 'Automation Endpoints', href: '/docs/api/automations' },
        { title: 'Webhooks', href: '/docs/api/webhooks' },
        { title: 'Rate Limits', href: '/docs/api/rate-limits' }
      ]
    },
    {
      title: 'Security & Privacy',
      icon: Shield,
      description: 'Learn about our security measures and data handling',
      articles: [
        { title: 'Data Security', href: '/docs/security' },
        { title: 'Privacy Policy', href: '/docs/privacy' },
        { title: 'GDPR Compliance', href: '/docs/gdpr' },
        { title: 'Data Export', href: '/docs/data-export' }
      ]
    }
  ]

  const popularGuides = [
    {
      title: 'LinkedIn Automation Setup',
      description: 'Complete guide to setting up LinkedIn profile scraping and outreach',
      category: 'Lead Generation',
      readTime: '15 min read',
      difficulty: 'Intermediate'
    },
    {
      title: 'Invoice Generation Workflow',
      description: 'Automate invoice creation from spreadsheet data',
      category: 'Accounting',
      readTime: '10 min read',
      difficulty: 'Beginner'
    },
    {
      title: 'Social Media Content Calendar',
      description: 'Set up automated content scheduling across platforms',
      category: 'Marketing',
      readTime: '20 min read',
      difficulty: 'Advanced'
    },
    {
      title: 'Meeting Notes Automation',
      description: 'Automatically transcribe and summarize meeting notes',
      category: 'Productivity',
      readTime: '12 min read',
      difficulty: 'Beginner'
    }
  ]

  const faqs = [
    {
      question: 'How do I get started with my first automation?',
      answer: 'Start by browsing our automation library, choose one that fits your needs, and follow the setup wizard. Most automations can be configured in under 10 minutes.'
    },
    {
      question: 'Can I customize automations to fit my specific needs?',
      answer: 'Yes! All automations come with customization options. Pro and Enterprise users get access to advanced configuration settings and custom integrations.'
    },
    {
      question: 'What if I need help setting up an automation?',
      answer: 'We provide comprehensive documentation, video tutorials, and support. Pro users get priority support, and Enterprise users have dedicated account managers.'
    },
    {
      question: 'Is my data secure when using automations?',
      answer: 'Absolutely. We use enterprise-grade security measures, encrypt all data in transit and at rest, and are GDPR compliant. Your data never leaves our secure infrastructure.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="gradient-text">Documentation</span> Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Everything you need to know about AI Automation Hub. From quick start guides to advanced API documentation.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Link href="/docs/quick-start" className="group">
            <div className="card p-6 text-center hover:scale-105 transition-all duration-300">
              <Zap className="w-8 h-8 text-primary-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">Quick Start</h3>
              <p className="text-gray-400 text-sm">Get up and running in 5 minutes</p>
            </div>
          </Link>
          
          <Link href="/docs/api" className="group">
            <div className="card p-6 text-center hover:scale-105 transition-all duration-300">
              <Code className="w-8 h-8 text-secondary-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">API Docs</h3>
              <p className="text-gray-400 text-sm">Developer resources and guides</p>
            </div>
          </Link>
          
          <Link href="/docs/troubleshooting" className="group">
            <div className="card p-6 text-center hover:scale-105 transition-all duration-300">
              <Settings className="w-8 h-8 text-accent-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">Troubleshooting</h3>
              <p className="text-gray-400 text-sm">Common issues and solutions</p>
            </div>
          </Link>
          
          <Link href="/community" className="group">
            <div className="card p-6 text-center hover:scale-105 transition-all duration-300">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-400 text-sm">Connect with other users</p>
            </div>
          </Link>
        </div>

        {/* Documentation Sections */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Documentation <span className="gradient-text">Sections</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {docSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-primary-500/20 rounded-lg mr-4">
                    <section.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
                    <p className="text-gray-300">{section.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {section.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <Link
                        href={article.href}
                        className="flex items-center text-gray-300 hover:text-white transition-colors group"
                      >
                        <Book className="w-4 h-4 mr-3 text-gray-400 group-hover:text-primary-400 transition-colors" />
                        <span>{article.title}</span>
                        <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Popular Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Popular <span className="gradient-text">Guides</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm rounded-full">
                    {guide.category}
                  </span>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span>{guide.readTime}</span>
                    <span>•</span>
                    <span>{guide.difficulty}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">{guide.title}</h3>
                <p className="text-gray-300 mb-4">{guide.description}</p>
                
                <Link
                  href={`/docs/guides/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <span className="font-semibold">Read Guide</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need More Help?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/support"
              className="btn-primary text-lg px-8 py-4 flex items-center group"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
            <Link
              href="/community"
              className="btn-secondary text-lg px-8 py-4 flex items-center group"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
