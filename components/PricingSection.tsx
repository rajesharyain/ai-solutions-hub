'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap } from 'lucide-react'

export default function PricingSection() {
  const plans = [
    {
      name: 'Free',
      price: 0,
      period: 'forever',
      description: 'Perfect for trying out basic automations',
      features: [
        'Access to free automations',
        'Basic customization options',
        'Community support',
        'Up to 100 tasks per month',
        'Standard templates'
      ],
      cta: 'Get Started Free',
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Pro',
      price: 29,
      period: 'month',
      description: 'For growing businesses and professionals',
      features: [
        'All free automations',
        'Premium automation access',
        'Advanced customization',
        'Priority support',
        'Unlimited tasks',
        'API access',
        'Custom integrations',
        'Analytics dashboard'
      ],
      cta: 'Start Pro Trial',
      popular: true,
      color: 'from-primary-500 to-secondary-500'
    },
    {
      name: 'Enterprise',
      price: 99,
      period: 'month',
      description: 'For teams and large organizations',
      features: [
        'Everything in Pro',
        'Custom automation development',
        'Dedicated account manager',
        'White-label options',
        'Advanced security',
        'Team collaboration tools',
        'Custom training',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-secondary-500 to-accent-500'
    }
  ]

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
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. Start free, upgrade anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`card p-8 h-full ${plan.popular ? 'border-primary-500/50' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold gradient-text">${plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:scale-105'
                    : 'bg-white dark:bg-dark-700 text-dark-900 dark:text-white hover:bg-gray-50 dark:hover:bg-dark-600'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-dark-800/50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Per-Automation Pricing Available
            </h3>
            <p className="text-gray-300 mb-6">
              Don't need a full subscription? Purchase individual automations starting at $19. 
              Perfect for one-time projects or specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/automations"
                className="btn-secondary flex items-center group"
              >
                <Zap className="w-4 h-4 mr-2" />
                Browse Individual Automations
              </a>
              <a
                href="/marketplace"
                className="text-primary-400 hover:text-primary-300 font-semibold"
              >
                Learn about Marketplace →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



