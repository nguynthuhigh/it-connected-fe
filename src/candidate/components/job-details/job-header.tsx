const JobHeader = () => {
  return (
    <div className="p-5 bg-white rounded-lg shadow-md mb-5">
      <h1 className="text-2xl font-bold mb-2 text-black">
        Front End Developer (ReactJS, NextJS, JavaScript)
      </h1>
      <p className="text-base text-black mb-2">Meta Tech</p>

      <div className="flex items-center text-base text-black my-2">
        <span className="mr-2 text-gray-500"></span>
        <span>Sign in to view salary</span>
      </div>

      <button className="w-full bg-blue-500 text-white py-2 px-6 rounded-md text-base mt-4 hover:bg-blue-700">
        Apply now
      </button>

      <div className="flex items-center text-base text-black my-2">
        <span className="mr-2 text-gray-500"></span>
        <span>
          97 Tran Thi Nghi, KDC Cityland, Go Vap district, Ho Chi Minh city
        </span>
      </div>

      <div className="flex items-center text-base text-black my-2">
        <span className="mr-2 text-gray-500"></span>
        <span>At office</span>
      </div>

      <div className="flex items-center text-base text-black my-2">
        <span className="mr-2 text-gray-500"></span>
        <span>Posted 4 hours ago</span>
      </div>

      <div className="flex gap-2 mt-3">
        <span>Skill</span>
        <span className="bg-gray-300 text-black py-1 px-3 rounded-full text-sm">
          ReactJS
        </span>
        <span className="bg-gray-300 text-black py-1 px-3 rounded-full text-sm">
          JavaScript
        </span>
        <span className="bg-gray-300 text-black py-1 px-3 rounded-full text-sm">
          NextJS
        </span>
      </div>
    </div>
  );
};

export default JobHeader;
