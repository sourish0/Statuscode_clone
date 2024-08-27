'use client';

import React, { useState } from 'react';

interface Props {
  id: string;
}


const Menu: React.FC<Props> = ({id}) => {
  const [selectedTab, setSelectedTab] = useState<string>('Notifications');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className='mx-10 mt-20'>
      <h1 className='text-3xl mb-10 text-gray-500'>
        $ ls -a TRACKS.txt
      </h1>
    <div className="mx-10 md:mx-20 lg:mx-40 border-t-8 border-b-8 border-l-4 border-r-4 mt-10 md:mt-20 border-gray-800">
      
      <div className="border-b border-t-8">
        <nav className="-mb-px flex flex-wrap md:gap-6 justify-around bg-white">
        {[
            'MEDICAL',
            'Wildlife and Environment',
            'Education',
            'Auth0',
            'Web 3.0',
            'Open Innovation',
            'Hardware'
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`shrink-0 border p-2 md:p-3 text-sm font-medium ${
                selectedTab === tab
                  ? 'bg-black text-white border-b-black'
                  : 'border-transparent text-black hover:text-black dark:text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      <div className="p-10">
      {selectedTab === 'MEDICAL' && (
          <div>
            <p>
              In this track, participants work on developing software solutions related to healthcare and medicine. They might build
              applications that help patients manage their health, or tools that assist healthcare providers in diagnosing and treating
              patients.
            </p>
          </div>
        )}
        {selectedTab === 'Wildlife and Environment' && (
          <div>
            <p>
              This track focuses on solutions that support wildlife conservation and environmental protection. Participants might develop
              applications that monitor wildlife populations, track environmental changes, or promote sustainable practices.
            </p>
          </div>
        )}
        {selectedTab === 'Education' && (
          <div>
            <p>
              In the Education track, participants create tools and platforms that enhance learning experiences. Projects may include
              educational apps, learning management systems, or innovative teaching resources.
            </p>
          </div>
        )}
        {selectedTab === 'Auth0' && (
          <div>
            <p>
              This track is centered around authentication and authorization solutions using Auth0. Participants might build secure
              login systems, implement multi-factor authentication, or explore identity management.
            </p>
          </div>
        )}
        {selectedTab === 'Web 3.0' && (
          <div>
            <p>
              The Web 3.0 track explores decentralized applications and blockchain technologies. Participants may develop decentralized
              apps (dApps), smart contracts, or blockchain-based solutions for various industries.
            </p>
          </div>
        )}
        {selectedTab === 'Open Innovation' && (
          <div>
            <p>
              In the Open Innovation track, participants work on a wide range of innovative projects that don't fit into other specific
              categories. This track encourages creativity and out-of-the-box thinking.
            </p>
          </div>
        )}
        {selectedTab === 'Hardware' && (
          <div>
            <p>
              This track is dedicated to hardware projects. Participants might work on developing new devices, prototyping hardware
              solutions, or integrating hardware with software applications.
            </p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Menu;
