import React, { useState } from 'react';
import { HospitalApp } from '../../types';
import { TiltCard } from './TiltCard';
import { getIconByAppId, getIconColorByAppId } from '../icons';

interface ModuleCardProps {
  app: HospitalApp;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ app }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const icon = getIconByAppId(app.id);
  const iconBgColor = getIconColorByAppId(app.id);
  const isExternalLink = app.url.startsWith('http');

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
        {app.name}
      </h3>
      
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

  return isExternalLink ? (
    <TiltCard className={cardClasses}>
      <a 
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {cardContent}
      </a>
    </TiltCard>
  ) : (
    <TiltCard 
      className={cardClasses}
      onClick={() => console.log('Navigate to:', app.url)}
    >
      <div 
        className="w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {cardContent}
      </div>
    </TiltCard>
  );
};
