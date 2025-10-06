'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-full text-primary-300 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Automation Platform
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Ready-Made AI</span>
            <br />
            <span className="text-white">Automations</span>
            <br />
            <span className="text-gray-300">for Your Business</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Transform repetitive tasks into automated workflows. Browse, customize, and deploy 
            AI-powered automations for lead generation, accounting, marketing, and more.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              href="/automations"
              className="btn-primary text-lg px-8 py-4 flex items-center group"
            >
              Browse Automations
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="btn-secondary text-lg px-8 py-4 flex items-center group"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">10+</div>
              <div className="text-gray-400">Ready-to-Use Automations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">5</div>
              <div className="text-gray-400">Business Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">15K+</div>
              <div className="text-gray-400">Tasks Automated</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



