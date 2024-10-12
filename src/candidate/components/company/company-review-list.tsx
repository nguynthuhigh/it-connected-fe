import React from "react";
import CompanyCard from "./company-review-card";

interface Company {
    name: string;
    location: string;
    jobs: number;
    reviews: number;
    rating: number;
    bestAbout: string;
    imgUrl: string;
  }
interface CompanyListProp {
    companies: Company[];
}


const companyList:React.FC<CompanyListProp> = ({ companies }) => {
    return  (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {companies.map((company,index) => (
                <div key={index} className="h-full">
                    <CompanyCard {...company} />
                </div>
        ))}
        </div>
    );
};
export default companyList;