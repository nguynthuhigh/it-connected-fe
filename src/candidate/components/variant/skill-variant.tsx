import React from "react";

const SkillVariant: React.FC<{ skill: string }> = ({ skill }) => {
  switch (skill) {
    case "python":
      return <Variant skill={skill} color="#FF0000" />;
    default:
      return <h1></h1>;
  }
};
const Variant: React.FC<{ skill: string; color: string }> = ({
  skill,
  color,
}) => {
  console.log(`border-[${color}]`);
  return (
    <div
      className={`border-[${color}] py-0.5 px-2.5 border-[2px] font-semibold text-[${color}] rounded-full border-blue-500`}
    >
      <h1>{skill}</h1>
    </div>
  );
};
export default SkillVariant;
