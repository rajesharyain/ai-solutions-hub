'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { automationCategories } from '@/lib/automations'
import { ArrowRight } from 'lucide-react'

export default function CategoriesSection() {
  const categories = Object.entries(automationCategories)

  return (
    <section className="py-20 bg-dark-800/50">
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
            Automations for Every
            <span className="gradient-text"> Business Need</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From lead generation to legal document processing, we have AI-powered automations 
            designed specifically for your industry and workflow.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(([key, category], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                  <h3 className="text-2xl font-bold gradient-text mb-4">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                    <span className="font-semibold">Explore Automations</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
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
            View All Automations
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}



