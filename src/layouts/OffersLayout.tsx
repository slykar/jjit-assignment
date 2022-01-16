import { FunctionComponent } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { useQuery, UseQueryResult } from 'react-query';

const API_KEY_OFFERS = 'offers';

interface ApiOfferSkills {
  name: string;
  level: number;
}

export interface ApiOffer {
  [k: string]: any;
  company_logo_url: string;
  title: string;
  salary_currency: string | null;
  salary_from: number | null;
  salary_to: number | null;
  company_name: string;
  city: string;
  skills: ApiOfferSkills[];
}

/**
 * Expose offers loaded as part of this layout page using React Router.
 */
export function useOffers() {
  return useOutletContext<UseQueryResult<ApiOffer[], Error>>();
}

const OffersLayout: FunctionComponent = () => {
  const offers = useQuery<ApiOffer[], Error>(API_KEY_OFFERS, async () => {
    // TODO: add error handling - http status codes and json parsing errors
    const response = await fetch('https://test.justjoin.it/offers');
    return (await response.json()) as ApiOffer[];
  });

  return (
    <div className="flex flex-row min-h-0">
      <div className="flex flex-col basis-full lg:basis-7/12 xl:basis-1/2 2xl:basis-5/12">
        <Outlet context={offers} />
      </div>
      <aside className="hidden lg:flex lg:basis-5/12 xl:basis-1/2 2xl:basis-7/12">
        map view
      </aside>
    </div>
  );
};

export default OffersLayout;
