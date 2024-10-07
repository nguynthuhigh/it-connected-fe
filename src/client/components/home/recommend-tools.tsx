import React from "react";
import ToolAI from "../../assets/svg/tool-ai.svg";
import ToolCV from "../../assets/svg/tool-cv.svg";

const RecommendTools = () => {
  return (
    <div className="mx-auto max-w-[1000px] space-y-12 ">
      <h1 className="font-semibold text-4xl text-center">
        <span className="text-blue-main">Tools </span>
        For Your Application Journey
      </h1>
      <div className="md:flex md:justify-between max-md:space-y-4">
        <div className="border-[3px] flex rounded-full md:max-w-[450px] w-full p-3 border-blue-main">
          <img src={ToolAI}></img>
          <div className="font-semibold ml-3">
            <h1 className="text-lg">Recommend Jobs With AI</h1>
            <h1 className="text-gray-500">AI-powered</h1>
          </div>
        </div>
        <div className="border-[3px] flex rounded-full md:max-w-[450px] w-full p-3 border-blue-main ">
          <img src={ToolCV}></img>
          <div className="font-semibold ml-3">
            <h1 className="text-lg">CV Templates</h1>
            <h1 className="text-gray-500">Generate professional IT CV </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendTools;
