import React from 'react';

function Card({ children }) {
  return (
    <div className="flex flex-col bg-gray-800 p-10 w-[100%] max-w-[100vw] lg:w-full rounded-[5rem] shadow-2xl gap-y-5">
      {children}
    </div>
  );
}

export default Card;
