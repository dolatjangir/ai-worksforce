import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // 1. Get the URL search parameters
  const { searchParams } = new URL(request.url);
  
  // 2. Extract the specific variables Meta sends
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  // 3. Your secret token from .env.local
  const myVerifyToken = process.env.META_WEBHOOK_VERIFY_TOKEN; 

  // 4. Check if the request is a subscription and the token matches
  if (mode === 'subscribe' && token === myVerifyToken) {
    console.log('WEBHOOK_VERIFIED');
    // Meta requires you to return ONLY the challenge string in plain text
    return new NextResponse(challenge, { status: 200 });
  } else {
    // If the token doesn't match, reject the request
    return new NextResponse('Forbidden', { status: 403 });
  }
}