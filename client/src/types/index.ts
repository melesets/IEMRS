export interface SubApp {
  id: string;
  name: string;
  url: string;
  description?: string;
}

export interface HospitalApp {
  id: string;
  name: string;
  url: string;
  subApps?: SubApp[];
}
