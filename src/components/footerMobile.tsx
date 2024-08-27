import React from 'react'
import Link from 'next/link';
import { Instagram, Linkedin, Twitch, Twitter } from 'lucide-react';
import { Separator } from "./ui/separator";

const FooterMobile = () => {
  return (
    <div className='mb-10'>
      <Separator className='mt-20'/>
      <div className='flex flex-col justify-around items-center mt-10 gap-5'>
        <div className='flex flex-col justify-around gap-y-24 text-center'>
          <div className='text-center'>
            <h1 className='text-2xl mb-5'>
              Address
            </h1>
            <div className='flex flex-col items-center'>
              <Link href='/'>
                <p>APC Ray Lecture Hall Complex</p>
                <p>IISER Kolkata</p>
              </Link>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-2xl mb-5'>
              Resources
            </h1>
            <div className='flex flex-col items-center'>
              <Link href='/'>
                <p>Sponsorship Brochure</p>
              </Link>
              <Link href='/'>
                <p>Code of Conduct</p>
              </Link>
              <Link href='/'>
                <p>Community Partner</p>
              </Link>
              <Link href='/'>
                <p>Hacker Guide</p>
              </Link>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-2xl mb-5'>
              Stay Connected
            </h1>
            <div className='flex flex-row items-center gap-5 justify-center'>
              <Link href='/'>
                <Instagram className='text-3xl' />
              </Link>
              <Link href='/'>
                <Linkedin className='text-3xl' />
              </Link>
              <Link href='/'>
                <Twitter className='text-3xl' />
              </Link>
              <Link href='/'>
                <Twitch className='text-3xl' />
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-3'>
          <span className='' >@ IIIT KALYANI 2023</span>
        </div>
        
      </div>
      
    </div>
  )
}

export default FooterMobile