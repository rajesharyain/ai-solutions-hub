'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, User, Mail, Calendar, Shield, Bell, CreditCard, Download } from 'lucide-react'

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const [activeTab, setActiveTab] = useState('profile')

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'billing', label: 'Billing', icon: CreditCard },
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
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-gray-300 mb-8">Please sign in to access your profile.</p>
          <Link href="/auth/signin" className="btn-primary">
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/dashboard"
          className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Profile Settings
          </h1>
          <p className="text-gray-300">
            Manage your account settings and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{session?.user?.name}</h3>
                <p className="text-gray-400">{session?.user?.email}</p>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary-500/20 text-primary-400'
                        : 'text-gray-300 hover:text-white hover:bg-dark-700'
                    }`}
                  >
                    <tab.icon className="w-4 h-4 mr-3" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="card p-8">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Profile Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
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

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about yourself..."
                      className="w-full px-3 py-2 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    />
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                    <input
                      type="text"
                      placeholder="Your company name"
                      className="w-full px-3 py-2 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    />
                  </div>

                  <button className="btn-primary">Save Changes</button>
                </div>
              )}

              {activeTab === 'security' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Security Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="p-6 bg-dark-700 rounded-lg">
                      <h3 className="text-lg font-semibold text-white mb-3">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Current Password</label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 bg-dark-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 bg-dark-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Confirm New Password</label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 bg-dark-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                          />
                        </div>
                        <button className="btn-primary">Update Password</button>
                      </div>
                    </div>

                    <div className="p-6 bg-dark-700 rounded-lg">
                      <h3 className="text-lg font-semibold text-white mb-3">Two-Factor Authentication</h3>
                      <p className="text-gray-300 mb-4">Add an extra layer of security to your account.</p>
                      <button className="btn-secondary">Enable 2FA</button>
                    </div>

                    <div className="p-6 bg-dark-700 rounded-lg">
                      <h3 className="text-lg font-semibold text-white mb-3">Active Sessions</h3>
                      <p className="text-gray-300 mb-4">Manage your active login sessions.</p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-dark-800 rounded-lg">
                          <div>
                            <p className="text-white font-medium">Current Session</p>
                            <p className="text-gray-400 text-sm">Windows • Chrome • Local IP</p>
                          </div>
                          <span className="text-green-400 text-sm">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Notification Preferences</h2>
                  
                  <div className="space-y-6">
                    <div className="p-6 bg-dark-700 rounded-lg">
                      <h3 className="text-lg font-semibold text-white mb-4">Email Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-medium">Automation Updates</p>
                            <p className="text-gray-400 text-sm">Get notified when your automations complete or fail</p>
                          </div>
                          <input type="checkbox" className="w-4 h-4 text-primary-600" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-medium">Product Updates</p>
                            <p className="text-gray-400 text-sm">Receive updates about new features and improvements</p>
                          </div>
                          <input type="checkbox" className="w-4 h-4 text-primary-600" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-medium">Marketing Emails</p>
                            <p className="text-gray-400 text-sm">Tips, best practices, and promotional content</p>
                          </div>
                          <input type="checkbox" className="w-4 h-4 text-primary-600" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-dark-700 rounded-lg">
                      <h3 className="text-lg font-semibold text-white mb-4">Push Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-medium">Browser Notifications</p>
                            <p className="text-gray-400 text-sm">Show notifications in your browser</p>
                          </div>
                          <input type="checkbox" className="w-4 h-4 text-primary-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="btn-primary mt-6">Save Preferences</button>
                </div>
              )}

              {activeTab === 'billing' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Billing & Subscription</h2>
                  
                  <div className="space-y-6">
                    <div className="p-6 bg-dark-700 rounded-lg">
                      <h3 className="text-lg font-semibold text-white mb-4">Current Plan</h3>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-white font-medium">Free Plan</p>
                          <p className="text-gray-400 text-sm">3 active automations included</p>
                        </div>
                        <span className="text-2xl font-bold gradient-text">$0/month</span>
                      </div>
                      <Link href="/pricing" className="btn-secondary">
                        Upgrade Plan
                      </Link>
                    </div>

                    <div className="p-6 bg-dark-700 rounded-lg">
                      <h3 className="text-lg font-semibold text-white mb-4">Payment Method</h3>
                      <p className="text-gray-400 mb-4">No payment method on file</p>
                      <button className="btn-secondary">Add Payment Method</button>
                    </div>

                    <div className="p-6 bg-dark-700 rounded-lg">
                      <h3 className="text-lg font-semibold text-white mb-4">Billing History</h3>
                      <p className="text-gray-400 mb-4">No billing history available</p>
                      <button className="btn-secondary flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download Invoices
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
