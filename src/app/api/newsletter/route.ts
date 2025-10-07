import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('Newsletter subscription:', body);
    
    return NextResponse.json({ 
      success: true,
      message: 'Newsletter-Anmeldung erfolgreich'
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false,
      message: 'Newsletter-Anmeldung fehlgeschlagen'
    }, { status: 500 });
  }
}
