import React from 'react';

interface SkillSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SkillSelect: React.FC<SkillSelectProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skill">
        Skill
      </label>
      <select
        id="skill"
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option>Choose skill</option>
        <option>React</option>
        <option>Node.js</option>
      </select>
    </div>
  );
};

export default SkillSelect;
