# AI Automation Hub - Environment Setup

# Create .env.local file with basic configuration
echo "NEXTAUTH_URL=http://localhost:3000" > .env.local
echo "NEXTAUTH_SECRET=your-nextauth-secret-key-change-this-in-production" >> .env.local
echo "NODE_ENV=development" >> .env.local

echo "Environment file created! Edit .env.local to add your API keys."
