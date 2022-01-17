import { FunctionComponent, useEffect } from 'react';
import { FilterLink } from '../common/FilterLink';
import { useSearchParams } from 'react-router-dom';
import { useAppState } from '../../contexts/global-app-context';

const FILTER_TAB = 'tab';
const FILTER_WITH_SALARY = 'with-salary';
const FILTER_NO_SALARY = 'no-salary';
const FILTER_MAPPING: Record<string, boolean | null> = {
  [FILTER_WITH_SALARY]: true,
  [FILTER_NO_SALARY]: false,
  '': null,
};

/**
 * NOTE: The status of filters should be taken from some global filters state.
 *       However, because we use query string for "tab" filter,
 *       it is fine to use the utility component `FilterLink`.
 * @constructor
 */
export const OfferListTabFilters: FunctionComponent = () => {
  const [searchParams] = useSearchParams();
  const [, dispatch] = useAppState();
  const tabFilterValue = searchParams.get(FILTER_TAB) ?? '';

  useEffect(() => {
    dispatch({
      type: 'MERGE_FILTER',
      payload: {
        withSalary: FILTER_MAPPING[tabFilterValue] ?? null,
      },
    });
  }, [dispatch, tabFilterValue]);

  return (
    <div className="flex flex-row space-x-4">
      <FilterLink filterName={FILTER_TAB} filterValue={FILTER_WITH_SALARY}>
        Offers with salary
      </FilterLink>
      <FilterLink filterName={FILTER_TAB} filterValue={FILTER_NO_SALARY}>
        Undisclosed salary
      </FilterLink>
      <FilterLink filterName={FILTER_TAB}>All offers</FilterLink>
    </div>
  );
};
