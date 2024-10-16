import React from "react";
import SkillVariant from "../variant/skill-variant";
import Star from "../../assets/svg/star.svg";
import Location from "../../assets/svg/location.svg";
import { Link } from "react-router-dom";
const skills = [
  {
    slug: "nodejs",
    name: "b",
  },
  {
    slug: "java",
    name: "b",
  },
  {
    slug: "python",
    name: "b",
  },
];
const Company: React.FC = () => {
  return (
    <Link to="company">
      <div className="w-full font-in cursor-pointer bg-white rounded-[25px] p-4 space-y-3 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150">
        <div className="flex items-center">
          <img
            className="w-[70px] h-[70px] rounded-[20px]"
            src="https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9"
          ></img>
          <div className="font-semibold ml-4">
            <h1 className="text-2xl">Facebook</h1>
            <h1>Non-IT</h1>
          </div>
          <div className="ml-auto flex items-center">
            <h1 className="font-bold text-xl mr-2">4.5</h1>
            <img src={Star}></img>
          </div>
        </div>
        <div className="flex space-x-3">
          {skills.map((item) => (
            <SkillVariant skill={item.slug}></SkillVariant>
          ))}
        </div>
        <p className="h-18 overflow-hidden text-ellipsis ">
          We’re Hitachi Digital Services, a global digital solutions business.
          We harness digital innovation and a passion for technology to
          co-create meaningful solutions to complex challenges.
        </p>
        <div className="flex justify-between font-semibold">
          <div className="flex space-x-2">
            <img src={Location}></img>
            <h1>Ho Chi Minh City</h1>
          </div>
          <h1 className="text-blue-main">10 Jobs</h1>
        </div>
      </div>
    </Link>
  );
};

export default Company;
