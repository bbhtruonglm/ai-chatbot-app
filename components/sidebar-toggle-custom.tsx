import type { ComponentProps } from 'react';

import { type SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { SidebarLeftIcon } from './icons';
import { Button } from './ui/button';
import { Bars2Icon } from '@heroicons/react/24/solid';

export function SidebarToggleCustom({
  className,
}: ComponentProps<typeof SidebarTrigger>) {
  /** Hàm toggle sidebar */
  const { toggleSidebar } = useSidebar();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {/* <Button
          data-testid="sidebar-toggle-button"
          onClick={toggleSidebar}
          variant="outline"
          className="md:px-2 md:h-fit"
        > */}
        <div onClick={toggleSidebar}>
          <Bars2Icon className="size-6 cursor-pointer" />
        </div>
        {/* </Button> */}
      </TooltipTrigger>
      <TooltipContent align="start">Toggle Sidebar</TooltipContent>
    </Tooltip>
  );
}
