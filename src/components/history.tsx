"use client"
import React from 'react';
import Historypic from '../../public/history.svg';
import Image from 'next/image';

interface Props {
  id: string;
}

const History:React.FC<Props> = ({id}) => {
  return (
    <div className='mt-20 mx-10'>
      <h1 className='text-3xl mb-10 text-gray-500'>
        $ man StatusCode 1
      </h1>
    <div className='flex flex-col justify-center items-center'>
      
      <Image src={Historypic} alt='yo mama' height={900} />
    </div>
    </div>
  );
};

export default History;
