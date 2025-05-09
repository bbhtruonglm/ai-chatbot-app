import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { SidebarUserNav } from '../sidebar-user-nav';
import { User } from 'next-auth';
import { useState } from 'react';

export default function PopupSetup({ user }: { user: User }) {
  /** Open */
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/images/Avatar.png"
            alt="Avatar"
            width={28}
            height={28}
            className={`size-6 md:size-7 rounded-full`}
          />
          <div className="hidden md:flex">
            <ChevronDownIcon className="size-4 text-gray-500" />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 max-h-96 overflow-hidden overflow-y-auto">
        <SidebarUserNav user={user} />
      </PopoverContent>
    </Popover>
  );
}
