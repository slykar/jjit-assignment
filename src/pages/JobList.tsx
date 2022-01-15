import React from 'react';
import { Link } from 'react-router-dom';

const JobList: React.FC = (props, context) => {
  return (
    <main>
      <h1>Job List</h1>
      <Link to="offers/some-offer-id">Go to offer details page.</Link>
    </main>
  );
};

export default JobList;
