
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 rounded-lg text-white transition-all"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
    </button>
  );
};

export default ThemeToggle;
