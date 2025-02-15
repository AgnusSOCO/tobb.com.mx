import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/Home';
import { InnovationLabPage } from './pages/InnovationLab';
import { ArticlePage } from './pages/ArticlePage';
import type { Language } from './types';

export default function App() {
  const [language, setLanguage] = React.useState<Language>('en');

  return (
    <Routes>
      <Route element={
        <MainLayout language={language} setLanguage={setLanguage}>
          <Outlet />
        </MainLayout>
      }>
        <Route index element={<HomePage language={language} />} />
        <Route path="/innovation-lab" element={<InnovationLabPage language={language} />} />
        <Route path="/articles/:articleId" element={<ArticlePage language={language} />} />
        <Route path="*" element={<HomePage language={language} />} />
      </Route>
    </Routes>
  );
}
