'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getFeaturedAutomations } from '@/lib/automations'
import { Star, Download, Clock, Zap } from 'lucide-react'

export default function FeaturedAutomations() {
  const featuredAutomations = getFeaturedAutomations()

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">Featured</span> Automations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our most popular and highly-rated automations, trusted by thousands of businesses worldwide.
          </p>
        </motion.div>

        {/* Automations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAutomations.map((automation, index) => (
            <motion.div
              key={automation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/automations/${automation.id}`}
                className="group block"
              >
                <div className="card p-6 h-full hover:scale-105 transition-all duration-300">
                  {/* Pricing Badge */}
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
                  <h3 className="text-xl font-bold gradient-text mb-3">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/automations"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center group"
          >
            <Zap className="w-5 h-5 mr-2" />
            Explore All Automations
          </Link>
        </motion.div>
      </div>
    </section>
  )
}



