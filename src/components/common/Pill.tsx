import { FunctionComponent } from 'react';

type PillComponent = FunctionComponent & { Group: FunctionComponent };

export const Pill: PillComponent = (props) => {
  return (
    <li className="border text-gray-400 border-gray-400 px-2 rounded-full">
      {props.children}
    </li>
  );
};

const PillGroup: FunctionComponent = (props) => {
  return (
    <ul className="flex flex-row items-center space-x-1">{props.children}</ul>
  );
};

Pill.Group = PillGroup;
