import { Outlet } from 'react-router-dom';
import NavbarContainer from '../containers/NavbarContainer';

export default function AppLayout() {
  return (
    <>
      <NavbarContainer />
      <Outlet />
    </>
  );
}
