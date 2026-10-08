import { useState } from 'react';
import { DashboardHome } from '../dashboard/DashboardHome';
import { useTheme } from '../../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export function Dashboard() {
  const [videoFailed, setVideoFailed] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen flex flex-col text-slate-900 dark:text-slate-100 overflow-x-hidden">
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #0f223d 0%, #123652 50%, #0d5257 100%)',
        }}
      />
      {!videoFailed ? (
        <video
          className="fixed inset-0 z-0 w-full h-full object-cover opacity-50 mix-blend-overlay pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoFailed(true)}
        >
          <source src="/iemrs/bg-video.mp4" type="video/mp4" />
        </video>
      ) : (
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-35 mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: "url('/iemrs/hospital-bg.webp')" }}
        />
      )}
      <div className="fixed inset-0 z-0 bg-black/10 pointer-events-none" />

      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2.5 bg-white/20 dark:bg-slate-800/30 backdrop-blur-md rounded-full text-slate-700 dark:text-slate-300 hover:bg-white/30 dark:hover:bg-slate-800/50 transition-colors border border-white/10"
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow">
          <DashboardHome />
        </main>
        <footer className="text-center py-6 text-xs text-slate-300 dark:text-slate-400 font-medium">
          &copy; {new Date().getFullYear()} Adare General Hospital (Fullanke). All rights reserved. Powered by AGH-HSQD
        </footer>
      </div>
    </div>
  );
}
