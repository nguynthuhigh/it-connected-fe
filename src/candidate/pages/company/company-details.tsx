import React from "react";
import RecruitmentInfo from "../../components/company/recruitment-info";
import GeneralInfo from "../../components/company/general-info";
import CompanyInfo from "../../components/company/company-info";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CompanyReview from "../../components/company/company-review";
import CompanyLocation from "../../components/company/company-location";
const CompanyDetails: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <GeneralInfo></GeneralInfo>
      <div className="container-default ">
        <Tabs selectedTabClassName="border-b-[2px] border-red-500 text-red-500">
          <TabList className={`flex p-4 font-bold font-inter`}>
            <Tab className={`p-2 cursor-pointer outline-none`}>Overview</Tab>
            <Tab className={`p-2 cursor-pointer outline-none`}>Reviews</Tab>
          </TabList>

          <TabPanel>
            <div className="md:flex justify-between">
              <div className="md:w-[64%]">
                <CompanyInfo></CompanyInfo>
                <CompanyLocation />
              </div>
              <div className="md:w-[35%] space-y-4">
                <RecruitmentInfo type="hot"></RecruitmentInfo>
                <RecruitmentInfo type="super-hot"></RecruitmentInfo>
                <RecruitmentInfo type="new"></RecruitmentInfo>
                <RecruitmentInfo type="normal"></RecruitmentInfo>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="md:flex justify-between">
              <CompanyReview></CompanyReview>
              <div className="md:w-[35%] space-y-4">
                <RecruitmentInfo type="hot"></RecruitmentInfo>
                <RecruitmentInfo type="super-hot"></RecruitmentInfo>
                <RecruitmentInfo type="new"></RecruitmentInfo>
                <RecruitmentInfo type="normal"></RecruitmentInfo>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyDetails;
