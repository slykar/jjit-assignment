import { FunctionComponent } from 'react';
import { Pill } from '../common/Pill';
import { LocationMarkerIcon, OfficeBuildingIcon } from '@heroicons/react/solid';

interface OfferListItemProps {
  imageUrl: string;
  title: string;
  salary: string | JSX.Element;
  companyName: string;
  city: string;
  skills: string[];
}

export const OfferListItem: FunctionComponent<OfferListItemProps> = (props) => {
  return (
    <div className="flex flex-row items-center">
      <div className="flex shrink-0 mr-4">
        <img
          src={props.imageUrl}
          alt={props.title}
          className="object-contain h-16 w-28"
        />
      </div>
      <div className="flex flex-col flex-grow space-y-2">
        <div className="flex flex-row justify-between">
          <h3 className="text-xl overflow-ellipsis whitespace-nowrap overflow-hidden">
            {props.title}
          </h3>
          <span className="text-xl text-emerald-600 shrink-0">
            {props.salary}
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row text-gray-400 space-x-1">
            <span className="flex flex-row items-center shrink-0">
              <OfficeBuildingIcon className="w-5 h-5" />
              {props.companyName}
            </span>
            <span className="flex flex-row items-center shrink-0">
              <LocationMarkerIcon className="w-5 h-5" />
              {props.city}
            </span>
          </div>

          <Pill.Group>
            {props.skills.map((s) => (
              <Pill>{s}</Pill>
            ))}
          </Pill.Group>
        </div>
      </div>
    </div>
  );
};
