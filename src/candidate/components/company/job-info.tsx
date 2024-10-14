import React from "react";
import Salary from "../../assets/svg/salary.svg";
import Working from "../../assets/svg/working.svg";
import Location from "../../assets/svg/location.svg";
import JobVariant from "../variant/job-variant";
import SkillVariant from "../variant/skill-variant";
interface JobInfoProps {
  type: string;
  title: string;
  description: string;
  experience: string;
  environment: string;
  level: string;
  salary: string;
  work_type: string;
  special: string;
  is_public: boolean;
  author: string;
  companyID: number;
  name: string;
  logo: string;
  search?: string;
}
const JobInfo: React.FC<JobInfoProps> = (props) => {
  return (
    <div className="font-inter font-semibold  md:max-w-[full] break-inside-avoid-column mb-5">
      <JobVariant type={props.type}>
        <h1 className="text-sm text-gray-500">Posted 2 days ago</h1>
        <h1>{props.title}</h1>
        <div className="flex py-2 items-center">
          <img className="mr-2 w-10 h-10 object-cover" src={props.logo}></img>
          <h1 className="text-gray-500">{props.name}</h1>
        </div>
        <div>
          <ul className="text-sm font-medium">
            <li className="flex">
              <img className="mr-2" src={Salary} alt="salary icon"></img>
              <h1>{props.salary}</h1>
            </li>
            <li className="flex">
              <img className="mr-2" src={Working} alt="work icon"></img>
              <h1>{props.work_type}</h1>
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
        </div>
        {props.search ? (
          props.type === "super-hot" && (
            <ul className="list-disc marker:bg-red-500 ml-4 text-sm">
              <li>13-month Salary, Performance Bonus, Stock Reward</li>
              <li>Remote work, Family-covered Healthcare, GrabFlex</li>
              <li>Global & Large-scale Systems With Billion Of Data</li>
            </ul>
          )
        ) : (
          <ul className="list-disc marker:bg-red-500 ml-4 text-sm">
            <li>13-month Salary, Performance Bonus, Stock Reward</li>
            <li>Remote work, Family-covered Healthcare, GrabFlex</li>
            <li>Global & Large-scale Systems With Billion Of Data</li>
          </ul>
        )}
      </JobVariant>
    </div>
  );
};

export default JobInfo;
