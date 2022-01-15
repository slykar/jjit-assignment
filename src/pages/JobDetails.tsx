import React from 'react';
import { Link } from 'react-router-dom';

const JobDetails: React.FC = (props) => {
  return (
    <main>
      <h1>Job Details</h1>
      <Link to="/">Go back.</Link>
    </main>
  );
};

export default JobDetails;
