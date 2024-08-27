"use client";

import React from 'react';
import Sidebardesktop from './sidebar-desktop';
import { Home, Bot, MoreHorizontal } from 'lucide-react';

import { useMediaQuery } from 'usehooks-ts';
import { SidebarMobile } from './sidebar-mobile';
import SidebarButton, {  } from './sidebar-button';

const Sidebar = () => {
    const isDesktop = useMediaQuery("(min-width: 640px)",{
      initializeWithValue: false,
    });

    if (isDesktop) {
        return (
            <Sidebardesktop
                sidebarItems={{
                    links: [
                        { label: 'Home', href: '/', icon: Home },
                        { label: 'About', href: '/about', icon: Bot },
                    ],
                    extras: (
                        <div>
                            <SidebarButton icon={MoreHorizontal} className='w-full'>More</SidebarButton>
                            <SidebarButton className='w-full text-white' variant='default'>Post It</SidebarButton>
                        </div>
                    )
                }}
            />
        );
    } else {
        return (<SidebarMobile 
          sidebarItems={{
            links: [
                { label: 'Home', href: '/', icon: Home },
                { label: 'About', href: '/about', icon: Bot },
            ],
            extras: (
                <div>
                    <SidebarButton icon={MoreHorizontal} className='w-full'>More</SidebarButton>
                    <SidebarButton className='w-full text-white' variant='default'>Post It</SidebarButton>
                </div>
            )
        }}
        />);
    }
};

export default Sidebar;
