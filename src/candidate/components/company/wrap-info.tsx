import React from "react";
interface ParentProps {
  children: React.ReactNode;
  title: string;
}
const WrapInfo: React.FC<ParentProps> = (props) => {
  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <h1 className="font-semibold text-xl  pb-3"> {props.title}</h1>
      <div className="mt-1 mb-4 border-b-[1px] border-dashed"></div>
      {props.children}
    </div>
  );
};

export default WrapInfo;
