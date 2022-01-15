import { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import { OfferListTabFilters } from '../components/offers/OfferListTabFilters';

interface ApiOffer {
  [k: string]: any;
}

const JobListPage: FunctionComponent = () => {
  const offers = useQuery<ApiOffer[], Error>('offers', () =>
    fetch('https://test.justjoin.it/offers').then((res) => res.json())
  );

  if (offers.isLoading) return <p>Loading...</p>;
  if (offers.error) return <p>An error has occurred: {offers.error.message}</p>;

  return (
    <>
      <div className="flex flex-row place-content-between bg-white border-b p-4">
        <OfferListTabFilters />
        <div>
          Sort by:
          <select className="bg-transparent font-medium active:outline-0 ml-1 text-right">
            <option>latest</option>
            <option>highest salary</option>
            <option>lowest salary</option>
          </select>
        </div>
      </div>
      <div className="overflow-auto">
        <ul className="flex flex-col space-y-4 p-4">
          {offers.data?.map((offer) => (
            <li className="bg-white p-4 rounded-lg shadow">{offer.id}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default JobListPage;
