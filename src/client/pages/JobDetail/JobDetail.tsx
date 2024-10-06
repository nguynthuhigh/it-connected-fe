import React from 'react';
import JobHeader from '../../components/JobDetail/JobHeader';
import JobMainContent from '../../components/JobDetail/JobMainContent';
import CompanySidebar from '../../components/JobDetail/CompanySidebar';
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
