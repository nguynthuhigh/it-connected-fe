import React, { useState } from 'react';

import JobTitleInput from '../../components/add-new-post/job-title-input';
import SalaryInput from '../../components/add-new-post/salary-input';
import SkillSelect from '../../components/add-new-post/skill-select';
import LocationSelect from '../../components/add-new-post/location-select';
import DescriptionJob from '../../components/add-new-post/description-job';

const AddNewPost: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [skill, setSkill] = useState('');
  const [location, setLocation] = useState('');
  const [visibility, setVisibility] = useState('public');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ jobTitle, salary, skill, location, visibility });
  };

  return (
    <div className="flex">
      <div className="flex-1 p-6 ">
        <h1 className="text-2xl font-bold mb-6">Add new post</h1>

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <JobTitleInput value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          <SalaryInput value={salary} onChange={(e) => setSalary(e.target.value)} />
          <SkillSelect value={skill} onChange={(e) => setSkill(e.target.value)} />
          <LocationSelect value={location} onChange={(e) => setLocation(e.target.value)} />
          <DescriptionJob />

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Visibility</label>
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="public"
                name="visibility"
                value="public"
                checked={visibility === 'public'}
                onChange={() => setVisibility('public')}
                className="mr-2"
              />
              <label htmlFor="public" className="text-gray-700">Public</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="private"
                name="visibility"
                value="private"
                checked={visibility === 'private'}
                onChange={() => setVisibility('private')}
                className="mr-2"
              />
              <label htmlFor="private" className="text-gray-700">Private</label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewPost;
