import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

const OffersLayout: FunctionComponent = () => {
  return (
    <div className="flex flex-row">
      <main className="basis-1/2 p-4">
        <Outlet />
      </main>
      <aside className="basis-1/2">map view</aside>
    </div>
  );
};

export default OffersLayout;
