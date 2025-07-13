import React from 'react';
import Chip from './Chip';
import { useIsMobileViewport } from '../hooks/useIsMobileViewport';
import { classes } from '../../utils/classes';
import {
  CARD_ITEM_DESCRIPTION,
  CARD_ITEM_SUBTITLE,
  CARD_ITEM_TITLE,
  HOVER_SCALE
} from '../../utils/classConstants';

function Project({ data }) {
  const isMobile = useIsMobileViewport(1380);
  return (
    <div className="flex flex-col gap-y-3">
      <a
        className={classes(HOVER_SCALE, 'flex flex-col')}
        href={data.href}
        target="_blank"
        rel="noreferrer"
      >
        <h1 className={classes(CARD_ITEM_TITLE)}>{data.projectName}</h1>
        <hr className="border-gray-700 mt-1 mb-2" />
        {data.topics && (
          <h1 className={classes(CARD_ITEM_SUBTITLE)}>
            {data.topics.join(', ')}
          </h1>
        )}
        <div className={`flex flex-col w-[${isMobile ? '100%' : '80%'}]`}>
          <h1 className={classes(CARD_ITEM_DESCRIPTION)}>{data.description}</h1>
        </div>
      </a>
      <div className="flex gap-x-2 gap-y-1 flex-wrap">
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
