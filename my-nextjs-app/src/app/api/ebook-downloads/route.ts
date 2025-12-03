import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('E-Book download request:', body);
    
    return NextResponse.json({ 
      success: true,
      downloadUrl: '/ebooks/sample.pdf',
      message: 'Download bereit'
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false,
      message: 'Download-Fehler'
    }, { status: 500 });
  }
}
