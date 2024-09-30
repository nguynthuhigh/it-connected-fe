import React from "react";
import WrapInfo from "./wrap-info";

const CompanyInfo = () => {
  return (
    <div className="md:w-[69%] space-y-4">
      <WrapInfo title="General information">
        <hr></hr>
        <div className="flex justify-between">
          <div>
            <h1>Company type</h1>
            <h1>IT Product</h1>
          </div>
          <div>
            <h1>Company type</h1>
            <h1>IT Product</h1>
          </div>
          <div>
            <h1>Company type</h1>
            <h1>IT Product</h1>
          </div>
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

export default CompanyInfo;
