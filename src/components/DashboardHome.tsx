import React from 'react';
import { ModuleCard } from './ModuleCard';
import { hospitalApps } from '../config/apps.tsx';
import { HospitalApp } from '../types';

export function DashboardHome() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      {/* Module Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 pt-12 justify-items-center">
        {Object.values(hospitalApps).map((app: HospitalApp) => (
          <ModuleCard
            key={app.id}
            app={app}
          />
        ))}
      </div>
    </div>
  );
}