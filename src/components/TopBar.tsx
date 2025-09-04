import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export function TopBar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 sticky top-0 z-50">
      <div className="grid grid-cols-3 items-center">
        {/* Left Section (empty) */}
        <div></div>

        {/* Center Section */}
        <div className="flex items-center justify-center gap-3">
            <div className="text-center">
              <h1 className="text-lg font-semibold text-gray-800 dark:text-white">ADARE GENERAL HOSPITAL</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">IHSMS</p>
            </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 justify-end">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}