import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf } from 'lucide-react';
import Header from './components/Header';
import VideoBackground from './components/VideoBackground';
import VoiceChatbot from './components/VoiceChatbot';
import ChatInterface from './components/ChatInterface';
import Instructions from './components/Instructions';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isVoiceMode, setIsVoiceMode] = useState(true);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-900 to-green-800">
      <VideoBackground />
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <AnimatePresence>
            {!isChatOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center text-white mt-16"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Leaf className="text-green-400" size={48} />
                  <h1 className="text-4xl md:text-5xl font-bold">Sowing Advisory Assistant</h1>
                </div>
                <p className="text-xl mb-12 text-green-100">Your intelligent farming companion</p>
                
                <Instructions />
                
                <div className="mt-12 flex flex-col items-center gap-8">
                  <VoiceChatbot 
                    onChatOpen={() => {
                      setIsVoiceMode(true);
                      setIsChatOpen(true);
                    }}
                  />
                  <button
                    onClick={() => {
                      setIsVoiceMode(false);
                      setIsChatOpen(true);
                    }}
                    className="text-lg text-green-100 hover:text-white transition-colors"
                  >
                    Prefer text chat? Click here
                  </button>
                </div>
              </motion.div>
            )}
            
            {isChatOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
              >
                <ChatInterface 
                  onClose={() => setIsChatOpen(false)} 
                  initialMode={isVoiceMode ? 'voice' : 'text'}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;