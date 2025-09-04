import React from 'react';
import { TopBar } from './TopBar';
import { DashboardHome } from './DashboardHome';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <TopBar />
      <main className="flex-grow">
        <DashboardHome />
      </main>
      <footer className="text-center py-4 text-xs text-gray-500 dark:text-gray-400">
        Powered by AGH-HSQD
      </footer>
    </div>
  );
}