import React, { useState } from 'react';
import { HospitalApp, SubApp } from '../../types';
import { TiltCard } from './TiltCard';
import { getIconByAppId, getIconColorByAppId } from '../icons';

interface SubAppCardProps {
  app: HospitalApp;
  subApp: SubApp;
}

const SubAppCard: React.FC<SubAppCardProps> = ({ app, subApp }) => {
  const [isHovered, setIsHovered] = useState(false);

  const icon = getIconByAppId(app.id);
  const iconBgColor = getIconColorByAppId(app.id);

  const cardContent = (
    <div 
      className="w-full h-full flex flex-col items-center justify-between p-3"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div 
        className="w-[60px] h-[60px] rounded-[14px] flex items-center justify-center mb-2 transition-transform duration-300"
        style={{ 
          backgroundColor: iconBgColor,
          transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)',
          transition: 'transform 0.3s cubic-bezier(.03,.98,.52,.99)'
        }}
      >
        {icon}
      </div>
      
      <h3 className="text-[13px] font-bold text-gray-900 dark:text-white text-center leading-tight">
        {subApp.name}
      </h3>

      {subApp.description && (
        <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center leading-tight mt-1">
          {subApp.description}
        </p>
      )}
      
      <div 
        className={`w-8 h-1 rounded-full mt-2 transition-all duration-300 ${
          isHovered 
            ? 'bg-blue-600 dark:bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.5)]' 
            : 'bg-slate-300 dark:bg-slate-600'
        }`}
      />
    </div>
  );

  const cardClasses = `
    relative w-[120px] h-[130px] 
    bg-white/70 dark:bg-slate-900/60
    backdrop-blur-md
    rounded-[18px] 
    border border-slate-200/80 dark:border-slate-800/50
    shadow-[0_8px_24px_rgba(0,0,0,0.06)]
    transition-all duration-300 ease-out
    ${isHovered ? 'shadow-[0_12px_32px_rgba(30,58,138,0.12)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.4)] border-blue-500/30 dark:border-blue-400/30 bg-white/90 dark:bg-slate-900/80 scale-[1.04]' : ''}
  `;

  return (
    <TiltCard className={cardClasses}>
      <a 
        href={subApp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {cardContent}
      </a>
    </TiltCard>
  );
};

interface ModuleSubPageProps {
  app: HospitalApp;
  onBack: () => void;
}

export const ModuleSubPage: React.FC<ModuleSubPageProps> = ({ app, onBack }) => {
  const subApps = app.subApps ?? [];

  return (
    <div className="pt-10 sm:pt-14 lg:pt-16 px-3 pb-3 sm:px-5 sm:pb-5 lg:px-6 lg:pb-6 max-w-6xl mx-auto">
      <div className="flex justify-center mb-4 sm:mb-5">
        <button
          type="button"
          onClick={onBack}
          className="group inline-flex items-center gap-2.5 pl-3 pr-5 py-2 rounded-full bg-white/15 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:bg-white/25 dark:hover:bg-white/20 hover:border-white/50 hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] active:scale-95 transition-all duration-300"
        >
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/25 dark:bg-white/15 border border-white/40 group-hover:bg-white/40 transition-all duration-300">
            <svg className="w-3.5 h-3.5 text-white dark:text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </span>
          <span className="text-[11px] sm:text-xs font-bold text-white dark:text-blue-100 tracking-widest uppercase">
            Back to Modules
          </span>
        </button>
      </div>

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
          QUALITY PULSE DASHBOARD
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
          {subApps.map((subApp: SubApp) => (
            <SubAppCard
              key={subApp.id}
              app={app}
              subApp={subApp}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
