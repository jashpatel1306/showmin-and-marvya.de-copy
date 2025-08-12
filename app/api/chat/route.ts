import { NextResponse } from 'next/server';

// Your specific agent ID from the provided URL
const AGENT_ID = 'agent_5701k119czcae708xs564dcgztxb';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    if (!process.env.ELEVENLABS_API_KEY) {
      throw new Error('ELEVENLABS_API_KEY is not set');
    }

    // Call the ElevenLabs API with the specific agent
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${AGENT_ID}/stream`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': process.env.ELEVENLABS_API_KEY,
        },
        body: JSON.stringify({
          text: message,
          model_id: 'eleven_monolingual_v2',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.8,
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`ElevenLabs API error: ${error}`);
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
