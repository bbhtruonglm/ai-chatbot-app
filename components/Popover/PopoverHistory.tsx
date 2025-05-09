import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid';
import { SidebarHistory } from '../sidebar-history';
import { User } from 'next-auth';
import { useState } from 'react';

export default function PopupHistory({ user }: { user: User }) {
  /** Open */
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={`inline-flex rounded p-1 ${open ? 'bg-white text-black' : ''}`}
        >
          <Bars3BottomLeftIcon className="size-6 cursor-pointer" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 max-h-96 overflow-hidden overflow-y-auto">
        <SidebarHistory user={user} />
      </PopoverContent>
    </Popover>
  );
}
