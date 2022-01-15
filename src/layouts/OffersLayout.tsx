import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

const OffersLayout: FunctionComponent = () => {
  return (
    <div className="flex flex-row min-h-0">
      <div className="flex flex-col basis-1/2">
        <Outlet />
      </div>
      <aside className="flex basis-1/2">map view</aside>
    </div>
  );
};

export default OffersLayout;
