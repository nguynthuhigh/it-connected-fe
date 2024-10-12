import React from "react";
import { Link } from "react-router-dom";
const SideBarPart: React.FC<{
  state: string;
  link: string | "";
  isSelected: boolean;
  Icon: React.ComponentType;
  IconGray: React.ComponentType;
}> = ({ state, link, isSelected, Icon, IconGray }) => {
  return (
    <Link to={link} className="my-2 w-full flex h-[50px]">
      <div
        className={`flex h-full w-full items-center rounded-md  px-4 transition-colors duration-300 ${
          isSelected ? "bg-blue-main hover:bg-blue-400" : "hover:bg-gray-100"
        }`}
      >
        {!isSelected ? <IconGray></IconGray> : <Icon></Icon>}
        <h1
          className={`font-semibold ml-2 transition-colors duration-300 ${
            isSelected ? "text-white" : "text-gray-main"
          }`}
        >
          {state}
        </h1>
      </div>
    </Link>
  );
};

export default SideBarPart;
