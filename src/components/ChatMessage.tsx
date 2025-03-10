import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot, timestamp }) => {
  return (
    <div className={`flex items-start gap-4 ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`p-2 rounded-full ${isBot ? 'bg-green-100' : 'bg-blue-100'}`}>
        {isBot ? <Bot size={24} /> : <User size={24} />}
      </div>
      <div className={`flex-1 ${isBot ? 'bg-green-50' : 'bg-blue-50'} p-4 rounded-lg`}>
        <p className="text-gray-800">{message}</p>
        <p className="text-xs text-gray-500 mt-2">
          {timestamp.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;