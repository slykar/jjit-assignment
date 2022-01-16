import { SearchIcon } from '@heroicons/react/solid';

export function SearchInput() {
  return (
    <label className="flex flex-row text-base bg-gray-200 focus-within:bg-white hover:bg-white rounded-full border px-2 py-1 focus-within:shadow ring-offset-2 ring-indigo-200">
      <SearchIcon className="h-6 w-6" />
      <input
        className="bg-transparent outline-0 w-full mx-1"
        type="search"
        name=""
        id=""
      />
    </label>
  );
}
