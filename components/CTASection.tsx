'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Zap, Users, Clock } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main CTA */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="gradient-text">Automate</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already saving hours every week with AI-powered automations. 
              Start your automation journey today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/auth/signup"
                className="btn-primary text-lg px-8 py-4 flex items-center group"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/automations"
                className="btn-secondary text-lg px-8 py-4"
              >
                Browse Automations
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center text-gray-300">
                <Users className="w-5 h-5 mr-2 text-primary-400" />
                <span>15,000+ Active Users</span>
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <Clock className="w-5 h-5 mr-2 text-primary-400" />
                <span>2 Hours Average Setup</span>
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <Zap className="w-5 h-5 mr-2 text-primary-400" />
                <span>50,000+ Tasks Automated</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



