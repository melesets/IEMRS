import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Dashboard } from './components/layout/Dashboard';
import { ErrorBoundary } from './components/ui/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
