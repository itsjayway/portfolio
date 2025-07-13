import { motion } from 'framer-motion';
import Card from './Card';
import { REDUCED_MOTION_PREFERRED } from '../../utils/classConstants';
const MOTION_AWARE_DIV = REDUCED_MOTION_PREFERRED ? 'div' : motion.div;
const MOTION_AWARE_UL = REDUCED_MOTION_PREFERRED ? 'ul' : motion.ul;
const MOTION_AWARE_LI = REDUCED_MOTION_PREFERRED ? 'li' : motion.li;
function NameCard() {
  const title = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.3 }
    }
  };
  const text = { hidden: { y: 5, opacity: 0 }, visible: { y: 0, opacity: 1 } };
  return (
    <Card>
      <div className="flex flex-row justify-center items-center gap-x-5">
        <MOTION_AWARE_DIV
          className="flex justify-center items-center"
          initial={{ x: -30, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="w-[6rem] lg:w-[8rem] lg:h-[8rem] rounded-full"
            src="https://avatars.githubusercontent.com/u/70596906?v=4"
            alt="avatar"
          />
        </MOTION_AWARE_DIV>
        <MOTION_AWARE_UL
          className="flex flex-col h-[100%] justify-center"
          variants={title}
          initial="hidden"
          animate="visible"
        >
          <MOTION_AWARE_LI
            variants={text}
            className="text-white sm: text-4xl text-5xl md:text-4xl xl:text-5xl font-bold whitespace-nowrap"
          >
            Jibran A.
          </MOTION_AWARE_LI>
          <MOTION_AWARE_LI
            variants={text}
            className="text-white text-xl md:text-2xl xl:text-3xl whitespace-nowrap"
          >
            Software Engineer
          </MOTION_AWARE_LI>
        </MOTION_AWARE_UL>
      </div>
    </Card>
  );
}
export default NameCard;
