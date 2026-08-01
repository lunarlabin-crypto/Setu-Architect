import connectMongo from '@/lib/mongodb';
import Project from '@/models/Project';
import { NextResponse } from 'next/server';

export async function DELETE(request, { params }) {
  try {
    await connectMongo();
    
    // Await params as per Next.js 15+ routing requirements
    const { id } = await params; 

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json({ success: false, message: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: {} }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}
