import React from 'react';
import JobHeader from '../../components/job-details/JobHeader';
import JobMainContent from '../../components/job-details/JobMainContent';
import CompanySidebar from '../../components/job-details/CompanySidebar';
import './JobDetail.css'; 
const JobDetail: React.FC = () => {
  return (
    <div className="job-detail-container md:flex">
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
