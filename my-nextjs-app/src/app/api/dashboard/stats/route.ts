import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    users: 0,
    projects: 3,
    messages: 0,
    status: 'active'
  });
}
