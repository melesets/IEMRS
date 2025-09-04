import React from 'react';
import { HospitalApp } from '../types';

interface ModuleCardProps {
  app: HospitalApp;
}

export function ModuleCard({ app }: ModuleCardProps) {
  const colors = {
    protocols: '#3b82f6',
    handover: '#22c55e',
    qiProject: '#a855f7',
  };

  const color = colors[app.id] || '#6b7280'; // default to gray

  return (
    <div
      className="group relative w-40 h-40 rounded-xl p-1 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:rotate-3 hover:scale-105"
      style={{ backgroundImage: `conic-gradient(from 90deg, ${color} 0.75turn, transparent 0.75turn)` }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full h-full flex flex-col items-center justify-center">
        <div className="text-4xl relative z-10" style={{color: color}}>
          {app.icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2">
          {app.name}
        </h3>
      </div>
    </div>
  );
}