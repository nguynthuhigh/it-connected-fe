import React from 'react';

const DescriptionJob: React.FC = () => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Why you'll love working here
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Description title..."
      />
    </div>
  );
};

export default DescriptionJob;
