import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Home, HelpCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-green-900/80 to-transparent"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sprout className="text-green-400" size={32} />
            <span className="text-white text-xl font-semibold">Sowing Advisory</span>
          </div>
          
          <nav className="flex items-center gap-6">
            <button className="text-white hover:text-green-400 transition-colors">
              <Home size={24} />
            </button>
            <button className="text-white hover:text-green-400 transition-colors">
              <HelpCircle size={24} />
            </button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;