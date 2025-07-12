import React from 'react';

/*
  'bg-red-300','hover:bg-red-500','text-red-800','border-red-700',
  'bg-orange-300','hover:bg-orange-500','text-orange-800','border-orange-700',
  "bg-amber-300","hover:bg-amber-500","text-amber-800","border-amber-700",
  'bg-yellow-300','hover:bg-yellow-500','text-yellow-800','border-yellow-700',
  'bg-lime-300','hover:bg-lime-500','text-lime-800','border-lime-700',
  "bg-green-300","hover:bg-green-500","text-green-800","border-green-700",
  "bg-emerald-300","hover:bg-emerald-500","text-emerald-800","border-emerald-700",
  'bg-teal-300','hover:bg-teal-500','text-teal-800','border-teal-700',
  "bg-cyan-300","hover:bg-cyan-500","text-cyan-800","border-cyan-700",
  "bg-sky-300","hover:bg-sky-500","text-sky-800","border-sky-700",
  'bg-blue-300','hover:bg-blue-500','text-blue-800','border-blue-700',
  "bg-indigo-300","hover:bg-indigo-500","text-indigo-800","border-indigo-700",
  "bg-violet-300","hover:bg-violet-500","text-violet-800","border-violet-700",
  'bg-purple-300','hover:bg-purple-500','text-purple-800','border-purple-700',
  "bg-fuchsia-300","hover:bg-fuchsia-500","text-fuchsia-800","border-fuchsia-700",
  "bg-pink-300","hover:bg-pink-500","text-pink-800","border-pink-700",
  'bg-rose-300','hover:bg-rose-500','text-rose-800','border-rose-700',
  'bg-slate-300','hover:bg-slate-500','text-slate-800','border-slate-700',
  "bg-gray-300","hover:bg-gray-500","text-gray-800","border-gray-700",
  "bg-zinc-300","hover:bg-zinc-500","text-zinc-800","border-zinc-700",
  "bg-neutral-300","hover:bg-neutral-500","text-neutral-800","border-neutral-700",
  'bg-stone-300','hover:bg-stone-500','text-stone-800','border-stone-700',
*/
function Chip({ label, color = null, useUrl = true }) {
  const bgNum = 300;
  const hoverBgNum = 500;
  const textNum = 800;
  const borderNum = 700;
  const className = `font-sans bg-${color}-${bgNum} hover:bg-${color}-${hoverBgNum} text-lg-${textNum} text-${color}-800 border-${color}-${borderNum} text-center text-lg rounded-full border-2 pl-2 pr-2 pt-1 pb-1 whitespace-nowrap`;
  const titleLabel = `${label.charAt(0).toUpperCase()}${label.slice(1)}`;
  let urlParam = label;
  if (label === 'react') {
    urlParam = 'javascript';
  }
  return (
    <a
      href={`https://github.com/itsjayway?tab=repositories&q=&type=&language=${urlParam}&sort=`}
      target="_blank"
      className={className}
      rel="noreferrer"
    >
      {titleLabel}
    </a>
  );
}

export default Chip;
