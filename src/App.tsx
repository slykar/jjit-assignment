import React from 'react';
import { Route, Routes } from 'react-router-dom';
import JobList from './pages/JobList';
import JobDetails from './pages/JobDetails';

import './App.css';
import AppLayout from './layouts/AppLayout';
import OffersLayout from './layouts/OffersLayout';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<OffersLayout />}>
          <Route path="/" element={<JobList />} />
          <Route path="/offers/:offerId" element={<JobDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
