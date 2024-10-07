import React from "react";
import Job from "./job";

const TopJob = () => {
  return (
    <div className="space-y-12">
      <h1 className="font-semibold text-4xl text-center">
        Top
        <span className="text-blue-main"> Jobs </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {Array(8)
          .fill(null)
          .map(() => (
            <Job></Job>
          ))}
      </div>
    </div>
  );
};

export default TopJob;
