import {
  BeakerIcon,
  CommandLineIcon,
  FlagIcon,
  IdentificationIcon,
  MegaphoneIcon,
  ViewfinderCircleIcon,
} from '@heroicons/react/24/solid';

import React from 'react';

const TagWithIcon = ({
  type = 'brand-boosting',
  label = 'Brand Boosting',
  className,
  is_active,
  ...props
}: any) => {
  return (
    <div
      onClick={props.onClick}
      className={`flex items-center gap-2 p-3 border-2 rounded-full w-fit bg-zinc-900 cursor-pointer hover:bg-zinc-700 ${is_active ? 'bg-white text-black' : ''}`}
    >
      {type === 'brand_boosting' && <MegaphoneIcon className="size-6" />}
      {type === 'cv_checker' && <IdentificationIcon className="size-6" />}
      {type === 'business_planner' && <FlagIcon className="size-6" />}{' '}
      {type === 'coder' && <CommandLineIcon className="size-6" />}
      {type === 'more' && <ViewfinderCircleIcon className="size-6" />}
      <span className={`text-sm`}>{label}</span>
    </div>
  );
};

export default TagWithIcon;
