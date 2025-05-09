import {
  BeakerIcon,
  CommandLineIcon,
  FlagIcon,
  IdentificationIcon,
  MegaphoneIcon,
  ViewfinderCircleIcon,
} from '@heroicons/react/24/solid';

import { Globe2Icon } from 'lucide-react';
import React from 'react';

const ThinkMode = ({
  type = 'think',
  label = 'Think',
  className,
  is_active,
  ...props
}: any) => {
  return (
    <div
      onClick={props.onClick}
      className={`flex items-center box-border gap-2 rounded-full px-3 p-1.5 h-fit border-2 dark:border-zinc-700 hover:dark:bg-zinc-900 hover:dark:text-zinc-50 hover:bg-zinc-200 cursor-pointer ${is_active ? 'bg-white text-black' : ''}`}
    >
      {type === 'think' && <Globe2Icon className="size-5" />}
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default ThinkMode;
