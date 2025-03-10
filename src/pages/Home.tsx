import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, MessageSquare, Leaf } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Leaf className="text-green-600" size={48} />
          <h1 className="text-4xl font-bold text-green-800">Sowing Chatbot Assistant</h1>
        </div>
        <p className="text-gray-600 text-lg">Your intelligent farming companion</p>
      </header>

      <div className="max-w-md mx-auto space-y-8">
        <button
          onClick={() => navigate('/voice-chat')}
          className="w-full p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center gap-4"
          aria-label="Start voice chat"
        >
          <Mic className="text-green-600" size={64} />
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">Voice Assistant</h2>
            <p className="text-gray-600">Speak your farming questions</p>
          </div>
        </button>

        <button
          onClick={() => navigate('/text-chat')}
          className="w-full p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center gap-4"
          aria-label="Start text chat"
        >
          <MessageSquare className="text-blue-600" size={64} />
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">Text Chat</h2>
            <p className="text-gray-600">Type your farming questions</p>
          </div>
        </button>
      </div>

      <div className="mt-12 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-center mb-6">Example Questions</h3>
        <div className="grid gap-4">
          {[
            "How to improve soil condition?",
            "What is the best time to plant okra in north india?",
            "What are the most effective methods for pest control on cabbage?",
            "How to prepare land for wheat cultivation?"
          ].map((question, index) => (
            <button
              key={index}
              onClick={() => navigate('/text-chat', { state: { question } })}
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-left text-gray-800 hover:bg-gray-50"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;