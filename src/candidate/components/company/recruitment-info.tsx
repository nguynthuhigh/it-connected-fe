import React from "react";
import Salary from "../../assets/svg/salary.svg";
import Working from "../../assets/svg/working.svg";
import Location from "../../assets/svg/location.svg";
import JobVariant from "../variant/job-variant";
import SkillVariant from "../variant/skill-variant";
interface RecruitmentInfoProps {
  type: string;
}
const RecruitmentInfo: React.FC<RecruitmentInfoProps> = ({ type }) => {
  return (
    <div className="font-inter font-semibold  md:max-w-[full] ">
      <JobVariant type={type}>
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
        <div className="my-2 flex space-x-2">
          <SkillVariant skill="python"></SkillVariant>
          <SkillVariant skill="nodejs"></SkillVariant>
          <SkillVariant skill="react"></SkillVariant>
          <SkillVariant skill="python"></SkillVariant>
        </div>
        <ul className="list-disc ml-4">
          <li>13-month Salary, Performance Bonus, Stock Reward</li>
          <li>Remote work, Family-covered Healthcare, GrabFlex</li>
          <li>Global & Large-scale Systems With Billion Of Data</li>
        </ul>
      </JobVariant>
    </div>
  );
};

export default RecruitmentInfo;
