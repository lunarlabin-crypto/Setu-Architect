import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, message } = await request.json();

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    const apiKey = process.env.CALLMEBOT_API_KEY;
    const phone  = process.env.WHATSAPP_PHONE || '919428873366';

    if (!apiKey) {
      return NextResponse.json(
        { error: 'WhatsApp API not configured. Please add CALLMEBOT_API_KEY to .env.local' },
        { status: 500 }
      );
    }

    const text = name?.trim()
      ? `New enquiry from ${name.trim()}:\n\n${message.trim()}`
      : `New enquiry:\n\n${message.trim()}`;

    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(text)}&apikey=${apiKey}`;

    const response = await fetch(url);
    const body = await response.text();

    if (!response.ok || body.toLowerCase().includes('error')) {
      console.error('CallMeBot error:', body);
      return NextResponse.json({ error: 'Failed to send message. Check your API key.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('WhatsApp send error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
