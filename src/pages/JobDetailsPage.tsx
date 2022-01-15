import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const JobDetailsPage: FunctionComponent = (props) => {
  return (
    <main>
      <h1>Job Details</h1>
      <Link to="/">Go back.</Link>
    </main>
  );
};

export default JobDetailsPage;
