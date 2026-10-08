import { useState } from 'react';
import { ModuleCard } from './ModuleCard';
import { ModuleSubPage } from './ModuleSubPage';
import { hospitalApps } from '../../config/apps';
import { HospitalApp } from '../../types';

export function DashboardHome() {
  const [selectedApp, setSelectedApp] = useState<HospitalApp | null>(null);
  const allApps: HospitalApp[] = Object.values(hospitalApps);

  if (selectedApp) {
    return (
      <ModuleSubPage
        app={selectedApp}
        onBack={() => setSelectedApp(null)}
      />
    );
  }

  return (
    <div className="pt-10 sm:pt-14 lg:pt-16 px-3 pb-3 sm:px-5 sm:pb-5 lg:px-6 lg:pb-6 max-w-6xl mx-auto">
      <div className="text-center mb-4 sm:mb-6 lg:mb-8">
        <div className="flex justify-center mb-3 sm:mb-4 lg:mb-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white flex items-center justify-center p-1 border-2 border-white ring-4 ring-white/15 shadow-[0_0_25px_rgba(255,255,255,0.75),_0_12px_30px_rgba(0,0,0,0.25)]">
            <img 
              src="/iemrs/logo.png" 
              alt="Fullanke General Hospital Logo" 
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-100 dark:text-blue-300 mb-1 tracking-wide drop-shadow-sm">
          WELCOME TO ADARE <span className="text-blue-300 dark:text-primary-300">FULLANKE</span>
        </h1>
        <h2 className="text-base sm:text-lg lg:text-xl text-white dark:text-slate-100 font-semibold tracking-wide">
          ADARE GENERAL HOSPITAL
        </h2>
        <p className="text-[10px] sm:text-xs lg:text-sm text-slate-300 dark:text-slate-300 font-semibold mt-1 uppercase tracking-widest">
          INTEGRATED MEDICAL RECORD MANAGEMENT SYSTEM
        </p>
      </div>
      
      <div className="mx-auto max-w-fit">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 place-content-center">
          {allApps.map((app: HospitalApp) => (
            <ModuleCard
              key={app.id}
              app={app}
              onOpen={setSelectedApp}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
