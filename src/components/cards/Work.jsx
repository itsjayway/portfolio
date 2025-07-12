import React from 'react';
import { useIsMobileViewport } from '../hooks/useIsMobileViewport';

function RenderDate(data, isMobile) {
  let startDate, endDate;
  if (isMobile) {
    startDate = data.start_date_formatted;
    endDate = data.end_date_formatted;
  } else {
    startDate = data.start_date;
    endDate = data.end_date;
  }

  return (
    <h1 className="text-gray-400 text-lg md:text-xl">
      {startDate} - {endDate}
    </h1>
  );
}

function RenderLogo(data) {
  return (
    <img
      className={`object-fit w-[8rem] ${data.circular ? 'rounded-full' : ''}`}
      src={data.filepath}
      loading="lazy"
      alt={data.company_name}
    />
  );
}

function Work({ data, dropdownIsOpen, setDropdownIsOpen }) {
  const handleDropdownToggle = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  const isMobile = useIsMobileViewport(1380);
  return (
    <div
      onClick={handleDropdownToggle}
      className={`flex flex-col items-center ${
        data.description ? 'cursor-pointer' : ''
      }
      ${dropdownIsOpen ? 'hover:scale-[1.01] transition' : ''}
      `}
    >
      <div
        className={`flex justify-between bg-gray-700 gap-x-5 p-5 rounded-[1.25rem] transition w-[100%]
        ${!dropdownIsOpen ? 'hover:scale-[1.01]' : ''}
        `}
      >
        {!isMobile && (
          <div className="flex items-center justify-center basis-[28%] shrink-0 grow-0">
            {RenderLogo(data)}
          </div>
        )}

        <div
          className={`flex flex-col justify-center basis-[70%] shrink-0 grow-0`}
        >
          <div className="mb-1">
            <h1 className="text-white text-2xl md:text-3xl">
              {data.company_name}
            </h1>
            {RenderDate(data)}
          </div>
          <h2 className="text-gray-200 text-xl md:text-2xl">{data.title}</h2>
        </div>
      </div>
      <div
        className={`w-[90%] justify-between p-5 rounded-br-[1.25rem] rounded-bl-[1.25rem] shadow-lg bg-gradient-to-b from-gray-700 to-gray-600
    transition-all duration-200 ease-in-out overflow-hidden
    ${dropdownIsOpen ? 'opacity-100 py-5' : 'max-h-0 opacity-0 py-0'}
  `}
      >
        <p className="italic text-gray-300 text-xl lg:text-2xl ">
          {data.description}
        </p>
      </div>
    </div>
  );
}

export default Work;
