import React from 'react';

export interface User {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar?: string;
}

export interface HospitalApp {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface AppConfig {
  [key: string]: HospitalApp;
}