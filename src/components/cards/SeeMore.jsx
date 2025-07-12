import React from 'react';
import { classes } from '../../utils/classes';
import { MORE_BUTTON } from '../../utils/classConstants';

function SeeMore({ href }) {
  return (
    <a className="text-right" href={href} target="_blank" rel="noreferrer">
      <button className={classes(MORE_BUTTON, 'border-0 text-right')}>
        More ➕
      </button>
    </a>
  );
}

export default SeeMore;
