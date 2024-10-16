import React from "react";
interface InputProps {
  name: string;
  title: string;
  placeholder: string;
  className?: string;
}
const Input: React.FC<InputProps> = ({
  name,
  title,
  placeholder,
  className,
}) => {
  return (
    <div className={`flex-col ${className}`}>
      <label htmlFor={name} className="font-semibold text-gray-main p-">
        {title}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        className="border rounded-[4px] p-[12px] w-full bg-gray-50"
      ></input>
    </div>
  );
};

export default Input;
