import React from 'react';
import { Plane as Plant, Sprout, Sun, Cloud, Droplets } from 'lucide-react';

const Instructions: React.FC = () => {
  const examples = [
    "What crops are suitable for this season?",
    "When is the best time to sow wheat?",
    "How much water is needed for rice cultivation?",
    "Which fertilizers work best for tomatoes?",
    "What are the signs of pest infestation?"
  ];

  return (
    <div className="max-w-4xl mx-auto mt-12 bg-white/10 backdrop-blur-md rounded-xl p-6 text-left">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-300">How to Use the Assistant</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="flex items-start gap-3">
          <Plant className="text-green-400 shrink-0" size={24} />
          <div>
            <h3 className="font-semibold text-white">Select Your Crop</h3>
            <p className="text-green-100 text-sm">Tell us what you're growing</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Sprout className="text-green-400 shrink-0" size={24} />
          <div>
            <h3 className="font-semibold text-white">Growth Stage</h3>
            <p className="text-green-100 text-sm">Specify the current growth phase</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Sun className="text-yellow-400 shrink-0" size={24} />
          <div>
            <h3 className="font-semibold text-white">Weather Conditions</h3>
            <p className="text-green-100 text-sm">Share your local climate</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Cloud className="text-blue-400 shrink-0" size={24} />
          <div>
            <h3 className="font-semibold text-white">Ask Questions</h3>
            <p className="text-green-100 text-sm">Get expert farming advice</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-white flex items-center gap-2 mb-4">
          <Droplets className="text-blue-400" size={20} />
          Example Questions
        </h3>
        <div className="grid gap-3">
          {examples.map((question, index) => (
            <button
              key={index}
              className="text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg text-green-100 transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructions;