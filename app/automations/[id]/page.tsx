'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getAutomationsByCategory, automationCategories } from '@/lib/automations'
import { ArrowLeft, Star, Download, Clock, Zap, CheckCircle, Settings, Cloud, Download as DownloadIcon } from 'lucide-react'

interface AutomationDetailPageProps {
  params: {
    id: string
  }
}

export default function AutomationDetailPage({ params }: AutomationDetailPageProps) {
  const [activeTab, setActiveTab] = useState('overview')
  const [isConfiguring, setIsConfiguring] = useState(false)

  // Find the automation by ID
  const automation = getAutomationsByCategory('lead-generation')
    .concat(getAutomationsByCategory('accounting'))
    .concat(getAutomationsByCategory('marketing'))
    .concat(getAutomationsByCategory('productivity'))
    .concat(getAutomationsByCategory('legal'))
    .find(a => a.id === params.id)

  if (!automation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Automation Not Found</h1>
          <p className="text-gray-300 mb-8">The automation you're looking for doesn't exist.</p>
          <Link href="/automations" className="btn-primary">
            Browse All Automations
          </Link>
        </div>
      </div>
    )
  }

  const category = automationCategories[automation.category]

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Zap },
    { id: 'features', label: 'Features', icon: CheckCircle },
    { id: 'requirements', label: 'Requirements', icon: Settings },
    { id: 'pricing', label: 'Pricing', icon: Star },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/automations"
          className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Automations
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{category.icon}</span>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="inline-flex items-center px-3 py-1 bg-dark-700 text-gray-300 text-sm rounded-full">
                      {category.name}
                    </span>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      automation.pricing.type === 'free' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                    }`}>
                      {automation.pricing.type === 'free' ? 'Free' : `$${automation.pricing.price}`}
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {automation.title}
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {automation.description}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-6 text-gray-300">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="font-semibold">{automation.rating}</span>
                  <span className="ml-1">rating</span>
                </div>
                <div className="flex items-center">
                  <Download className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="font-semibold">{automation.downloads.toLocaleString()}</span>
                  <span className="ml-1">downloads</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-green-400 mr-2" />
                  <span>{automation.estimatedTime}</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-8">
              <div className="border-b border-dark-700">
                <nav className="flex space-x-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-primary-500 text-primary-400'
                          : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'
                      }`}
                    >
                      <tab.icon className="w-4 h-4 mr-2" />
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-dark-800 rounded-xl p-8">
              {activeTab === 'overview' && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Overview</h3>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      This automation streamlines your workflow by automating repetitive tasks and 
                      leveraging AI to enhance productivity. Built with modern technologies and 
                      designed for ease of use.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-dark-700 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Delivery Method</h4>
                        <div className="flex items-center">
                          {automation.deliveryMethod === 'cloud' ? (
                            <Cloud className="w-5 h-5 text-blue-400 mr-2" />
                          ) : automation.deliveryMethod === 'downloadable' ? (
                            <DownloadIcon className="w-5 h-5 text-green-400 mr-2" />
                          ) : (
                            <div className="flex items-center">
                              <Cloud className="w-5 h-5 text-blue-400 mr-1" />
                              <DownloadIcon className="w-5 h-5 text-green-400 mr-2" />
                            </div>
                          )}
                          <span className="text-gray-300 capitalize">{automation.deliveryMethod}</span>
                        </div>
                      </div>
                      
                      <div className="bg-dark-700 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Difficulty Level</h4>
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-2 ${
                            automation.difficulty === 'beginner' ? 'bg-green-400' :
                            automation.difficulty === 'intermediate' ? 'bg-yellow-400' : 'bg-red-400'
                          }`} />
                          <span className="text-gray-300 capitalize">{automation.difficulty}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {automation.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-primary-500/20 text-primary-300 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                  <div className="space-y-4">
                    {automation.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'requirements' && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Requirements</h3>
                  <div className="space-y-4">
                    {automation.requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start">
                        <Settings className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'pricing' && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Pricing Details</h3>
                  <div className="bg-dark-700 rounded-lg p-6">
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold gradient-text mb-2">
                        {automation.pricing.type === 'free' ? 'Free' : `$${automation.pricing.price}`}
                      </div>
                      <p className="text-gray-300">
                        {automation.pricing.type === 'free' 
                          ? 'No cost, no limits' 
                          : `One-time purchase • ${automation.pricing.currency}`
                        }
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-dark-600">
                        <span className="text-gray-300">License Type</span>
                        <span className="text-white font-semibold">
                          {automation.pricing.type === 'free' ? 'Free License' : 'Premium License'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-dark-600">
                        <span className="text-gray-300">Updates</span>
                        <span className="text-white font-semibold">Included</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-dark-600">
                        <span className="text-gray-300">Support</span>
                        <span className="text-white font-semibold">
                          {automation.pricing.type === 'free' ? 'Community' : 'Priority'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-300">Commercial Use</span>
                        <span className="text-white font-semibold">Allowed</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Action Card */}
              <div className="card p-6 mb-6">
                <h3 className="text-xl font-bold text-white mb-4">Get Started</h3>
                
                {automation.pricing.type === 'free' ? (
                  <div className="space-y-4">
                    <button className="w-full btn-primary">
                      <Zap className="w-5 h-5 mr-2" />
                      Use Free
                    </button>
                    <button className="w-full btn-secondary">
                      <Settings className="w-5 h-5 mr-2" />
                      Configure
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <button className="w-full btn-primary">
                      <Zap className="w-5 h-5 mr-2" />
                      Purchase for ${automation.pricing.price}
                    </button>
                    <button className="w-full btn-secondary">
                      Try Demo
                    </button>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-dark-700">
                  <p className="text-sm text-gray-400 mb-4">
                    Last updated: {new Date(automation.lastUpdated).toLocaleDateString()}
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>By {automation.author.name}</span>
                    <span className="mx-2">•</span>
                    <span className="capitalize">{automation.author.type}</span>
                  </div>
                </div>
              </div>

              {/* Related Automations */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Related Automations</h3>
                <div className="space-y-3">
                  {getAutomationsByCategory(automation.category)
                    .filter(a => a.id !== automation.id)
                    .slice(0, 3)
                    .map((related) => (
                      <Link
                        key={related.id}
                        href={`/automations/${related.id}`}
                        className="block p-3 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors"
                      >
                        <h4 className="text-white font-semibold text-sm mb-1">
                          {related.title}
                        </h4>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{related.pricing.type === 'free' ? 'Free' : `$${related.pricing.price}`}</span>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 text-yellow-400 mr-1" />
                            {related.rating}
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



