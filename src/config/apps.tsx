import { HospitalApp } from '../types';
import { BookText, ArrowRightLeft, FlaskConical } from 'lucide-react';

export const hospitalApps: Record<string, HospitalApp> = {
  protocols: {
    id: 'protocols',
    name: 'Protocols',
    url: '/protocols',
    icon: <BookText />,
  },
  handover: {
    id: 'handover',
    name: 'Handover',
    url: '/handover',
    icon: <ArrowRightLeft />,
  },
  qiProject: {
    id: 'qiProject',
    name: 'QI Project',
    url: '/qi-project',
    icon: <FlaskConical />,
  },
};