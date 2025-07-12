import React from 'react';

function SeeMore({ href }) {
  return (
    <a
      href={href}
      className="relative text-right text-white text-2xl hover:scale-[1.01] transition"
      target="_blank"
      rel="noreferrer"
    >
      More ➕
    </a>
  );
}

export default SeeMore;
