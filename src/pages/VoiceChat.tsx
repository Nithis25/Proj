import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, MicOff, ArrowLeft, Loader2 } from 'lucide-react';
import ChatMessage from '../components/ChatMessage';

const VoiceChat = () => {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean; timestamp: Date }>>([
    { text: "Hello! I'm your farming assistant. How can I help you today?", isBot: true, timestamp: new Date() }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  const toggleListening = async () => {
    try {
      setIsListening(!isListening);
      if (!isListening) {
        // Start voice recognition
        setIsProcessing(true);
        // Simulated voice processing
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: "I heard you asking about crop rotation. Would you like to know more about that?",
            isBot: true,
            timestamp: new Date()
          }]);
          setIsProcessing(false);
          setIsListening(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Voice recognition error:', error);
      setIsListening(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex items-center">
          <button
            onClick={() => navigate('/')}
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Go back"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="ml-4 text-xl font-semibold">Voice Assistant</h1>
        </div>
      </header>

      <div className="flex-1 container mx-auto px-4 py-6 overflow-y-auto">
        <div className="max-w-2xl mx-auto space-y-4">
          {messages.map((msg, idx) => (
            <ChatMessage key={idx} message={msg.text} isBot={msg.isBot} timestamp={msg.timestamp} />
          ))}
        </div>
      </div>

      <div className="bg-white border-t p-4">
        <div className="container mx-auto max-w-2xl flex justify-center">
          <button
            onClick={toggleListening}
            disabled={isProcessing}
            className={`p-6 rounded-full transition-all ${
              isListening
                ? 'bg-red-500 animate-pulse'
                : isProcessing
                ? 'bg-gray-400'
                : 'bg-green-500 hover:bg-green-600'
            }`}
            aria-label={isListening ? 'Stop listening' : 'Start listening'}
          >
            {isProcessing ? (
              <Loader2 className="animate-spin text-white" size={48} />
            ) : isListening ? (
              <MicOff className="text-white" size={48} />
            ) : (
              <Mic className="text-white" size={48} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceChat;