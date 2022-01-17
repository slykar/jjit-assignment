import { FunctionComponent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

interface FilterLinkProps {
  filterName: string;
  filterValue?: string;
}

export const FilterLink: FunctionComponent<FilterLinkProps> = (props) => {
  const { filterName, filterValue, children } = props;
  const [searchParams] = useSearchParams();
  const searchParamValue = searchParams.get(filterName);
  // those will be the new params that we use to build the filter URL
  const filterSearchParams = new URLSearchParams(searchParams);

  const isActive =
    // values match OR both expected and found values are empty
    searchParamValue === filterValue || (!filterValue && !searchParamValue);

  if (filterValue) {
    filterSearchParams.set(filterName, filterValue);
  } else {
    filterSearchParams.delete(filterName);
  }

  return (
    <Link
      to={{
        search: filterSearchParams.toString(),
      }}
      className={isActive ? 'text-indigo-300' : ''}
    >
      {children}
    </Link>
  );
};
