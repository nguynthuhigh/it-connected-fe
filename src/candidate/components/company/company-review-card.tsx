import React from "react";

interface Company {
    name: string;
    location: string;
    jobs: number;
    reviews: number;
    rating: number;
    bestAbout: string;
    imgUrl: string;
}

const CompanyCard: React.FC<Company> = ({
    name,
    location,
    jobs,
    reviews,
    rating,
    bestAbout,
    imgUrl,
}) => {
        return(
            <div className="bbg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full w-full">
                <div className="flex items-center mb-4">
                <div className="w-14 h-14 flex flex-shrink-0">
                    <img 
                    src={imgUrl} 
                    alt={name}
                     className="object-contain w-12 h-12 rounded-full"/>
                    <div className="ml-4">
                        <h2 className="font-semibold text-base break-words truncate w-40">{name}</h2>
                        <p className="text-sm text-gray-800">{location}</p>
                    </div>
                </div>
                </div>
                <div className="mb-4">
                    <p className="text-sm">
                        {jobs} jobs • {reviews} reviews
                    </p>
                    <p className="mt-1 text-sx text-gray-400"> {bestAbout}</p>
                </div>
                <div className="flex items-center mt-auto">
                    <span className="text-yellow-500 font-extrabold">{rating}</span>
                    <span className="ml-2 text-sm text-gray-500">Rating</span>
                </div>  
            </div>
        )
    }

export default CompanyCard;