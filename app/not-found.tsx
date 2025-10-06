'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, ArrowLeft, Search, Zap } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="text-8xl md:text-9xl font-bold gradient-text mb-4">404</div>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-gray-400">
            Don't worry, even the best automations sometimes need debugging. Let's get you back on track!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/"
            className="btn-primary text-lg px-8 py-4 flex items-center group"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
            <ArrowLeft className="w-5 h-5 ml-2 group-hover:-translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/automations"
            className="btn-secondary text-lg px-8 py-4 flex items-center group"
          >
            <Zap className="w-5 h-5 mr-2" />
            Browse Automations
          </Link>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-dark-800/50 rounded-xl p-8"
        >
          <h2 className="text-xl font-bold text-white mb-6">
            Maybe you were looking for:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/automations"
              className="flex items-center p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors group"
            >
              <Zap className="w-5 h-5 text-primary-400 mr-3 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-white font-medium">Automations</p>
                <p className="text-gray-400 text-sm">Browse our automation library</p>
              </div>
            </Link>
            <Link
              href="/categories"
              className="flex items-center p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors group"
            >
              <Search className="w-5 h-5 text-secondary-400 mr-3 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-white font-medium">Categories</p>
                <p className="text-gray-400 text-sm">Find automations by category</p>
              </div>
            </Link>
            <Link
              href="/pricing"
              className="flex items-center p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors group"
            >
              <div className="w-5 h-5 bg-gradient-to-r from-accent-500 to-green-500 rounded mr-3 group-hover:scale-110 transition-transform"></div>
              <div className="text-left">
                <p className="text-white font-medium">Pricing</p>
                <p className="text-gray-400 text-sm">View our pricing plans</p>
              </div>
            </Link>
            <Link
              href="/docs"
              className="flex items-center p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors group"
            >
              <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded mr-3 group-hover:scale-110 transition-transform"></div>
              <div className="text-left">
                <p className="text-white font-medium">Documentation</p>
                <p className="text-gray-400 text-sm">Get help and guides</p>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            💡 Fun fact: Even AI-powered automations need error handling!
          </p>
        </motion.div>
      </div>
    </div>
  )
}
