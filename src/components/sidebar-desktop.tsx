"use client";
import { SidebarItems } from "@/types";

import { LucideIcon, Sun, Home, Lock, MoreHorizontal, Settings, LogOut } from "lucide-react";
import { Link } from "lucide-react";
import { Separator } from "./ui/separator";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import SidebarButton from "./sidebar-button";

interface SidebarDesktopProps {
  sidebarItems: SidebarItems;
}

const Sidebardesktop = (props: SidebarDesktopProps) => {
  return (
    <aside className="w-[270px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r">
      <div className="h-full px-3 py-4">
        <h3 className="mx-3 text-lg font-semibold text-foreground">John Cena</h3>
        
        {props.sidebarItems.links.map((link, index) => (
        <a href={link.href}><SidebarButton className="w-full" key={index} icon={link.icon}>
              {link.label}
            </SidebarButton>
            </a>

        ))}
        {props.sidebarItems.extras}
      </div>
      <div className="absolute left-0 bottom-3 w-full p-3">
        <Separator className="absolute -top-3 left-0 px-3 w-full"/>
        <Popover>
              <PopoverTrigger asChild>
                <Button variant='ghost' className='w-full justify-start'>
                  <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-2'>
                      <Avatar className='h-5 w-5'>
                        <AvatarImage src='https://qph.cf2.quoracdn.net/main-qimg-9faf176a9eeb549e9b44d97fc2e359aa-lq' />
                        <AvatarFallback>hell yeah</AvatarFallback>
                      </Avatar>
                      <span>hell yeah</span>
                    </div>
                    <MoreHorizontal size={20} />
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className='mb-2 w-56 p-3 rounded-[1rem] bg-green-800'>
                <div className='space-y-1'>
                  <a href='/'>
                    <SidebarButton size='sm' icon={Settings} className='w-full'>
                      Account Settings
                    </SidebarButton>
                  </a>
                  <SidebarButton size='sm' icon={LogOut} className='w-full'>
                    Log Out
                  </SidebarButton>
                </div>
              </PopoverContent>
            </Popover>
      </div>
    </aside>
  );
};

export default Sidebardesktop;
