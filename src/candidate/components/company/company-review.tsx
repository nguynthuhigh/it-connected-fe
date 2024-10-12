import React from "react";
import WrapInfo from "./wrap-info";
import Review from "./review";
const dummyData = [
  {
    title: "The Amazing Adventure",
    content:
      "This was an incredible experience. The scenery was breathtaking and the guide was very knowledgeable.",
    rate: 4.8,
    date: "2024-09-12",
  },
  {
    title: "A Relaxing Day",
    content:
      "I had a great time unwinding by the beach. The resort had excellent services and the staff were very welcoming.",
    rate: 4.5,
    date: "2024-09-10",
  },
  {
    title: "Historical Journey",
    content:
      "Loved learning about the history of this ancient city. The tour was well-organized, and the guide was an expert.",
    rate: 4.9,
    date: "2024-08-25",
  },
  {
    title: "Not as expected",
    content:
      "The tour didn't meet my expectations. The places we visited were crowded, and the timing was not ideal.",
    rate: 2.8,
    date: "2024-07-15",
  },
  {
    title: "Family Fun",
    content:
      "Great trip for the whole family! Lots of activities for the kids, and we had an amazing time at the amusement park.",
    rate: 4.7,
    date: "2024-06-30",
  },
  {
    title: "Foodie Paradise",
    content:
      "The food tour was out of this world. We tasted so many local dishes, and each one was better than the last!",
    rate: 4.9,
    date: "2024-05-18",
  },
  {
    title: "Wildlife Safari",
    content:
      "Seeing the animals in their natural habitat was an unforgettable experience. The tour was well-organized and safe.",
    rate: 4.6,
    date: "2024-04-10",
  },
  {
    title: "City Lights",
    content:
      "The night tour of the city was stunning. The skyline view was spectacular, and the local guide had great insights.",
    rate: 4.3,
    date: "2024-03-25",
  },
  {
    title: "Mountain Hike",
    content:
      "Challenging hike but totally worth it for the views at the top. It was an adventure I will never forget.",
    rate: 4.7,
    date: "2024-02-12",
  },
  {
    title: "Cultural Immersion",
    content:
      "We got to interact with the local community and learn about their culture and traditions. It was eye-opening.",
    rate: 4.8,
    date: "2024-01-05",
  },
];
const CompanyReview: React.FC = () => {
  return (
    <>
      <div className="md:w-[64%] space-y-4">
        <div className="bg-white shadow p-4 rounded-lg">123123</div>
        <WrapInfo title="Company reviews">
          {dummyData.map((item) => (
            <Review {...item}></Review>
          ))}
        </WrapInfo>
      </div>
    </>
  );
};

export default CompanyReview;
