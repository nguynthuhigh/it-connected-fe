import React from "react";
import Salary from "../../assets/svg/salary.svg";
import Working from "../../assets/svg/working.svg";
import Location from "../../assets/svg/location.svg";

const RecruitmentInfo: React.FC = () => {
  return (
    <div className="font-inter relative font-semibold p-4 border border-[#9187FF] rounded-lg bg-[#D3EAFF] md:max-w-[full] ">
      <h1 className="text-sm text-gray-500">Posted 2 days ago</h1>
      <h1>Senior Software Engineer, Backend (Py, NodeJS, Java)</h1>
      <div className="flex py-2 items-center">
        <img
          className="mr-2 w-10 h-10"
          src="https://i.imgur.com/5cYzRrm.png"
        ></img>
        <h1 className="text-gray-500">Pointer Wallet</h1>
      </div>
      <div>
        <ul className="text-sm">
          <li className="flex">
            <img className="mr-2" src={Salary} alt="salary icon"></img>
            <h1>Up to 500,000,000đ</h1>
          </li>
          <li className="flex">
            <img className="mr-2" src={Working} alt="work icon"></img>
            <h1>Remote</h1>
          </li>
          <li className="flex">
            <img className="mr-2" src={Location} alt="location icon"></img>
            <h1>Ho Chi Minh City</h1>
          </li>
        </ul>
      </div>
      <div className="my-2 flex space-x-1">
        <div className="py-[5px] px-[10px] text-sm border bg-white rounded-full border-[#7C7A7A] w-fit">
          Python
        </div>
        <div className="py-[5px] px-[10px] text-sm border bg-white rounded-full border-[#7C7A7A] w-fit">
          Python
        </div>
        <div className="py-[5px] px-[10px] text-sm border bg-white rounded-full border-[#7C7A7A] w-fit">
          Python
        </div>
      </div>
      <ul className="list-disc ml-4">
        <li>13-month Salary, Performance Bonus, Stock Reward</li>
        <li>Remote work, Family-covered Healthcare, GrabFlex</li>
        <li>Global & Large-scale Systems With Billion Of Data</li>
      </ul>
      <div className="absolute  top-0 right-0 mt-2">
        <div className=" bg-orange-500 text-white py-1 px-2 rounded-l-sm text-sm">
          HOT
        </div>
      </div>
    </div>
  );
};

export default RecruitmentInfo;
