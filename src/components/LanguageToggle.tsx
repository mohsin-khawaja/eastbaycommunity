'use client';

import { useState } from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '' }) => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ur'>('en');

  const toggleLanguage = () => {
    setCurrentLanguage(current => current === 'en' ? 'ur' : 'en');
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <GlobeAltIcon className="w-5 h-5 text-gray-600" />
      <div className="relative">
        <button
          onClick={toggleLanguage}
          className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
        >
          <span className="flex items-center space-x-2">
            <span className={currentLanguage === 'en' ? 'text-gray-900 font-semibold' : 'text-gray-500'}>
              English
            </span>
            <span className="text-gray-400">|</span>
            <span className={currentLanguage === 'ur' ? 'text-gray-900 font-semibold' : 'text-gray-500'}>
              اردو
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle; 