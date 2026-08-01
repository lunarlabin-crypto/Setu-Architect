import connectMongo from '@/lib/mongodb';
import Project from '@/models/Project';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';

export async function GET() {
  try {
    await connectMongo();
    // Sort by newest first
    const projects = await Project.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    await connectMongo();
    const body = await request.json();
    const project = await Project.create(body);
    return NextResponse.json({ success: true, data: project }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}
