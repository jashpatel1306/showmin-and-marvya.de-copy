// Chatbot functionality temporarily disabled
/*
import { NextResponse } from 'next/server';

// Your agent ID from the URL
const AGENT_ID = 'agent_5701k119czcae708xs564dcgztxb';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    if (!process.env.ELEVENLABS_API_KEY) {
      throw new Error('ELEVENLABS_API_KEY is not set');
    }

    console.log('Sending request to ElevenLabs API...');
    console.log('Using API Key:', process.env.ELEVENLABS_API_KEY ? '***' + process.env.ELEVENLABS_API_KEY.slice(-4) : 'Not set');
    
    // Using the agent-based chat endpoint
    const apiUrl = 'https://api.elevenlabs.io/v1/chat/completions';
    const requestBody = {
      agent_id: AGENT_ID,
      messages: [   
        {
          role: 'user',
          content: message
        }
      ],
      model: 'eleven_monolingual_v2',
      stream: false,
    };

    console.log('Request URL:', apiUrl);
    console.log('Request Body:', JSON.stringify(requestBody, null, 2));

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': process.env.ELEVENLABS_API_KEY || '',
        'Accept': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    console.log('Response Status:', response.status);
    console.log('Response Headers:', Object.fromEntries(response.headers.entries()));
    
    const responseText = await response.text();
    console.log('Response Body:', responseText);

    if (!response.ok) {
      throw new Error(`ElevenLabs API error (${response.status}): ${responseText}`);
    }

    // Get the audio stream as ArrayBuffer
    const audioArrayBuffer = await response.arrayBuffer();
    const audioBase64 = Buffer.from(audioArrayBuffer).toString('base64');

    return NextResponse.json({ 
      audio: `data:audio/mpeg;base64,${audioBase64}`,
      message: 'Audio generated successfully'
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process your request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
*/
