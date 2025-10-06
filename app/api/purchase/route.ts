import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { automationId, successUrl, cancelUrl } = await request.json()

    if (!automationId) {
      return NextResponse.json(
        { error: 'Automation ID is required' },
        { status: 400 }
      )
    }

    // Get automation details
    const automation = await prisma.automation.findUnique({
      where: { id: automationId }
    })

    if (!automation) {
      return NextResponse.json(
        { error: 'Automation not found' },
        { status: 404 }
      )
    }

    if (automation.pricingType === 'free') {
      return NextResponse.json(
        { error: 'This automation is free' },
        { status: 400 }
      )
    }

    // Check if user already purchased this automation
    const existingPurchase = await prisma.purchase.findFirst({
      where: {
        userId: session.user.id,
        automationId: automationId,
        status: 'completed'
      }
    })

    if (existingPurchase) {
      return NextResponse.json(
        { error: 'Automation already purchased' },
        { status: 400 }
      )
    }

    // Create Stripe checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: automation.currency || 'usd',
            product_data: {
              name: automation.title,
              description: automation.description,
            },
            unit_amount: Math.round((automation.price || 0) * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl || `${process.env.NEXTAUTH_URL}/dashboard?success=true`,
      cancel_url: cancelUrl || `${process.env.NEXTAUTH_URL}/automations/${automationId}`,
      customer_email: session.user.email || undefined,
      metadata: {
        userId: session.user.id,
        automationId: automationId,
      },
    })

    return NextResponse.json({ 
      checkoutUrl: checkoutSession.url 
    })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get user's purchases
    const purchases = await prisma.purchase.findMany({
      where: { userId: session.user.id },
      include: {
        automation: true
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ purchases })
  } catch (error) {
    console.error('Error fetching purchases:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}



