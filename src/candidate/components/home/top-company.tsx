import React from "react";
import Company from "./company";

const TopCompany: React.FC = () => {
  return (
    <div className="space-y-12 ">
      <h1 className="font-semibold text-4xl text-center">
        Top
        <span className="text-blue-main"> Companies </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 ">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <Company key={index}></Company>
          ))}
      </div>
    </div>
  );
};

export default TopCompany;
