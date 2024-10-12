import React from "react";
import { Rate } from "antd";
interface ReviewProps {
  title: string;
  content: string;
  rate: number;
  date: string;
}

const Review: React.FC<ReviewProps> = ({ title, content, rate, date }) => {
  return (
    <div className="border-b-2 border-dashed">
      <h1 className="text-gray-main text-sm font-semibold mt-2">{date} 15:04:04</h1>
      <div className="text-[12px] font-semibold flex items-center space-x-3">
        <Rate
          style={{
            color: "orange",
            fontSize: 14,
            margin: 0,
            letterSpacing: "1px",
            wordSpacing: "0px",
          }}
          allowHalf
          defaultValue={rate}
          disabled
        />
        <h1>{rate}</h1>
      </div>
      <div className="space-y-1 mb-5 ">
        <h1 className="font-semibold text-lg">{title}</h1>
        <h1>{content}</h1>
      </div>
    </div>
  );
};

export default Review;
