'use client'

import { motion } from 'framer-motion'
import { Search, Zap, Download, Cloud, Settings } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Browse & Discover',
      description: 'Explore our marketplace of AI-powered automations across different business categories.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Settings,
      title: 'Customize & Configure',
      description: 'Tailor automations to your specific needs with our intuitive configuration tools.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Cloud,
      title: 'Deploy & Run',
      description: 'Choose cloud-based execution or download tools for local use - whatever works best.',
      color: 'from-pink-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Automate & Scale',
      description: 'Watch your repetitive tasks transform into efficient, AI-powered workflows.',
      color: 'from-red-500 to-orange-600'
    }
  ]

  return (
    <section className="py-20 bg-dark-800/30">
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
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get started with AI automation in just 4 simple steps. No coding required.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Step Number */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-4`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>

              {/* Step Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Connection Lines */}
        <div className="hidden lg:block mt-8">
          <div className="flex justify-center">
            <div className="flex items-center space-x-8">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Ready to transform your business with AI automation?
          </p>
          <a
            href="/automations"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center group"
          >
            Get Started Now
            <Zap className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}



