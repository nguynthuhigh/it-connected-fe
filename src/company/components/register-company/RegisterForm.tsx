import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import CSS cho ReactQuill

const RegisterForm = () => {
  // State để quản lý nội dung của Company Description và Company Skill
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');

  return (
    <div className="max-w-6xl mx-auto bg-white p-10 shadow-md rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">Register Company</h2>
      <form className="space-y-6">
        {/* Grid layout with 3 columns */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Company Name</label>
            <input
              type="text"
              placeholder="IT Connected..."
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Website</label>
            <input
              type="url"
              placeholder="example.com"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Industry</label>
            <select className="w-full border border-gray-300 p-2 rounded-md">
              <option value="IT Product">IT Product</option>
              {/* Add more options here */}
            </select>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Country</label>
            <select className="w-full border border-gray-300 p-2 rounded-md">
              <option value="Vietnam">Vietnam</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              {/* Thêm các tùy chọn quốc gia khác */}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Working Day</label>
            <input
              type="text"
              placeholder="Monday to Friday"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Overtime policy</label>
            <input
              type="text"
              placeholder="No OT"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Company size</label>
            <input
              type="text"
              placeholder="50-100 Employees"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
        </div>

        {/* Row 4 - Company Description */}
        <div>
          <label className="block mb-2 text-sm font-medium">Company Description</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            className="bg-white"
          />
        </div>

        {/* Row 5 - Company Skill */}
        <div>
          <label className="block mb-2 text-sm font-medium">Company Skill</label>
          <ReactQuill
            theme="snow"
            value={skills}
            onChange={setSkills}
            className="bg-white"
          />
        </div>

        {/* Row 6 - Address and Map */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Address</label>
            <input
              type="text"
              placeholder="Enter company address"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Select location in map</label>
            <img
              src="https://tapchigiaothong.qltns.mediacdn.vn/tapchigiaothong.vn/files/minh.phuong/2015/06/06/221407_maps1-1245.png"
              alt="Map"
              className="w-full h-36 object-cover rounded-md"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
