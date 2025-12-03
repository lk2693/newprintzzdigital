import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // TODO: Implement contact form submission
    console.log('Contact form submission:', body);
    
    return NextResponse.json({ 
      success: true,
      message: 'Nachricht erhalten - wird verarbeitet'
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false,
      message: 'Fehler beim Senden der Nachricht'
    }, { status: 500 });
  }
}
