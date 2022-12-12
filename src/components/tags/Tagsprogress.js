import React from "react";

const Tagsprogress = (props) => {
  return <div className="px-3 py-1 hover:cursor-default select-none font-semibold rounded-full text-xs  bg-slate-800  text-cyan-300 tracking-wide text-center ring-1 ring-slate-400">{props.children}</div>;
};

export default Tagsprogress;
