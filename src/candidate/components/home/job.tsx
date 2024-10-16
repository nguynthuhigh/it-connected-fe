import React from "react";
import Salary from "../../assets/svg/salary.svg";
import WorkType from "../../assets/svg/working.svg";
import Location from "../../assets/svg/location.svg";
import JobVariantHome from "../variant/job-variant-home";
const Job: React.FC = () => {
  return (
    <JobVariantHome type="new">
      <div className=" space-y-2 p-4 ">
        <div className="flex font-semibold items-center">
          <img
            className="w-[40px h-[40px] rounded-lg"
            src="https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9"
          ></img>
          <div className="ml-2">
            <h1 className="text-gray-500">Pointer Wallet</h1>
            <div>
              <h1 className="truncate w-[210px]">
                Senior Software Engineer Python, Node.JS, HTML, CSS
              </h1>
            </div>
          </div>
        </div>
        <div>Python</div>
        <div className="font-semibold text-sm">
          <div className="flex items-center">
            <img src={Salary}></img>
            <h1 className="ml-2">Up to 500,000,000đ</h1>
          </div>
          <div className="flex items-center">
            <img src={WorkType}></img>
            <h1 className="ml-2">Remote</h1>
          </div>
        </div>
        <p className="text-[10px] text-gray-500 font-semibold">
          ONE OF THE TOP ICT JAPANESE COMPANIES IN VIETNAM NEC established its
          liaison office in Vietnam in the early 1990s. In line with its growth
          strategy, it was re-organized as NEC Vietnam Co., Ltd. in 2006,
        </p>
      </div>
      <div className="bg-white flex justify-between p-2 rounded-b-[20px] text-sm font-semibold">
        <div className="flex space-x-1">
          <img src={Location}></img>
          <h1>Ho Chi Minh City</h1>
        </div>
        <h1 className="text-blue-main">Posted 2 days ago</h1>
      </div>
    </JobVariantHome>
  );
};

export default Job;
