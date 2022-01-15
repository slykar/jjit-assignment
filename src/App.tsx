import React from 'react';
import { Route, Routes } from 'react-router-dom';
import JobListPage from './pages/JobListPage';
import JobDetailsPage from './pages/JobDetailsPage';

import AppLayout from './layouts/AppLayout';
import OffersLayout from './layouts/OffersLayout';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<OffersLayout />}>
          <Route path="/" element={<JobListPage />} />
          <Route path="/offers/:offerId" element={<JobDetailsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
