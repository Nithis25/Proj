import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Send, ArrowLeft } from 'lucide-react';
import ChatMessage from '../components/ChatMessage';

const TextChat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean; timestamp: Date }>>([
    { text: "Hello! I'm your farming assistant. How can I help you today?", isBot: true, timestamp: new Date() }
  ]);

  useEffect(() => {
    const initialQuestion = location.state?.question;
    if (initialQuestion) {
      setInput(initialQuestion);
    }
  }, [location.state]);

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, isBot: false, timestamp: new Date() };
      setMessages(prev => [...prev, userMessage]);
      setInput('');

      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "I'm analyzing your question about farming. Let me provide you with detailed information...",
          isBot: true,
          timestamp: new Date()
        }]);
      }, 1000);
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
          <h1 className="ml-4 text-xl font-semibold">Text Chat</h1>
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
        <div className="container mx-auto max-w-2xl">
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your farming question here..."
              className="flex-1 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Chat input"
            />
            <button
              onClick={handleSend}
              className="p-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
              aria-label="Send message"
            >
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextChat;