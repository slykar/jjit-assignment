import { Outlet } from 'react-router-dom';
import NavbarContainer from '../containers/NavbarContainer';
import JobFiltersContainer from '../containers/JobFiltersContainer';

export default function AppLayout() {
  return (
    <div className="min-h-full">
      <NavbarContainer />
      <JobFiltersContainer />
      <Outlet />
    </div>
  );
}
