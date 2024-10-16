import React from "react";
import DummyData from "../../../shared/dummy-data/job-company.json";
import { Table, TableColumnsType } from "antd";
interface DataType {
  title: string;
  description: string;
  work_type: string;
  type: string;
  createdDate: string;
  is_public: boolean;
  jobID: number;
}
const columns: TableColumnsType<DataType> = [

  {
    title: "PHOTO",
    dataIndex: "photo",
  },
  {
    title: "NAME",
    dataIndex: "name",
  },
  {
    title: "DESCRIPTION",
    dataIndex: "description",
    width: "30%",
  },
  {
    title: "APPLIED DATE",
    dataIndex: "createdDate",
    // sorter: (a, b) => a.createdDate - b.createdDate,
  },
  {
    title: "STATUS",
    dataIndex: "status",
  },
  {
    title: "ACTION",
    dataIndex: "action",
    render: (_, { jobID }) => {
      return (
        <button
          onClick={() => {
            console.log(jobID);
          }}
          className="px-3 py-1.5 bg-blue-main font-semibold text-white rounded-lg"
        >
          View more
        </button>
      );
    },
  },
];

const data: DataType[] = DummyData.jobs;

const Index: React.FC = () => {
  return (
    <Table<DataType> columns={columns} dataSource={data} pagination={false} />
  );
};

export default Index;
