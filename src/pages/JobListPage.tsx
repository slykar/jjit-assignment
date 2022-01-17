import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { OfferListTabFilters } from '../components/offers/OfferListTabFilters';
import { OfferListItem } from '../components/offers/OfferListItem';
import { Link } from 'react-router-dom';
import { useOffersQueryResult } from '../layouts/OffersLayout';
import { filterOffers, salaryRangeForApiOffer } from '../utils/offers';
import { useAppState } from '../contexts/global-app-context';
import { ApiOffer } from '../api';
import useSort, { SortDirection, SortFunction } from '../utils/sorting';

/**
 * Describes available offer sorting functions
 */
interface OfferSorters {
  salary: SortFunction<ApiOffer>;
  latest: SortFunction<ApiOffer>;
}

/**
 * Offer sorting functions
 * TODO: this could live in a better place
 */
const offerSorters: OfferSorters = {
  // FIXME: this won't work correctly because of different currencies
  salary(left, right, dir) {
    const LEFT_IS_BIGGER = -1;
    const RIGHT_IS_BIGGER = 1;

    // no salary is always pushed back
    if (right.salary_to === null) return LEFT_IS_BIGGER;
    if (left.salary_to === null) return RIGHT_IS_BIGGER;

    // NOTE: dir might be 0 here
    return dir * (left.salary_to - right.salary_to);
  },
  latest(left, right, dir) {
    // We don't really have any offer creation date from the API,
    // but I assume offers are sorted by date
    return 0;
  },
};

/**
 * Available sorting options.
 * FIXME: avoid "magic strings"
 */
const sortOptions: {
  label: string;
  dir: SortDirection;
  sorter: keyof OfferSorters;
}[] = [
  {
    label: 'latest',
    sorter: 'latest',
    dir: SortDirection.DESC,
  },
  {
    label: 'lowest salary',
    sorter: 'salary',
    dir: SortDirection.ASC,
  },
  {
    label: 'highest salary',
    sorter: 'salary',
    dir: SortDirection.DESC,
  },
];

const JobListPage: FunctionComponent = () => {
  const [state] = useAppState();
  const filters = state.filters;
  const offers = useOffersQueryResult();

  // filter offers
  // We need to remember `filteredOffers`, otherwise we will cause a render loop with `useSort`.
  const filteredOffers = useMemo(
    () => filterOffers(offers.data ?? [], filters),
    [offers.data, filters]
  );

  // sort offers
  const { sortedItems: sortedOffers, toggleSort } = useSort<
    ApiOffer,
    OfferSorters
  >(filteredOffers, offerSorters);

  // called when we change sorting option
  const changeSort = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const index = parseInt(event.target.value, 10);
      const sort = sortOptions[index];
      toggleSort(sort.sorter, sort.dir);
    },
    [toggleSort]
  );

  // TODO: Ugly status indicators... Also, no proper error reporting to the user.
  if (offers.isLoading) return <p>Loading...</p>;
  if (offers.error) return <p>An error has occurred: {offers.error.message}</p>;

  return (
    <>
      <div className="flex flex-row place-content-between bg-white border-b p-4">
        <OfferListTabFilters />
        <div>
          Sort by:
          <select
            onChange={(event) => changeSort(event)}
            className="bg-transparent font-medium active:outline-0 ml-1 text-right"
          >
            {sortOptions.map((sort, index) => (
              <option key={sort.label} value={index}>
                {sort.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="overflow-auto">
        <ul className="flex flex-col space-y-4 p-4">
          {sortedOffers.map((offer) => (
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
                  skills={offer.skills.map((s) => s.name)}
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
