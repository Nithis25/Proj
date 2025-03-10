import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff } from 'lucide-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface VoiceChatbotProps {
  onChatOpen: () => void;
}

const VoiceChatbot: React.FC<VoiceChatbotProps> = ({ onChatOpen }) => {
  const [isListening, setIsListening] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleVoiceInput = () => {
    if (!isListening) {
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true });
    } else {
      SpeechRecognition.stopListening();
      if (transcript) {
        onChatOpen();
      }
    }
    setIsListening(!isListening);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleVoiceInput}
      className={`p-6 rounded-full ${
        isListening ? 'bg-red-500' : 'bg-blue-500'
      } text-white shadow-lg transition-colors`}
    >
      {isListening ? (
        <MicOff className="w-8 h-8" />
      ) : (
        <Mic className="w-8 h-8" />
      )}
    </motion.button>
  );
};

export default VoiceChatbot;