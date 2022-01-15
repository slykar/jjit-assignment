import { Link } from 'react-router-dom';
import { FunctionComponent } from 'react';

const JobListPage: FunctionComponent = (props, context) => {
  return (
    <main>
      <h1>Job List</h1>
      <Link to="offers/some-offer-id">Go to offer details page.</Link>
    </main>
  );
};

export default JobListPage;
