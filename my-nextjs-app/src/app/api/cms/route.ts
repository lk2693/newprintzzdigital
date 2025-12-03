import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    message: 'CMS API endpoint - under development',
    status: 'pending'
  });
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ 
    message: 'CMS API POST - under development',
    status: 'pending'
  });
}
