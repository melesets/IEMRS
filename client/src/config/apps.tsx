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
  TAT: {
    id: 'TAT',
    name: 'QPulse',
    url: import.meta.env.VITE_URL_QPULSE as string,
    subApps: [
      {
        id: 'tat-lab',
        name: 'LAB',
        url: import.meta.env.VITE_URL_QPULSE_LAB as string,
      },
      {
        id: 'tat-emer',
        name: 'EMER',
        url: import.meta.env.VITE_URL_QPULSE_EMER as string,
      },
      {
        id: 'tat-opd',
        name: 'OPD',
        url: import.meta.env.VITE_URL_QPULSE_OPD as string,
      },
      {
        id: 'tat-liaison',
        name: 'LIAISON',
        url: import.meta.env.VITE_URL_QPULSE_LIAISON as string,
      },
      {
        id: 'tat-pharm',
        name: 'PHARM',
        url: import.meta.env.VITE_URL_QPULSE_PHARM as string,
      },
      {
        id: 'tat-ob',
        name: 'OB',
        url: import.meta.env.VITE_URL_QPULSE_OB as string,
      },
      {
        id: 'tat-rad',
        name: 'RAD',
        url: import.meta.env.VITE_URL_QPULSE_RAD as string,
      },
      {
        id: 'tat-or',
        name: 'OR',
        url: import.meta.env.VITE_URL_QPULSE_OR as string,
      },
      {
        id: 'tat-survey',
        name: 'SURVEY',
        url: import.meta.env.VITE_URL_QPULSE_SURVEY as string,
      },
      {
        id: 'tat-ehsig',
        name: 'EHSIG',
        url: import.meta.env.VITE_URL_QPULSE_EHSIG as string,
      },
      {
        id: 'tat-caudit',
        name: 'CAudit',
        url: import.meta.env.VITE_URL_QPULSE_CAUDIT as string,
      },
      {
        id: 'tat-misce',
        name: 'MISCE',
        url: import.meta.env.VITE_URL_QPULSE_MISCE as string,
      },
    ],
  },
  csms: {
    id: 'csms',
    name: 'CSMS',
    url: import.meta.env.VITE_URL_CSMS as string,
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
