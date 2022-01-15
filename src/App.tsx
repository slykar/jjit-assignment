import React from 'react';
import { Route, Routes } from 'react-router-dom';
import JobList from './pages/JobList';
import JobDetails from './pages/JobDetails';

import './App.css';
import AppLayout from './layouts/AppLayout';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<JobList />} />
        <Route path="/offers/:offerId" element={<JobDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
