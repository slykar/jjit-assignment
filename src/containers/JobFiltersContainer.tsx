import { SearchInput } from '../components/common/SearchInput';

const techStack = ['JS', 'PHP', 'Python', 'Ruby', 'Java', '.NET', 'Scala'];

export default function () {
  return (
    <header className="flex flex-row space-x-4 items-center bg-white border-b py-6 px-4">
      <div className="w-40 focus-within:w-full lg:focus-within:w-7/12 xl:focus-within:w-5/12">
        <SearchInput />
      </div>
      <div className="w-40">
        <select name="" id="" placeholder="Location">
          <option value="remote-global">Remote Global</option>
          <option value="remote-poland">Remote Poland</option>
        </select>
      </div>
      <div className="w-40">
        <select name="" id="" placeholder="Tech stack">
          <option value="all">All</option>
          <option value="java">Java</option>
          <option value="php">PHP</option>
          <option value="js">JS</option>
          <option value="python">Python</option>
        </select>
      </div>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </header>
  );
}
