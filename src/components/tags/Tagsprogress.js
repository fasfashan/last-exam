import React from "react";

const Tagsprogress = (props) => {
  return <div className="px-2 py-1 hover:cursor-default select-none font-semibold rounded-full text-xs  bg-amber-100 border text-center border-yellow-500">{props.children}</div>;
};

export default Tagsprogress;
