import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!
      )
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session
        
        // Create purchase record
        await prisma.purchase.create({
          data: {
            userId: session.metadata!.userId,
            automationId: session.metadata!.automationId,
            amount: session.amount_total! / 100, // Convert from cents
            currency: session.currency!,
            status: 'completed',
            paymentMethod: 'stripe',
            transactionId: session.id,
          }
        })

        // Add automation to user's automations
        await prisma.userAutomation.create({
          data: {
            userId: session.metadata!.userId,
            automationId: session.metadata!.automationId,
            status: 'active',
            config: {}
          }
        })

        break

      case 'payment_intent.payment_failed':
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        
        // Update purchase status to failed
        await prisma.purchase.updateMany({
          where: { transactionId: paymentIntent.id },
          data: { status: 'failed' }
        })

        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}



