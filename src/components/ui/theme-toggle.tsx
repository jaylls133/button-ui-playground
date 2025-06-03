
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 rounded-lg text-white transition-all dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/20 dark:text-white light:bg-gray-900/10 light:hover:bg-gray-900/20 light:border-gray-300 light:text-gray-900"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
    </button>
  );
};

export default ThemeToggle;
