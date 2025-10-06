'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { automationCategories, automations } from '@/lib/automations'
import { ArrowRight, Zap, Star, Download, Clock } from 'lucide-react'

export default function CategoriesPage() {
  const categories = Object.entries(automationCategories)

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Browse by <span className="gradient-text">Category</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover AI-powered automations organized by business function. 
            Find the perfect tools for your specific needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map(([key, category], index) => {
            const categoryAutomations = automations.filter(a => a.category === key)
            const totalDownloads = categoryAutomations.reduce((sum, a) => sum + a.downloads, 0)
            const avgRating = categoryAutomations.reduce((sum, a) => sum + a.rating, 0) / categoryAutomations.length

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={`/categories/${key}`}
                  className="group block"
                >
                  <div className="card p-8 h-full hover:scale-105 transition-all duration-300">
                    {/* Category Icon */}
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>

                    {/* Category Info */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                      {category.name}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text">{categoryAutomations.length}</div>
                        <div className="text-sm text-gray-400">Automations</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text">{totalDownloads.toLocaleString()}</div>
                        <div className="text-sm text-gray-400">Downloads</div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-white font-semibold">{avgRating.toFixed(1)}</span>
                        <span className="text-gray-400 ml-1">rating</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                      <span className="font-semibold">Explore {categoryAutomations.length} automations</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Featured Automations */}
        <div className="bg-dark-800/50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="gradient-text">Popular</span> Across All Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automations
              .sort((a, b) => b.downloads - a.downloads)
              .slice(0, 6)
              .map((automation, index) => (
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
                    <div className="card p-6 hover:scale-105 transition-all duration-300">
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
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                        {automation.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {automation.description}
                      </p>

                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 bg-dark-700 text-gray-300 text-xs rounded-full">
                          {automationCategories[automation.category].icon} {automationCategories[automation.category].name}
                        </span>
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
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/automations"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center group"
          >
            <Zap className="w-5 h-5 mr-2" />
            View All Automations
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
