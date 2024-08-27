"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/StatusCode.svg';
import Mascot from '../../public/mascot.svg';
import Devfolio from '../../public/devfolio.svg';
import Devlogo from '../../public/Devfoliologo.svg';
import arrow from '../../public/arrow.svg';
import discord from '../../public/discord.svg';
import { useMediaQuery } from 'usehooks-ts';

interface Props {
  id: string;
}

const FirstBlock: React.FC<Props>  = ({id}) => {
  const isDesktop=useMediaQuery("(min-width:640px)",{
    initializeWithValue:false,
});
  return (
    <div className="flex flex-col items-center relative justify-center mt-20 mx-10">
      <Image src={logo} alt="Yo mama" />
      <div className="items-center justify-center z-50 relative">
        <div className="fade-mask w-full max-w-md">
          <Image src={Mascot} alt="yo mama" />
        </div>
        <Link href="https://www.google.com" className="absolute bottom-0 mr-3 pb-10">
          <div className="relative mx-5">
            <Image src={Devfolio} alt="drum"  />
            {isDesktop &&
            <div className="absolute top-3 left-9 flex flex-row md:left-6">
                <Image src={Devlogo} alt="drum" className='h-10 pb-2 md:' />
                <div className='w-96'>
                <span className="hover:underline text-purple-700 text-3xl">
                  Apply with Devfolio
                </span>
                </div>
            </div>}
            {!isDesktop &&
            <div className="absolute top-3 left-9 flex flex-row  justify-between">
                <Image src={Devlogo} alt="drum" className='h-10 pb-2' />
                <div className='w-96'>
                <span className="hover:underline text-purple-700 text-2xl ">
                  Apply with Devfolio
                </span>
                </div>
            </div>}
          </div>
        </Link>
        
      </div>
        <div className='text-center max-w-lg pl-4 mt-4'>
          <span className='block'>
            Unleash your creativity and join Status Code 1, an official MLH Member Event and the ultimate 36-hour hackathon extravaganza! Compete across diverse categories, showcasing your skills, ingenuity, and collaborative spirit alongside like-minded individuals. Discover the perfect platform to challenge yourself.</span>
        </div>
        <Image src={arrow} alt="drum" height={40} className='mt-10' />
                
    </div>
  );
};

export default FirstBlock;