import React from "react";
import JobInfo from "../components/company/job-info";
import SearchJob from "../components/filter/search";
import Job from "../../shared/dummy-data/job.json";
import Location from "../assets/svg/location.svg";
// import ReactPaginate from "react-paginate";
const Search: React.FC = () => {
  // const handlePageClick = (event:unknown) => {
  //   const newOffset = (event.selected * itemsPerPage) % items.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };
  return (
    <div className="container-default space-y-4">
      <div className="max-w-[1000px] mx-auto p-4">
        <SearchJob></SearchJob>
      </div>
      <div className="border-[2px] flex items-center rounded-[15px] max-md:hidden">
        <div className="relative">
          <div className="relative">
            <img
              className="w-64 h-52 rounded-[15px]"
              src="https://img.timviec.com.vn/2022/10/holding-company-la-gi-compressed.jpg"
            ></img>
            <div className="absolute top-0 rounded-tl-[15px] bg-orange-500 text-sm p-1 font-semibold text-white">
              Employers special
            </div>
          </div>
          <div className="h-[125px] w-[125px] absolute z-10 top-0 ml-48 mt-10">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"></img>
          </div>
        </div>
        <div className="ml-20 space-y-2">
          <h1 className="text-[18px] font-semibold">Pointer Wallet</h1>
          <div className="flex space-x-2 items-center">
            <img src={Location}></img>
            <h1>Ha Noi</h1>
          </div>
          <h1>Payment Wallet</h1>
          <h1 className="text-blue-main">200 việc làm khác</h1>
        </div>
      </div>
      <h1 className="font-semibold text-4xl">
        200 Việc làm tại <span>Ho Chi Minh</span>
      </h1>
      <div className="lg:columns-4 md:columns-3 sm:columns-2">
        {Job.jobs.map((item) => (
          <JobInfo search="." {...item}></JobInfo>
        ))}
      </div>
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}
    </div>
  );
};

export default Search;
