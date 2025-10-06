'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getAutomationsByCategory, automationCategories } from '@/lib/automations'
import { ArrowLeft, Star, Download, Clock, Zap } from 'lucide-react'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const [sortBy, setSortBy] = useState('popularity')

  const categoryKey = params.category as keyof typeof automationCategories
  const category = automationCategories[categoryKey]
  
  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
          <p className="text-gray-300 mb-8">The category you're looking for doesn't exist.</p>
          <Link href="/automations" className="btn-primary">
            Browse All Automations
          </Link>
        </div>
      </div>
    )
  }

  const automations = getAutomationsByCategory(categoryKey)
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.downloads - a.downloads
        case 'rating':
          return b.rating - a.rating
        case 'newest':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
        case 'price-low':
          return (a.pricing.price || 0) - (b.pricing.price || 0)
        case 'price-high':
          return (b.pricing.price || 0) - (a.pricing.price || 0)
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/automations"
          className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Automations
        </Link>

        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">{category.icon}</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="gradient-text">{category.name}</span> Automations
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {category.description}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">{automations.length}</div>
              <div className="text-gray-400">Available Automations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                {automations.reduce((sum, a) => sum + a.downloads, 0).toLocaleString()}
              </div>
              <div className="text-gray-400">Total Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                {(automations.reduce((sum, a) => sum + a.rating, 0) / automations.length).toFixed(1)}
              </div>
              <div className="text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">
            {automations.length} Automations Available
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300 text-sm">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-dark-800 border border-dark-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-primary-500"
            >
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Automations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automations.map((automation, index) => (
            <motion.div
              key={automation.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/automations/${automation.id}`}
                className="group block"
              >
                <div className="card p-6 h-full hover:scale-105 transition-all duration-300">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      automation.pricing.type === 'free' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                    }`}>
                      {automation.pricing.type === 'free' ? 'Free' : `$${automation.pricing.price}`}
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-semibold">{automation.rating}</span>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {automation.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {automation.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {automation.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {automation.downloads.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {automation.estimatedTime}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-dark-800/50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Something Different?
            </h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Browse other categories or request a custom automation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/automations"
                className="btn-primary flex items-center group"
              >
                <Zap className="w-4 h-4 mr-2" />
                Browse All Categories
              </Link>
              <Link
                href="/request"
                className="btn-secondary"
              >
                Request Custom Automation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



