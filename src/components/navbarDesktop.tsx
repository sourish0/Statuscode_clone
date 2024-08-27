import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import col from '../../public/col.svg';
import Link from 'next/link';
import { Button } from './ui/button';

const NavbarDesktop = () => {
  return (
    <div className='h-[70px] z-5000 flex items-center justify-between px-4'>
      <div className="flex items-center"> {/* Logo */}
        <Image src={logo} alt="Next.js Logo" height={60} />
      </div>
      <div className='flex items-center text-white gap-4'> {/* Links */}
        <Link href="#">
          <Button className='text-white' variant='link'>
            Schedule
          </Button>
        </Link>
        <Link href="/#menu">
          <Button className='text-white' variant='link'>
            Tracks
          </Button>
        </Link>
        <Link href="/#">
          <Button className='text-white' variant='link'>
            Prizes
          </Button>
        </Link>
        <Link href="#Faq" scroll={true}>
          <Button className='text-white' variant='link'>
            More
          </Button>
        </Link>
      </div>
      <div className='flex items-center'> {/* Login */}
        <Image src={col} alt='yo mama' height={60} />
      </div>
    </div>
  );
};

export default NavbarDesktop;
