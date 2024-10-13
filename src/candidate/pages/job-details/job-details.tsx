import React from "react";
import JobHeader from "../../components/job-details/job-header";
import JobMainContent from "../../components/job-details/job-content";
import CompanySidebar from "../../components/job-details/company-sidebar";
const JobDetail: React.FC = () => {
  return (
    <div className="container-default md:flex">
      <div className="md:w-2/3 p-4">
        <JobHeader />
        <JobMainContent />
      </div>
      <div className="md:w-1/3 p-4">
        <CompanySidebar />
      </div>
    </div>
  );
};

export default JobDetail;
