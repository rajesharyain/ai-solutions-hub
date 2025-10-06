import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Automation Hub - Ready-Made AI Automations for Small Business',
  description: 'Discover and deploy AI-powered automations designed for your business needs. From lead generation to legal document processing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
