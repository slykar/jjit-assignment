import { FunctionComponent } from 'react';
import { OfferListTabFilters } from '../components/offers/OfferListTabFilters';
import { OfferListItem } from '../components/offers/OfferListItem';
import { Link } from 'react-router-dom';
import { useOffersQueryResult } from '../layouts/OffersLayout';
import { salaryRangeForApiOffer } from '../utils/offers';

const JobListPage: FunctionComponent = () => {
  const offers = useOffersQueryResult();

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
            <li
              key={offer.id}
              className="bg-white rounded-lg shadow hover:shadow-lg cursor-pointer"
            >
              <Link className="block p-4" to={`offers/${offer.id}`}>
                <OfferListItem
                  imageUrl={offer.company_logo_url}
                  title={offer.title}
                  salary={salaryRangeForApiOffer(offer)}
                  companyName={offer.company_name}
                  city={offer.city}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default JobListPage;
