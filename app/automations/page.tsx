'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { automations, automationCategories, getAutomationsByCategory, getAutomationsByPricing, searchAutomations } from '@/lib/automations'
import { Search, Filter, Star, Download, Clock, Zap, ChevronDown } from 'lucide-react'

export default function AutomationsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPricing, setSelectedPricing] = useState('all')
  const [sortBy, setSortBy] = useState('popularity')
  const [showFilters, setShowFilters] = useState(false)

  // Filter and search automations
  const filteredAutomations = useMemo(() => {
    let result = automations

    // Search filter
    if (searchQuery) {
      result = searchAutomations(searchQuery)
    }

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(automation => automation.category === selectedCategory)
    }

    // Pricing filter
    if (selectedPricing !== 'all') {
      result = result.filter(automation => automation.pricing.type === selectedPricing)
    }

    // Sort
    switch (sortBy) {
      case 'popularity':
        result = result.sort((a, b) => b.downloads - a.downloads)
        break
      case 'rating':
        result = result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result = result.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
        break
      case 'price-low':
        result = result.sort((a, b) => (a.pricing.price || 0) - (b.pricing.price || 0))
        break
      case 'price-high':
        result = result.sort((a, b) => (b.pricing.price || 0) - (a.pricing.price || 0))
        break
    }

    return result
  }, [searchQuery, selectedCategory, selectedPricing, sortBy])

  const categories = Object.entries(automationCategories)

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="gradient-text">Automation</span> Marketplace
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover and deploy AI-powered automations designed for your business needs. 
            From lead generation to legal document processing.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search automations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
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

          {/* Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-dark-800 rounded-lg p-6 mb-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-white font-semibold mb-3">Category</label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === 'all'
                          ? 'bg-primary-500 text-white'
                          : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                      }`}
                    >
                      All
                    </button>
                    {categories.map(([key, category]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedCategory(key)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedCategory === key
                            ? 'bg-primary-500 text-white'
                            : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                        }`}
                      >
                        {category.icon} {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pricing Filter */}
                <div>
                  <label className="block text-white font-semibold mb-3">Pricing</label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedPricing('all')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedPricing === 'all'
                          ? 'bg-primary-500 text-white'
                          : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setSelectedPricing('free')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedPricing === 'free'
                          ? 'bg-green-500 text-white'
                          : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                      }`}
                    >
                      Free
                    </button>
                    <button
                      onClick={() => setSelectedPricing('premium')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedPricing === 'premium'
                          ? 'bg-primary-500 text-white'
                          : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                      }`}
                    >
                      Premium
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-300">
            Showing {filteredAutomations.length} of {automations.length} automations
          </p>
        </div>

        {/* Automations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAutomations.map((automation, index) => (
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

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-dark-700 text-gray-300 text-xs rounded-full">
                      {automationCategories[automation.category].icon} {automationCategories[automation.category].name}
                    </span>
                  </div>

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

        {/* No Results */}
        {filteredAutomations.length === 0 && (
          <div className="text-center py-16">
            <Zap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No automations found</h3>
            <p className="text-gray-300 mb-6">
              Try adjusting your search criteria or browse all automations.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
                setSelectedPricing('all')
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}



