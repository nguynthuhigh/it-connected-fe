import React from 'react';
import ReviewCard from './newest-review-card';

interface Review {
  companyName: string;
  reviewText: string;
  rating: number;
  time: Date;
}

interface NewestReviews {
  reviews: Review[];
}

const NewestReviews: React.FC<NewestReviews> = ({ reviews }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
};

export default NewestReviews;