import { HospitalApp } from '../types';

export const hospitalApps: Record<string, HospitalApp> = {
  isbar: {
    id: 'isbar',
    name: 'ISBAR',
    url: import.meta.env.VITE_URL_ISBAR as string,
  },
  cpams: {
    id: 'cpams',
    name: 'CPAMS',
    url: import.meta.env.VITE_URL_CPAMS as string,
  },
  qippms: {
    id: 'qippms',
    name: 'QIPPMS',
    url: import.meta.env.VITE_URL_QIPPMS as string,
  },
  sbfr: {
    id: 'sbfr',
    name: 'SBFR',
    url: import.meta.env.VITE_URL_SBFR as string,
  },
  kaizen: {
    id: 'kaizen',
    name: 'Kaizen',
    url: import.meta.env.VITE_URL_KAIZEN as string,
  },
  nmsd: {
    id: 'nmsd',
    name: 'NMSD',
    url: import.meta.env.VITE_URL_NMSD as string,
  },
  bahmni: {
    id: 'bahmni',
    name: 'Bahmni',
    url: import.meta.env.VITE_URL_BAHMNI as string,
  },
  sir: {
    id: 'sir',
    name: 'SIR',
    url: import.meta.env.VITE_URL_SIR as string,
  },
  dagu: {
    id: 'dagu',
    name: 'DAGU',
    url: import.meta.env.VITE_URL_DAGU as string,
  },
  datt: {
    id: 'datt',
    name: 'D-ATT',
    url: import.meta.env.VITE_URL_DATT as string,
  },
  'fullanke-ai': {
    id: 'fullanke-ai',
    name: 'Fullanke Ai',
    url: import.meta.env.VITE_URL_FULLANKE_AI as string,
  },
  hiems: {
    id: 'hiems',
    name: 'HIEMS',
    url: import.meta.env.VITE_URL_HIEMS as string,
  },
};
