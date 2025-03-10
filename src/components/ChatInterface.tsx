import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Send, Mic, MicOff } from 'lucide-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface ChatInterfaceProps {
  onClose: () => void;
}

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I assist you today?", isUser: false, timestamp: new Date() }
  ]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const { transcript, resetTranscript } = useSpeechRecognition();

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { text: "I'm processing your request...", isUser: false, timestamp: new Date() }
      ]);
    }, 1000);
  };

  const handleVoiceInput = () => {
    if (!isListening) {
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true });
    } else {
      SpeechRecognition.stopListening();
      if (transcript) {
        setInput(transcript);
      }
    }
    setIsListening(!isListening);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4"
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-xl font-semibold">Dexian Assistant</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
            >
              <p>{message.text}</p>
              <p className="text-xs opacity-75 mt-1">
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center gap-2">
          <button
            onClick={handleVoiceInput}
            className={`p-2 rounded-full ${
              isListening ? 'bg-red-500' : 'bg-gray-200'
            } text-white`}
          >
            {isListening ? (
              <MicOff className="w-6 h-6" />
            ) : (
              <Mic className="w-6 h-6 text-gray-600" />
            )}
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatInterface;