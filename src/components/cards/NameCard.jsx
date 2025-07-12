import React from 'react';
import { motion } from 'framer-motion';

import Card from './Card';

function NameCard() {
  const title = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.3
      }
    }
  };

  const text = {
    hidden: { y: 5, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <Card>
        <div className="flex flex-row justify-center items-center gap-x-5">
          <motion.div
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
          </motion.div>
          <motion.ul
            className="flex flex-col h-[100%] justify-center"
            variants={title}
            initial="hidden"
            animate="visible"
          >
            <motion.li
              variants={text}
              className="text-white sm: text-4xl text-5xl md:text-4xl xl:text-5xl font-bold whitespace-nowrap"
            >
              Jibran A.
            </motion.li>
            <motion.li
              variants={text}
              className=" text-white text-xl md:text-2xl xl:text-3xl whitespace-nowrap"
            >
              Software Engineer
            </motion.li>
          </motion.ul>
        </div>
      </Card>
    </>
  );
}

export default NameCard;
