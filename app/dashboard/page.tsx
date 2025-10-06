'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Zap, Star, Download, Clock, Settings, Play, Pause, Trash2, Edit } from 'lucide-react'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('my-automations')

  // Mock data - in real app, this would come from API
  const myAutomations = [
    {
      id: '1',
      title: 'LinkedIn Profile Scraper + Outreach',
      category: 'Lead Generation',
      status: 'active',
      lastRun: '2024-01-15T10:30:00Z',
      nextRun: '2024-01-16T09:00:00Z',
      runs: 45,
      successRate: 92
    },
    {
      id: '2',
      title: 'Invoice Generator from Spreadsheet',
      category: 'Accounting',
      status: 'paused',
      lastRun: '2024-01-14T15:45:00Z',
      nextRun: null,
      runs: 12,
      successRate: 100
    },
    {
      id: '3',
      title: 'Social Media Content Calendar',
      category: 'Marketing',
      status: 'active',
      lastRun: '2024-01-15T08:00:00Z',
      nextRun: '2024-01-16T08:00:00Z',
      runs: 28,
      successRate: 89
    }
  ]

  const recentActivity = [
    {
      id: '1',
      type: 'automation_run',
      title: 'LinkedIn Scraper completed successfully',
      time: '2 hours ago',
      status: 'success'
    },
    {
      id: '2',
      type: 'automation_paused',
      title: 'Invoice Generator paused by user',
      time: '1 day ago',
      status: 'info'
    },
    {
      id: '3',
      type: 'automation_run',
      title: 'Content Calendar generated 5 posts',
      time: '2 days ago',
      status: 'success'
    }
  ]

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading...</p>
        </div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    router.push('/auth/signin')
    return null
  }

  const tabs = [
    { id: 'my-automations', label: 'My Automations', icon: Zap },
    { id: 'activity', label: 'Recent Activity', icon: Clock },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome back, {session?.user?.name}!
          </h1>
          <p className="text-gray-300">
            Manage your automations and track their performance.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 bg-primary-500/20 rounded-lg">
                <Zap className="w-6 h-6 text-primary-400" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-white">{myAutomations.length}</p>
                <p className="text-gray-400">Active Automations</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <Play className="w-6 h-6 text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-white">
                  {myAutomations.filter(a => a.status === 'active').length}
                </p>
                <p className="text-gray-400">Running</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-white">
                  {myAutomations.reduce((sum, a) => sum + a.runs, 0)}
                </p>
                <p className="text-gray-400">Total Runs</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-500/20 rounded-lg">
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-white">
                  {Math.round(myAutomations.reduce((sum, a) => sum + a.successRate, 0) / myAutomations.length)}%
                </p>
                <p className="text-gray-400">Success Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-dark-700">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-400'
                      : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-dark-800 rounded-xl p-8">
          {activeTab === 'my-automations' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">My Automations</h2>
                <Link href="/automations" className="btn-primary">
                  <Zap className="w-4 h-4 mr-2" />
                  Browse More
                </Link>
              </div>

              <div className="space-y-4">
                {myAutomations.map((automation) => (
                  <div key={automation.id} className="card p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-xl font-semibold text-white mr-3">
                            {automation.title}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            automation.status === 'active'
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {automation.status}
                          </span>
                        </div>
                        <p className="text-gray-400 mb-3">{automation.category}</p>
                        <div className="flex items-center space-x-6 text-sm text-gray-300">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            Last run: {new Date(automation.lastRun).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Download className="w-4 h-4 mr-1" />
                            {automation.runs} runs
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            {automation.successRate}% success
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          {automation.status === 'active' ? (
                            <Pause className="w-4 h-4" />
                          ) : (
                            <Play className="w-4 h-4" />
                          )}
                        </button>
                        <button className="p-2 text-red-400 hover:text-red-300 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center p-4 bg-dark-700 rounded-lg">
                    <div className={`w-3 h-3 rounded-full mr-4 ${
                      activity.status === 'success' ? 'bg-green-400' :
                      activity.status === 'error' ? 'bg-red-400' : 'bg-blue-400'
                    }`} />
                    <div className="flex-1">
                      <p className="text-white font-medium">{activity.title}</p>
                      <p className="text-gray-400 text-sm">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Profile Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        defaultValue={session?.user?.name || ''}
                        className="w-full px-3 py-2 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue={session?.user?.email || ''}
                        className="w-full px-3 py-2 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                      />
                    </div>
                  </div>
                  <button className="mt-4 btn-primary">Save Changes</button>
                </div>

                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Subscription</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Free Plan</p>
                      <p className="text-gray-400 text-sm">3 free automations included</p>
                    </div>
                    <Link href="/pricing" className="btn-secondary">
                      Upgrade Plan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}



