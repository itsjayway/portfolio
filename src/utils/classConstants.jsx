import { classes } from './classes';

let REDUCED_MOTION_PREFERRED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


let HOVER_SCALE = REDUCED_MOTION_PREFERRED ? '' : 'hover:scale-[1.02] transition';
let WORK_DESC_SLIDE = REDUCED_MOTION_PREFERRED
  ? ''
  : 'transition-all duration-200 ease-in-out';

const CARD_TITLE =
  'text-center text-white text-2xl md:text-4xl xl:text-4xl font-bold';
const CARD_ITEM_TITLE =
  'text-white text-3xl md:text-3xl xl:text-4xl whitespace';
const CARD_ITEM_SUBTITLE =
  'text-gray-400 text-xl md:text-2xl xl:text-3xl whitespace-nowrap';
const CARD_ITEM_DESCRIPTION =
  'text-gray-300 text-xl md:text-xl xl:text-2xl whitespace-pre-wrap';

const DRAWER_BUTTON = classes(
  CARD_ITEM_SUBTITLE,
  'text-center border-2 border-gray-600 rounded-lg px-4 py-2 transition-all duration-200 ease-in-out hover:bg-gray-600 hover:text-white'
);

const MORE_BUTTON = classes(DRAWER_BUTTON, HOVER_SCALE, 'border-0 text-right');

export {
  CARD_TITLE,
  CARD_ITEM_TITLE,
  CARD_ITEM_SUBTITLE,
  CARD_ITEM_DESCRIPTION,
  DRAWER_BUTTON,
  MORE_BUTTON,
  REDUCED_MOTION_PREFERRED,
  HOVER_SCALE,
  WORK_DESC_SLIDE
};
