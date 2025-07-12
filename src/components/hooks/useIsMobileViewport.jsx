import { useEffect, useState } from 'react';

const DEFAULT_MOBILE_BREAKPOINT = 1120;

export const useIsMobileViewport = (breakpoint = DEFAULT_MOBILE_BREAKPOINT) => {
  // This is used to determine is the viewport is narrow enough for certain elements to be displayed differently.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);
  return isMobile;
};
