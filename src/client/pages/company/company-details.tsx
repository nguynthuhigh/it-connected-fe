import React from "react";
import RecruitmentInfo from "../../components/company/recruitment-info";
import GeneralInfo from "../../components/company/general-info";
import CompanyInfo from "../../components/company/company-info";

const CompanyDetails: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <GeneralInfo></GeneralInfo>
      <div className="container-default md:flex justify-between">
        <CompanyInfo></CompanyInfo>
        <div className="md:w-[35%] space-y-4">
          <RecruitmentInfo></RecruitmentInfo>
          <RecruitmentInfo></RecruitmentInfo>
          <RecruitmentInfo></RecruitmentInfo>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
