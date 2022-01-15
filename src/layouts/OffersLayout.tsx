import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

const OffersLayout: FunctionComponent = () => {
  return (
    <div className="flex flex-row min-h-0">
      <div className="flex flex-col basis-full lg:basis-7/12 xl:basis-1/2 2xl:basis-5/12">
        <Outlet />
      </div>
      <aside className="hidden lg:flex lg:basis-5/12 xl:basis-1/2 2xl:basis-7/12">
        map view
      </aside>
    </div>
  );
};

export default OffersLayout;
