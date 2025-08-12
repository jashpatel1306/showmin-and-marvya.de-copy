'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function SupportAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: message,
      timestamp: new Date()
    };

    // Add user message to chat
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      // Create audio element and play the response
      if (data.audio) {
        const audio = new Audio(data.audio);
        audio.onplay = () => setIsPlaying(true);
        audio.onended = () => setIsPlaying(false);
        audio.play().catch(error => {
          console.error('Error playing audio:', error);
          setIsPlaying(false);
        });
      }

      // Add assistant's response to chat
      setMessages(prev => [
        ...prev, 
        {
          role: 'assistant' as const,
          content: data.message || "I'm here to help with your questions!",
          timestamp: new Date()
        }
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [
        ...prev, 
        {
          role: 'assistant' as const,
          content: "Sorry, I'm having trouble connecting to the support service. Please try again later.",
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 p-0 flex items-center justify-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white"
          aria-label="Open support chat"
        >
          <MessageSquare className="w-8 h-8" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 w-96 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 flex flex-col z-50">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h3 className="font-semibold text-lg">Support Agent</h3>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-200 focus:outline-none"
          aria-label="Close chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <p>How can I help you today?</p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
        <div className="flex gap-2">
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            disabled={!message.trim() || isLoading}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {isLoading ? '...' : <Send className="w-4 h-4" />}
          </Button>
        </div>
      </form>

      {/* Audio element (hidden) */}
      <audio ref={audioRef} className="hidden" />
    </div>
  );
}
