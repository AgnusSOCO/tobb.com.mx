import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/Home';
import { InnovationLabPage } from './pages/InnovationLab';
import type { Language } from './types';

function App() {
  const [language, setLanguage] = React.useState<Language>('en');

  return (
    <Routes>
      <Route element={
        <MainLayout language={language} setLanguage={setLanguage}>
          <Outlet />
        </MainLayout>
      }>
        <Route path="/" element={<HomePage language={language} />} />
        <Route path="/innovation-lab" element={<InnovationLabPage language={language} />} />
      </Route>
    </Routes>
  );
}

export default App;