import { useState } from 'react';
import { TopBar } from './TopBar';
import { DashboardHome } from '../dashboard/DashboardHome';

export function Dashboard() {
  const [videoFailed, setVideoFailed] = useState(false);

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

      <div className="relative z-10 flex flex-col min-h-screen pt-16">
        <TopBar />
        <main className="flex-grow">
          <DashboardHome />
        </main>
        <footer className="text-center py-6 text-xs text-slate-300 dark:text-slate-400 font-medium">
          Powered by AGH-HSQD
        </footer>
      </div>
    </div>
  );
}
