import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from './ui/sheet'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image';
import logo from '../../public/logo.svg';
import Link from 'next/link';
import col from '../../public/col.svg';
const NavbarMobile = () => {
  return (
    <div className=' h-[70px] z-5000 flex items-center justify-between px-4 mt-5'>
      <div className="flex items-center"> {/* Logo */}
        <Image src={logo} alt="Next.js Logo" height={60} />
      </div>
    <Sheet>
        <SheetTrigger asChild>
        <Button size='icon' variant='ghost' className="mr-5">
          <Menu size={30}  />
        </Button>
        </SheetTrigger>
        <SheetContent hideClose className='mx-auto' side="left">
          <SheetHeader className='flex flex-row justify-between items-center'>
            
              <Image src={logo} alt="Next.js Logo" height={60} />
              <SheetClose className='right-0 top-0' asChild>
                <Button className="h-10 w-10 p-0" variant="ghost">
                  <X size={30}/>
                </Button>
              </SheetClose>
              
            
            </SheetHeader>
            <div className='flex items-center flex-col text-white px-5'>
                <Button className='text-white w-full mt-5 roundedp' variant='outline'>
                  <Link href="https://www.google.com/" >Shedule</Link>
                </Button>
                <Button className='text-white w-full mt-5' variant='outline'>
                  <Link href="https://www.google.com/">Tracks</Link>
                </Button>
                <Button className='text-white w-full mt-5' variant='outline'>
                  <Link href="https://www.google.com/">Prizes</Link>
                </Button>
                <Button className='text-white w-full mt-5' variant='outline'>
                  <Link href="https://www.google.com/">More</Link>
                </Button>
            </div>
            <SheetFooter>
              <div className='w-full flex justify-center'>
              <Image src={col} className='mx-auto mb-5 w-64 fixed bottom-0 flex items-center' alt='yo mama'/>
              </div>
            </SheetFooter>
          </SheetContent>
    </Sheet>
    </div>
  )
}

export default NavbarMobile