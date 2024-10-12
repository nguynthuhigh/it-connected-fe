import React from "react";
import WrapInfo from "./wrap-info";

const CompanyInfo: React.FC = () => {
  return (
    <div className="w-full space-y-4">
      <WrapInfo title="General information">
        <div className="grid grid-cols-3 gap-5">
          <Pattern title="Company type" content="Product"></Pattern>
          <Pattern
            title="Company industry"
            content="Transportation, Logistics and Warehouse"
          ></Pattern>
          <Pattern title="Company size" content="50 - 100 Employees"></Pattern>
          <Pattern title="Country" content="Vietnamese"></Pattern>
          <Pattern title="Overtime policy" content="No OT"></Pattern>
          <Pattern title="Working days" content="Monday - Friday"></Pattern>
        </div>
      </WrapInfo>
      <WrapInfo title="Company overview">
        <p>
          Global Fashion Group (GFG) is the leading fashion and lifestyle
          destination in growth markets Global Fashion Group (GFG) is the
          leading fashion and lifestyle destination in growth markets across
          LATAM, SEA and ANZ. From our people to our customers and partners, we
          exist to empower everyone to express their true selves through
          fashion. Our three e-commerce platforms: Dafiti, ZALORA and THE ICONIC
          connect an assortment of international, local and own brands to over
          800 million consumers from diverse cultures and lifestyles. GFG’s
          platforms provide seamless and inspiring customer experiences from
          discovery to delivery, powered by art & science that is infused with
          unparalleled local knowledge. As part of the Group’s vision is to be
          the #1 online destination for fashion & lifestyle in growth markets,
          we are committed to doing this responsibly by being people and planet
          positive across everything we do.
        </p>
      </WrapInfo>
    </div>
  );
};
const Pattern: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    <div className="font-inter">
      <h1 className="font-semibold text-gray-main text-[12px]">{title}</h1>
      <h1 className="text-sm font-medium">{content}</h1>
    </div>
  );
};
export default CompanyInfo;
