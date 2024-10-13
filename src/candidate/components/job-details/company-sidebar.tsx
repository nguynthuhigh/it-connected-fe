const CompanySidebar = () => {
  return (
    <div>
      <div className="flex items-center">
        <a href="#" onClick={() => alert("Navigate to company detail page")}>
          <img
            src="https://cdn-new.topcv.vn/unsafe/80x/https://static.topcv.vn/company_logos/K15QCkTlmhlXpg2514eAkp762nuKrE1i_1715218902____8d044e704093ed332ccd282f0f905472.jpg"
            alt="Company Logo"
            className="w-12 h-12 rounded-md mr-2"
          />
        </a>
        <span className="text-xl font-bold">Meta Tech</span>
      </div>

      <p className="text-base text-gray-600 mb-4">
        The company provides technology services.
      </p>

      <div className="text-sm text-black">
        <div className="flex justify-between mb-2">
          <span className="font-medium text-gray-600">Company type:</span>
          <span> IT Product</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-medium text-gray-600">Industry:</span>
          <span> Deep Tech Services</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-medium text-gray-600">Company size:</span>
          <span> 51-150 employees</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-medium text-gray-600">Country:</span>
          <span> Vietnam</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-medium text-gray-600">Working days:</span>
          <span> Monday - Saturday</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-medium text-gray-600">Overtime policy:</span>
          <span> Extra salary for OT</span>
        </div>
      </div>
      <div
        className="text-sm text-blue-500 cursor-pointer underline mt-4"
        onClick={() => alert("Navigate to company detail page")}
      >
        View Company
      </div>
    </div>
  );
};

export default CompanySidebar;
