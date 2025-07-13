import React from 'react';
import { classes } from '../../utils/classes';
import { MORE_BUTTON } from '../../utils/classConstants';

function SeeMore({ href }) {
  return (
    <a className="text-right items-center" href={href} target="_blank" rel="noreferrer">
      <button className={classes(MORE_BUTTON)}>
        More
        <img
          src="/images/newtab.png"
          alt="Open in new tab"
          className="inline-block ml-2 w-4 h-4"
        />
      </button>
    </a>
  );
}

export default SeeMore;
