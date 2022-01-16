import { FunctionComponent } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import { useOffer } from '../layouts/OffersLayout';
import { Link, useParams } from 'react-router-dom';

const JobDetailsPage: FunctionComponent = (props) => {
  const { offerId } = useParams();
  const offer = useOffer();

  if (!offer) {
    return <h1>Offer {offerId} could not be loaded :(</h1>;
  }

  return (
    <main className="px-4 flex flex-col space-y-4">
      <div className="rounded-b p-2 flex flex-col items-start bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <Link to=".." className="bg-opacity-20 bg-black rounded p-1">
          <ArrowLeftIcon className="w-6 text-white" />
        </Link>
        <div className="flex flex-row items-center">
          <div className="flex bg-white rounded-full aspect-square w-24 h-24 items-center overflow-hidden">
            <img src={offer.company_logo_url} alt="" className="w-full p-2" />
          </div>

          <h1 className="text-white text-2xl font-bold">{offer.title}</h1>
        </div>
      </div>

      <div className="flex flex-col bg-white rounded">
        <div className="border-b border-gray-200 p-4 text-lg">
          <h3>Tech stack</h3>
        </div>
        <div className="p-4">
          {/* list of skills required */}
          <div className="flex flex-row flex-wrap justify-evenly">
            {/* skill */}
            {offer.skills.map((s) => (
              <div
                key={s.name}
                className="flex flex-col items-center rounded-xl p-4"
              >
                <div className="text-indigo-900">{s.name}</div>
                <div>{s.level} / 5</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobDetailsPage;
