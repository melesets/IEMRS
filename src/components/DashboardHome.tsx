import React from 'react';
import { ModuleCard } from './ModuleCard';
import { hospitalApps } from '../config/apps.tsx';
import { HospitalApp } from '../types';

export function DashboardHome() {
  const dummyApps: HospitalApp[] = Array.from({ length: 6 }).map((_, i) => ({
    id: `dummyApp${i}`,
    name: i === 0 ? 'Kaizen' : `Dummy App ${i + 1}`,
    url: `/dummy-app-${i + 1}`,
    icon: null, // You can replace this with a proper icon if needed
  }));

  const allApps = [...Object.values(hospitalApps), ...dummyApps];

  return (
    <div className="p-8 max-w-3xl mx-auto">
      {/* Module Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 justify-items-center">
        {allApps.map((app: HospitalApp) => (
          <ModuleCard
            key={app.id}
            app={app}
          />
        ))}
      </div>
    </div>
  );
}