'use client';

import { SidebarItems } from "@/types";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Ghost, Link, LogOut, Menu, MoreHorizontal, Settings, X } from "lucide-react";
import { link } from "fs";
import {SidebarButtonSheet as SidebarButton }from "./sidebar-button";
import { Separator } from "./ui/separator";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
interface SidebarMobileProps {
  sidebarItems: SidebarItems;
}

export function SidebarMobile(props: SidebarMobileProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant='ghost' className="fixed top-5 left-5">
          <Menu size={30}  />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="mx-auto" hideClose>
        <SheetHeader className="flex flex-row justify-between items-center">
            <span className="text-lg font-semibold text-foreground mx-3">Urahara</span>
        
      <SheetClose asChild>
        <Button className="h-10 w-10 p-0" variant="ghost">
            <X size={30}/>
        </Button>
      </SheetClose>
        </SheetHeader>
        <div className="mt-5">
            {props.sidebarItems.links.map((link,index)=>(
                 <a href={link.href}>
                    <SidebarButton className="w-full" key={index} icon={link.icon}>
              {link.label}
            </SidebarButton>
                </a>
            )
        )}
        {props.sidebarItems.extras}
        </div>
        <div>
            <div className="absolute w-full bottom-5 px-1 left-0">
                <Separator className="absolute -top-3 left-0 w-full"/>
                <Drawer>
              <DrawerTrigger asChild>
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
              </DrawerTrigger>
              <DrawerContent className='mb-2 w-full p-3 rounded-[1rem] bg-black'>
                <div className='flex flex-col space-y-2'>
                  <a href='/'>
                    <SidebarButton size='sm' icon={Settings} className='w-full'>
                      Account Settings
                    </SidebarButton>
                  </a>
                  <SidebarButton size='sm' icon={LogOut} className='w-full'>
                    Log Out
                  </SidebarButton>
                </div>
              </DrawerContent>
            </Drawer>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}