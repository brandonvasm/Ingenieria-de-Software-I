import { NextRequest, NextResponse } from 'next/server';
import PostgresPostRepository from '@/app/utils/postgres-post-repository';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await request.json();
    const repository = new PostgresPostRepository();
    const updatedPost = await repository.update(Number(params.id), data);
    return NextResponse.json(
        updatedPost, 
        { status: 200 });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
        {message: 'Error updating post' }, 
        { status: 500 });
  }
}

