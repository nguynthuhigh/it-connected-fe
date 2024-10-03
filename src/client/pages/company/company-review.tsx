import React from 'react';
import Header from '../../../admin/components/homepage/header';
import Footer from '../../../admin/components/homepage/footer';
import mbBank from '../../../admin/assets/png/mbbank-logo.png';
import Bosch from '../../../admin/assets/png/bosch.png';
import NAB from '../../../admin/assets/png/NAB.png';
import CompanyList from '../../components/company/company-review-list';
import NewestReviews from '../../components/company/newest-review-list';

const newestReview =[
  {
    companyName: "MB Bank",
    reviewText: "Great place to work! Supportive team and excellent opportunities for growth.",
    rating: 5,
    time: new Date("2024-10-01"),
  },
  {
    companyName: "Bosch Global Software",
    reviewText: "Innovative projects and good work-life balance.",
    rating: 4,
    time: new Date("2024-10-01"),
  },
  {
    companyName: "NAB Innovation Centre Vietnam",
    reviewText: "Fantastic culture and benefits. Highly recommend!",
    rating: 4.5,
    time: new Date("2024-10-01"),
  },
];
const companies = [
    {
      name: "MB Bank",
      location: "Ha Noi",
      jobs: 22,
      reviews: 97,
      rating: 4.8,
      bestAbout: "Best about Training & learning",
      imgUrl: mbBank,
    },
    {
      name: "Bosch Global Software",
      location: "Ho Chi Minh",
      jobs: 17,
      reviews: 268,
      rating: 3.3,
      bestAbout: "Best about Office & workspace",
      imgUrl: mbBank,
    },
    {
      name: "Techcombank",
      location: "Ha Noi",
      jobs: 15,
      reviews: 50,
      rating: 4.6,
      bestAbout: "Best about Salary & benefits",
      imgUrl: mbBank,
    },
    {
      name: "NAB Innovation Centre Vietnam",
      location: "Ho Chi Minh",
      jobs: 15,
      reviews: 50,
      rating: 4.6,
      bestAbout: "Best about Salary & benefits",
      imgUrl: NAB,
    },
    {
      name: "NAB Innovation Centre Vietnam",
      location: "Ho Chi Minh",
      jobs: 15,
      reviews: 50,
      rating: 4.6,
      bestAbout: "Best about Salary & benefits",
      imgUrl: NAB,
    },
    {
      name: "MB Bank",
      location: "Ha Noi",
      jobs: 22,
      reviews: 97,
      rating: 4.8,
      bestAbout: "Best about Training & learning",
      imgUrl: mbBank,
    },
    {
      name: "Bosch Global Software",
      location: "Ho Chi Minh",
      jobs: 17,
      reviews: 268,
      rating: 3.3,
      bestAbout: "Best about Office & workspace",
      imgUrl: Bosch, 
    },
  ];
  const CompanyReviews: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
            <h1 className="text-2xl font-bold mb-6">Company Reviews</h1>
            <CompanyList companies ={companies} />
          </div>
          <div className="w-full lg:w-1/3">
            <h2 className="text-xl fo nt-bold mb-6">Newest Reviews</h2>
            <NewestReviews reviews ={newestReview} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CompanyReviews;
