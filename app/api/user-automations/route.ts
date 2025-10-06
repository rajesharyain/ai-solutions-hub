import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get user's automations
    const userAutomations = await prisma.userAutomation.findMany({
      where: { userId: session.user.id },
      include: {
        automation: true
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ automations: userAutomations })
  } catch (error) {
    console.error('Error fetching user automations:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { automationId, config } = await request.json()

    if (!automationId) {
      return NextResponse.json(
        { error: 'Automation ID is required' },
        { status: 400 }
      )
    }

    // Check if automation exists
    const automation = await prisma.automation.findUnique({
      where: { id: automationId }
    })

    if (!automation) {
      return NextResponse.json(
        { error: 'Automation not found' },
        { status: 404 }
      )
    }

    // Check if user already has this automation
    const existingUserAutomation = await prisma.userAutomation.findUnique({
      where: {
        userId_automationId: {
          userId: session.user.id,
          automationId: automationId
        }
      }
    })

    if (existingUserAutomation) {
      return NextResponse.json(
        { error: 'Automation already added' },
        { status: 400 }
      )
    }

    // Create user automation
    const userAutomation = await prisma.userAutomation.create({
      data: {
        userId: session.user.id,
        automationId: automationId,
        config: config || {},
        status: 'active'
      },
      include: {
        automation: true
      }
    })

    return NextResponse.json({ 
      message: 'Automation added successfully',
      userAutomation 
    })
  } catch (error) {
    console.error('Error adding automation:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { userAutomationId, status, config } = await request.json()

    if (!userAutomationId) {
      return NextResponse.json(
        { error: 'User automation ID is required' },
        { status: 400 }
      )
    }

    // Update user automation
    const userAutomation = await prisma.userAutomation.update({
      where: {
        id: userAutomationId,
        userId: session.user.id // Ensure user owns this automation
      },
      data: {
        ...(status && { status }),
        ...(config && { config }),
        updatedAt: new Date()
      },
      include: {
        automation: true
      }
    })

    return NextResponse.json({ 
      message: 'Automation updated successfully',
      userAutomation 
    })
  } catch (error) {
    console.error('Error updating automation:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const userAutomationId = searchParams.get('id')

    if (!userAutomationId) {
      return NextResponse.json(
        { error: 'User automation ID is required' },
        { status: 400 }
      )
    }

    // Delete user automation
    await prisma.userAutomation.delete({
      where: {
        id: userAutomationId,
        userId: session.user.id // Ensure user owns this automation
      }
    })

    return NextResponse.json({ 
      message: 'Automation removed successfully'
    })
  } catch (error) {
    console.error('Error removing automation:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}



