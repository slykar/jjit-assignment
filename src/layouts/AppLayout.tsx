import { Outlet } from 'react-router-dom';
import NavbarContainer from '../containers/NavbarContainer';
import JobFiltersContainer from '../containers/JobFiltersContainer';

export default function AppLayout() {
  return (
    <>
      <NavbarContainer />
      <JobFiltersContainer />
      <Outlet />
    </>
  );
}
