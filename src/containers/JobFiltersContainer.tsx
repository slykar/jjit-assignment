import { SearchInput } from '../components/common/SearchInput';
import React, { FunctionComponent } from 'react';
import { useAppState } from '../contexts/global-app-context';

const techStack = [
  'all',
  'java',
  'net',
  'testing',
  'c',
  'javascript',
  'ux',
  'php',
  'data',
  'other',
  'ruby',
  'devops',
  'blockchain',
  'python',
  'html',
  'mobile',
  'scala',
  'pm',
  'sap',
  'go',
  'security',
  'game',
];

export const JobFiltersContainer: FunctionComponent = () => {
  const [, dispatch] = useAppState();

  function onTechStackChange(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch({
      type: 'MERGE_FILTER',
      payload: {
        techStack: event.target.value,
      },
    });
  }

  return (
    <header className="flex flex-row space-x-4 items-center bg-white border-b py-6 px-4">
      <div className="w-40 focus-within:w-full lg:focus-within:w-7/12 xl:focus-within:w-5/12">
        <SearchInput />
      </div>
      <div className="w-40">
        <select
          name="filter-tech-stack"
          id="filter-tech-stack"
          placeholder="Tech stack"
          onChange={onTechStackChange}
        >
          {techStack.map((stack) => (
            <option key={stack} value={stack}>
              {stack}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};
