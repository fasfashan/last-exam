import React from "react";

const Tagsprogress = (props) => {
  return <div className="px-2 py-1 hover:cursor-default font-semibold rounded-full text-xs py-1 bg-amber-100 border text-center border-yellow-500">{props.children}</div>;
};

export default Tagsprogress;
