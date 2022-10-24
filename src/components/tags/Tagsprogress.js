import React from "react";

const Tagsprogress = (props) => {
  return <div className="px-1 w-2/4 hover:cursor-default font-medium rounded-full text-sm py-1 bg-amber-100 border text-center border-yellow-500">{props.children}</div>;
};

export default Tagsprogress;
