import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import CategoriesSection from '@/components/CategoriesSection'
import FeaturedAutomations from '@/components/FeaturedAutomations'
import HowItWorks from '@/components/HowItWorks'
import PricingSection from '@/components/PricingSection'
import CTASection from '@/components/CTASection'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI Automation Hub - Ready-Made AI Automations for Small Business',
  description: 'Discover and deploy AI-powered automations for lead generation, accounting, marketing, productivity, and legal tasks. Built for small businesses, freelancers, and consultants.',
  keywords: 'AI automation, small business tools, lead generation, accounting automation, marketing tools, productivity, legal automation',
  openGraph: {
    title: 'AI Automation Hub - Ready-Made AI Automations',
    description: 'Transform your business with AI-powered automations designed for small businesses and professionals.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <Header />
      
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedAutomations />
        <HowItWorks />
        <PricingSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  )
}



