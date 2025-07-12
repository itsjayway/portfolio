import React from 'react';
import Chip from './Chip';
import { useIsMobileViewport } from '../hooks/useIsMobileViewport';

function Project({ data }) {
  const isMobile = useIsMobileViewport(1380);
  return (
    <div className="flex flex-col gap-y-3">
      <a
        className="flex flex-col hover:scale-[1.01] transition"
        href={data.href}
        target="_blank"
        rel="noreferrer"
      >
        <h1 className="text-white text-2xl md:text-3xl">{data.projectName}</h1>
        <hr className="border-gray-700 mt-1 mb-2" />
        {data.topics && (
          <h1 className="text-highlight-dark text-xl md:text-2xl">
            {data.topics.join(', ')}
          </h1>
        )}
        <div className={`flex flex-col w-[${isMobile ? '100%' : '80%'}]`}>
          <h1 className="text-white text-xl">{data.description}</h1>
        </div>
      </a>
      <div className="flex gap-x-2 flex-wrap">
        {data.technologies
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((technology) => (
            <Chip
              key={`${data.projectName}-${technology.label}`}
              label={technology.label}
              color={technology.color}
            />
          ))}
      </div>
    </div>
  );
}

export default Project;
