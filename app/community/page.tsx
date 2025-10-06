'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, MessageCircle, Star, TrendingUp, Calendar, Zap, ArrowRight, Heart, Share2 } from 'lucide-react'

export default function CommunityPage() {
  const communityStats = [
    { label: 'Active Members', value: '15,000+', icon: Users },
    { label: 'Discussions', value: '2,500+', icon: MessageCircle },
    { label: 'Solutions', value: '1,200+', icon: Star },
    { label: 'Automations Shared', value: '500+', icon: Zap },
  ]

  const recentPosts = [
    {
      id: 1,
      title: 'How I automated my entire lead generation process',
      author: 'Sarah Chen',
      avatar: 'SC',
      category: 'Lead Generation',
      replies: 24,
      likes: 89,
      time: '2 hours ago',
      trending: true
    },
    {
      id: 2,
      title: 'Best practices for LinkedIn automation without getting banned',
      author: 'Mike Rodriguez',
      avatar: 'MR',
      category: 'Lead Generation',
      replies: 18,
      likes: 67,
      time: '4 hours ago',
      trending: false
    },
    {
      id: 3,
      title: 'Custom invoice automation for e-commerce businesses',
      author: 'Emma Thompson',
      avatar: 'ET',
      category: 'Accounting',
      replies: 12,
      likes: 45,
      time: '6 hours ago',
      trending: false
    },
    {
      id: 4,
      title: 'Social media content calendar that actually works',
      author: 'David Park',
      avatar: 'DP',
      category: 'Marketing',
      replies: 31,
      likes: 112,
      time: '8 hours ago',
      trending: true
    }
  ]

  const upcomingEvents = [
    {
      title: 'Automation Masterclass: Advanced Workflows',
      date: 'Jan 25, 2024',
      time: '2:00 PM EST',
      attendees: 150,
      type: 'Webinar'
    },
    {
      title: 'Community Q&A Session',
      date: 'Jan 28, 2024',
      time: '3:00 PM EST',
      attendees: 89,
      type: 'Live Chat'
    },
    {
      title: 'New Feature Demo: AI-Powered Insights',
      date: 'Feb 1, 2024',
      time: '1:00 PM EST',
      attendees: 203,
      type: 'Product Demo'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="gradient-text">Community</span> Hub
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with fellow automation enthusiasts, share knowledge, and learn from the best practices of successful businesses.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6 text-center"
            >
              <div className="p-3 bg-primary-500/20 rounded-lg w-fit mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary-400" />
              </div>
              <div className="text-2xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Discussions */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                Recent <span className="gradient-text">Discussions</span>
              </h2>
              <Link
                href="/community/discussions"
                className="text-primary-400 hover:text-primary-300 transition-colors flex items-center"
              >
                View All
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {post.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-white hover:gradient-text transition-all duration-300 cursor-pointer">
                          {post.title}
                        </h3>
                        {post.trending && (
                          <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <span>by {post.author}</span>
                        <span>•</span>
                        <span className="px-2 py-1 bg-dark-700 text-gray-300 rounded-full text-xs">
                          {post.category}
                        </span>
                        <span>•</span>
                        <span>{post.time}</span>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.replies} replies
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.likes} likes
                        </div>
                        <button className="flex items-center hover:text-white transition-colors">
                          <Share2 className="w-4 h-4 mr-1" />
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Start Discussion CTA */}
            <div className="mt-8 text-center">
              <Link
                href="/community/new-discussion"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center group"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start a Discussion
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Upcoming Events */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-white mb-6">
                Upcoming <span className="gradient-text">Events</span>
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-white font-semibold text-sm">{event.title}</h4>
                      <span className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date} at {event.time}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {event.attendees} attendees
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link
                href="/community/events"
                className="block text-center mt-4 text-primary-400 hover:text-primary-300 transition-colors"
              >
                View All Events
              </Link>
            </div>

            {/* Quick Actions */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-white mb-6">
                Quick <span className="gradient-text">Actions</span>
              </h3>
              <div className="space-y-3">
                <Link
                  href="/community/ask-question"
                  className="block w-full p-3 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors text-left"
                >
                  <div className="flex items-center">
                    <MessageCircle className="w-5 h-5 text-primary-400 mr-3" />
                    <div>
                      <p className="text-white font-medium">Ask a Question</p>
                      <p className="text-gray-400 text-sm">Get help from the community</p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/community/share-automation"
                  className="block w-full p-3 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors text-left"
                >
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-secondary-400 mr-3" />
                    <div>
                      <p className="text-white font-medium">Share Automation</p>
                      <p className="text-gray-400 text-sm">Show off your workflow</p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/community/feature-request"
                  className="block w-full p-3 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors text-left"
                >
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-accent-400 mr-3" />
                    <div>
                      <p className="text-white font-medium">Request Feature</p>
                      <p className="text-gray-400 text-sm">Suggest new capabilities</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Community <span className="gradient-text">Guidelines</span>
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Be respectful and constructive
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Share knowledge and help others
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Use appropriate categories
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Follow platform terms of service
                </li>
              </ul>
              <Link
                href="/community/guidelines"
                className="block text-center mt-4 text-primary-400 hover:text-primary-300 transition-colors text-sm"
              >
                Read Full Guidelines
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
