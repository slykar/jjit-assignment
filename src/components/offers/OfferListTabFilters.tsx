import { FunctionComponent } from 'react';
import { FilterLink } from '../common/FilterLink';

const FILTER_TAB = 'tab';

/**
 * NOTE: The status of filters should be taken from some global filters state.
 *       However, because we use query string for "tab" filter,
 *       it is fine to use the utility component `FilterLink`.
 * @constructor
 */
export const OfferListTabFilters: FunctionComponent = () => {
  return (
    <div className="flex flex-row space-x-4">
      <FilterLink filterName={FILTER_TAB} filterValue={'with-salary'}>
        Offers with salary
      </FilterLink>
      <FilterLink filterName={FILTER_TAB}>All offers</FilterLink>
    </div>
  );
};
