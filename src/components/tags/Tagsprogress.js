import React from "react";

const Tagsprogress = (props) => {
  return <div className="px-2 py-1  font-semibold rounded-full text-xs  bg-orange-50  text-warning tracking-wide text-center ring-2 ring-orange-200">{props.children}</div>;
};

export default Tagsprogress;
