import React from 'react';
import { Route, Routes } from 'react-router-dom';
import JobList from './pages/JobList';
import JobDetails from './pages/JobDetails';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobList />} />
      <Route path="/offers/:offerId" element={<JobDetails />} />
    </Routes>
  );
}

export default App;
