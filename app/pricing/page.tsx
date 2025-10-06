'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Star, Zap, ArrowRight, Users, Clock, Shield } from 'lucide-react'

export default function PricingPage() {
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
        'Standard templates',
        'Basic analytics'
      ],
      cta: 'Get Started Free',
      popular: false,
      color: 'from-gray-500 to-gray-600',
      limitations: [
        'Limited to 3 active automations',
        'Basic support only',
        'No API access'
      ]
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
        'Analytics dashboard',
        'Team collaboration',
        'Advanced scheduling'
      ],
      cta: 'Start Pro Trial',
      popular: true,
      color: 'from-primary-500 to-secondary-500',
      limitations: []
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
        'SLA guarantee',
        'On-premise deployment',
        'Custom integrations'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-secondary-500 to-accent-500',
      limitations: []
    }
  ]

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your data is preserved for 30 days after cancellation. You can export all your automation configurations.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. No questions asked.'
    },
    {
      question: 'Can I use automations commercially?',
      answer: 'Yes, all our automations can be used for commercial purposes. Enterprise plans include additional commercial rights.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Simple <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. Start free, upgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Limitations:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-400 mr-2">•</span>
                          <span className="text-gray-400 text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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

        {/* Per-Automation Pricing */}
        <div className="bg-dark-800/50 rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Per-Automation Pricing
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Don't need a full subscription? Purchase individual automations starting at $19. 
              Perfect for one-time projects or specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-dark-700 rounded-lg">
              <div className="text-3xl font-bold gradient-text mb-2">$19</div>
              <div className="text-gray-300 mb-4">Basic Automations</div>
              <div className="text-sm text-gray-400">Simple tools for common tasks</div>
            </div>
            <div className="text-center p-6 bg-dark-700 rounded-lg">
              <div className="text-3xl font-bold gradient-text mb-2">$39</div>
              <div className="text-gray-300 mb-4">Advanced Automations</div>
              <div className="text-sm text-gray-400">Complex workflows with AI integration</div>
            </div>
            <div className="text-center p-6 bg-dark-700 rounded-lg">
              <div className="text-3xl font-bold gradient-text mb-2">$99</div>
              <div className="text-gray-300 mb-4">Enterprise Automations</div>
              <div className="text-sm text-gray-400">Custom solutions for large organizations</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/automations"
              className="btn-secondary flex items-center group mx-auto w-fit"
            >
              <Zap className="w-4 h-4 mr-2" />
              Browse Individual Automations
            </Link>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Feature <span className="gradient-text">Comparison</span>
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-dark-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-dark-700">
                  <th className="text-left p-4 text-white font-semibold">Features</th>
                  <th className="text-center p-4 text-white font-semibold">Free</th>
                  <th className="text-center p-4 text-white font-semibold">Pro</th>
                  <th className="text-center p-4 text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-dark-700">
                  <td className="p-4 text-gray-300">Active Automations</td>
                  <td className="p-4 text-center text-gray-300">3</td>
                  <td className="p-4 text-center text-gray-300">Unlimited</td>
                  <td className="p-4 text-center text-gray-300">Unlimited</td>
                </tr>
                <tr className="border-b border-dark-700">
                  <td className="p-4 text-gray-300">Tasks per Month</td>
                  <td className="p-4 text-center text-gray-300">100</td>
                  <td className="p-4 text-center text-gray-300">Unlimited</td>
                  <td className="p-4 text-center text-gray-300">Unlimited</td>
                </tr>
                <tr className="border-b border-dark-700">
                  <td className="p-4 text-gray-300">Support</td>
                  <td className="p-4 text-center text-gray-300">Community</td>
                  <td className="p-4 text-center text-gray-300">Priority</td>
                  <td className="p-4 text-center text-gray-300">Dedicated</td>
                </tr>
                <tr className="border-b border-dark-700">
                  <td className="p-4 text-gray-300">API Access</td>
                  <td className="p-4 text-center text-red-400">✗</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                </tr>
                <tr className="border-b border-dark-700">
                  <td className="p-4 text-gray-300">Custom Integrations</td>
                  <td className="p-4 text-center text-red-400">✗</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">SLA Guarantee</td>
                  <td className="p-4 text-center text-red-400">✗</td>
                  <td className="p-4 text-center text-red-400">✗</td>
                  <td className="p-4 text-center text-green-400">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already saving hours every week with AI-powered automations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          </div>
        </div>
      </div>
    </div>
  )
}
