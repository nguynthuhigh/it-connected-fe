import React from "react";
import Checked from "../../assets/svg/checked.svg";
import Plus from "../../assets/svg/plus.svg";
interface CheckBoxProps {
  name: string;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}
const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  handleCheckboxChange,
  isChecked,
}) => {
  return (
    <label className="cursor-pointer hover:bg-blue-200 rounded-full">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={{ display: "none" }}
        name={name}
      />

      {!isChecked ? (
        <div className="flex border-[#858585] border-[3px] rounded-full p-[5px] px-3 w-fit">
          <h1 className="font-semibold text-[16px] text-[#858585] mr-2">
            {name}
          </h1>
          <img className="w-[14px]" src={Plus} />
        </div>
      ) : (
        <div className="flex border-[#0075FF] bg-[#E9F6FF] border-[3px] rounded-full p-[5px] px-3 w-fit">
          <h1 className="font-semibold text-[16px] text-[#0075FF] mr-2">
            {name}
          </h1>
          <img className="w-[14px]" src={Checked} />
        </div>
      )}
    </label>
  );
};

export default CheckBox;
