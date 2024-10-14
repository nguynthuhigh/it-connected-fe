import React, { useState } from "react";
import CheckBox from "./checkbox";
interface IChecked {
  [key: string]: boolean;
}
const Filter: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<IChecked>({
    Senior: false,
    Manage: false,
    CEO: false,
  });
  const [selectedCompany, setSelectedCompany] = useState<IChecked>({
    Outsourcing: false,
    NonIT: false,
    IT: false,
  });
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
  const handleCompanyChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSelectedCompany((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
  const getSelectedValues = () => {
    const selected = Object.keys(selectedOptions).filter(
      (key) => selectedOptions[key]
    );
    return selected.join(", ");
  };
  return (
    <div className="mx-auto w-full bg-white rounded-lg h-fit p-4 ">
      <h1 className="text-2xl font-semibold p-2">Filter Jobs</h1>
      <div className="flex space-x-2">
        {Object.entries(selectedOptions).map(([key, isChecked]) => (
          <CheckBox
            isChecked={isChecked}
            handleCheckboxChange={handleCheckboxChange}
            name={key}
          ></CheckBox>
        ))}
      </div>
      <div className="flex space-x-2 mt-5">
        {Object.entries(selectedCompany).map(([key, isChecked]) => (
          <CheckBox
            isChecked={isChecked}
            handleCheckboxChange={handleCompanyChecked}
            name={key}
          ></CheckBox>
        ))}
      </div>
      <div>
        <h4>Selected options:</h4>
        <p>{getSelectedValues() || "None"}</p>
      </div>
    </div>
  );
};

export default Filter;
