import { useQuery } from 'react-query';

const API_KEY_OFFERS = 'offers';

interface ApiOfferSkills {
  name: string;
  level: number;
}

export interface ApiOffer {
  id: string;
  company_logo_url: string;
  title: string;
  salary_currency: string | null;
  salary_from: number | null;
  salary_to: number | null;
  company_name: string;
  city: string;
  marker_icon: string;
  skills: ApiOfferSkills[];
  latitude: number;
  longitude: number;
}

/**
 * TODO: we should re-fetch on filters change if the API ever supports filtering
 */
export function useOfferQuery() {
  return useQuery<ApiOffer[], Error>(
    API_KEY_OFFERS,
    async () => {
      // TODO: add error handling - http status codes and json parsing errors
      const response = await fetch('https://test.justjoin.it/offers');
      return (await response.json()) as ApiOffer[];
    },
    {
      // we don't need that for this for the demo
      refetchOnWindowFocus: false,
    }
  );
}
