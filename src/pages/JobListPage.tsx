import { FunctionComponent } from 'react';
import { useQuery } from 'react-query';

interface ApiOffer {
  [k: string]: any;
}

const JobListPage: FunctionComponent = (props, context) => {
  const offers = useQuery<ApiOffer[], Error>('offers', () =>
    fetch('https://test.justjoin.it/offers').then((res) => res.json())
  );

  if (offers.isLoading) return <p>Loading...</p>;
  if (offers.error) return <p>An error has occurred: {offers.error.message}</p>;

  return (
    <>
      <div className="bg-white border-b p-4">sorting and tabs</div>
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
