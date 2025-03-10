import React, { useState } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';

interface VoiceInputProps {
  onVoiceInput: (text: string) => void;
}

const VoiceInput: React.FC<VoiceInputProps> = ({ onVoiceInput }) => {
  const [isListening, setIsListening] = useState(false);

  const toggleListening = () => {
    setIsListening(!isListening);
    // Here you would integrate with Web Speech API
    // For now, this is a placeholder
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={toggleListening}
        className={`p-3 rounded-full transition-all ${
          isListening ? 'bg-red-500 animate-pulse' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {isListening ? (
          <MicOff className="text-white" size={24} />
        ) : (
          <Mic className="text-white" size={24} />
        )}
      </button>
      <Volume2 className="text-gray-500" size={24} />
    </div>
  );
};

export default VoiceInput;