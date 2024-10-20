import React from "react";
import { Select } from "antd";

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};
const SelectSearch: React.FC = () => {
  return (
    <Select
      showSearch
      placeholder="Select a person"
      optionFilterProp="label"
      onChange={onChange}
      onSearch={onSearch}
      className="w-full bg-gray-50"
      options={[
        {
          value: "jack",
          label: "Jack",
        },
        {
          value: "lucy",
          label: "Lucy",
        },
        {
          value: "tom",
          label: "Tom",
        },
      ]}
    />
  );
};

export default SelectSearch;
