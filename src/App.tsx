// FILE: src/App.tsx

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';

const Dashboard = lazy(() => import('./pages/Dashboard').then((m) => ({ default: m.Dashboard })));
const Societies = lazy(() => import('./pages/Societies').then((m) => ({ default: m.Societies })));
const Events = lazy(() => import('./pages/Events').then((m) => ({ default: m.Events })));
const AI = lazy(() => import('./pages/AI').then((m) => ({ default: m.AI })));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-12 h-12 rounded-full border-4 border-neon-cyan/30 border-t-neon-cyan animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={<PageLoader />}>
                  <Dashboard />
                </Suspense>
              }
            />
            <Route
              path="societies"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Societies />
                </Suspense>
              }
            />
            <Route
              path="events"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Events />
                </Suspense>
              }
            />
            <Route
              path="ai"
              element={
                <Suspense fallback={<PageLoader />}>
                  <AI />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
