import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export function TopBar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-50/70 dark:bg-slate-900/60 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/40 px-6 py-4 z-50">
      <div className="flex items-center justify-end w-full">
        <button
          onClick={toggleTheme}
          className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-colors"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
}
