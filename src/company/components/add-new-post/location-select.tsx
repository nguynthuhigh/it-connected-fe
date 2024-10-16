import React from 'react';

interface LocationSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const LocationSelect: React.FC<LocationSelectProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
        Location
      </label>
      <select
        id="location"
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option>Choose location</option>
        <option>Hanoi</option>
        <option>Ho Chi Minh City</option>
      </select>
    </div>
  );
};

export default LocationSelect;
