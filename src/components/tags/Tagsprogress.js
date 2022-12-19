import React from "react";

const Tagsprogress = (props) => {
  return <div className="px-2 py-1  font-semibold rounded-full text-xs  bg-sky-600  text-white tracking-wide text-center ring-1 ring-sky-100">{props.children}</div>;
};

export default Tagsprogress;
