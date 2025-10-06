# AI Automation Hub

A ready-made AI automation platform that helps small businesses and professionals instantly use or download pre-built AI automations to remove repetitive manual work.

## 🚀 Features

- **10+ Ready-to-Use Automations** across 5 business categories
- **Hybrid Delivery Model** - Cloud-based and downloadable options
- **Per-Automation Pricing** with marketplace support
- **Modern UI** built with Next.js 14 + TailwindCSS
- **Authentication** with Google/Facebook OAuth
- **Payment Processing** with Stripe integration
- **Modular Design** for easy automation management

## 📋 Categories

- **Lead Generation**: LinkedIn scraping, website visitor tracking
- **Accounting**: Invoice generation, expense categorization
- **Marketing**: Social media content, email campaign analysis
- **Productivity**: Meeting notes, task prioritization
- **Legal**: Contract analysis, document templates

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, TailwindCSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **State Management**: Redux Toolkit
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Google OAuth credentials
- Facebook OAuth credentials
- Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-automation-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your environment variables:
   - Database connection string
   - OAuth provider credentials
   - Stripe API keys
   - NextAuth secret

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js 14 app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── automations/       # Automation pages
│   ├── categories/        # Category pages
│   ├── dashboard/         # User dashboard
│   └── globals.css       # Global styles
├── components/            # Reusable components
├── lib/                   # Utility libraries
│   ├── automations.ts    # Automation configuration
│   ├── auth.ts           # NextAuth configuration
│   └── prisma.ts         # Database client
├── prisma/               # Database schema
└── public/               # Static assets
```

## 🔧 Configuration

### Adding New Automations

1. **Update the automation configuration** in `lib/automations.ts`:
   ```typescript
   {
     id: 'unique-id',
     title: 'Automation Title',
     description: 'Description of what it does',
     category: 'lead-generation', // or other category
     pricing: { type: 'free' }, // or 'premium' with price
     features: ['Feature 1', 'Feature 2'],
     requirements: ['Requirement 1', 'Requirement 2'],
     // ... other properties
   }
   ```

2. **Create the automation page** at `app/automations/[id]/page.tsx`

3. **Add API endpoints** if needed for automation logic

### Customizing Categories

Update the `automationCategories` object in `lib/automations.ts`:

```typescript
export const automationCategories = {
  'your-category': {
    name: 'Your Category',
    description: 'Category description',
    icon: '🎯',
    color: 'from-blue-500 to-purple-600'
  }
}
```

## 💳 Payment Integration

The platform supports:
- **Free automations** - No payment required
- **Premium automations** - One-time purchase via Stripe
- **Marketplace model** - Commission-based sales

### Setting up Stripe

1. Create a Stripe account
2. Get your API keys from the Stripe dashboard
3. Add them to your environment variables
4. Set up webhooks for payment processing

## 🔐 Authentication

Supports multiple authentication methods:
- **Google OAuth** - Most popular choice
- **Facebook OAuth** - Social login option
- **Email/Password** - Traditional signup (optional)

### Setting up OAuth

1. **Google OAuth**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs

2. **Facebook OAuth**:
   - Go to [Facebook Developers](https://developers.facebook.com/)
   - Create a new app
   - Add Facebook Login product

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will handle the rest

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Database Schema

Key models:
- **User** - User accounts and profiles
- **Automation** - Available automations
- **UserAutomation** - User's configured automations
- **Purchase** - Payment records
- **Category** - Automation categories

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Documentation**: Check the `/docs` route in the app
- **Issues**: Create an issue on GitHub
- **Community**: Join our Discord server

## 🔮 Roadmap

- [ ] More automation categories
- [ ] Custom automation builder
- [ ] Team collaboration features
- [ ] Advanced analytics
- [ ] Mobile app
- [ ] API for third-party integrations

---

Built with ❤️ for small businesses and professionals who want to automate their workflows.



