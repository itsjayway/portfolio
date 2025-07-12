import React, { useState } from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ContactPageIcon from '@mui/icons-material/ContactPage';

import Card from './Card';
import { useIsMobileViewport } from '../hooks/useIsMobileViewport';

function Links() {
  const [currentHoverText, setCurrentHoverText] = useState('');
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const isMobileViewport = useIsMobileViewport(1024);

  const handleOnOver = (text) => {
    setCurrentHoverText(text);
    setHoverOpacity(1);
  };

  const handleOnLeave = () => {
    setHoverOpacity(0);
  };

  return (
    <Card fit>
      <div className="flex justify-between space-x-5 ">
        {!isMobileViewport && (
          <div className="flex justify-center items-center w-[50%] h-[5rem] bg-accent-dark rounded-full">
            <h1
              style={{
                opacity: hoverOpacity
              }}
              className="text-highlight-dark text-center text-3xl transition-opacity duration-300 ease-in-out min-w-[6rem]"
            >
              {currentHoverText}
            </h1>
          </div>
        )}
        <div
          className={`flex w-[${
            isMobileViewport ? '100%' : '50%'
          }] items-center justify-around gap-x-5`}
        >
          {[
            {
              text: 'Resume',
              icon: <ContactPageIcon fontSize="large" />,
              url: 'https://docs.google.com/document/d/1dTlTfcvh22E7DuyFY6Udh5R-R76_Y5iF/edit?usp=sharing&ouid=115838565990942913396&rtpof=true&sd=true'
            },
            {
              text: 'LinkedIn',
              icon: <LinkedInIcon fontSize="large" />,
              url: 'https://www.linkedin.com/in/jibrana/'
            },
            {
              text: 'GitHub',
              icon: <GitHubIcon fontSize="large" />,
              url: 'https://github.com/itsjayway'
            },
            {
              text: 'Contributions',
              icon: <HandshakeIcon fontSize="large" />,
              url: 'https://github.com/stars/itsjayway/lists/contributions'
            }
          ].map((link) => (
            <a
              className=" text-accent-dark hover:text-highlight-dark transition duration-300 ease-in-out"
              key={link.text}
              href={link.url}
              onMouseEnter={() => handleOnOver(link.text)}
              onMouseLeave={() => handleOnLeave()}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default Links;
