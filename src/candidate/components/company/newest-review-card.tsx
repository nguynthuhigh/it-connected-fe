import React from 'react';

interface Review {
  companyName: string;
  reviewText: string;
  rating: number;
  time: Date;
}
const ReviewCard: React.FC<Review> = ({ companyName, reviewText, rating, time }) => {
  return (
    <div className="border-b last:border-b-0 py-4">
      <h3 className="font-semibold">{companyName}</h3>
      <p className="text-gray-600">{reviewText}</p>
      <div className="flex justify-between text-sm text-gray-500 mt-2">
        <span>Rating: {rating}</span>
        <span>{time.toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default ReviewCard;