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

  const isActive =
    searchParamValue === filterValue || (!filterValue && !searchParamValue);

  if (filterValue) {
    searchParams.set(filterName, filterValue);
  } else {
    searchParams.delete(filterName);
  }

  return (
    <Link
      to={{
        search: searchParams.toString(),
      }}
      className={isActive ? 'text-indigo-300' : ''}
    >
      {children}
    </Link>
  );
};
