const CompanySidebar = () => {
  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "10px 0 5px 0",
    color: "black",
    display: "flex",
    alignItems: "center",
  };

  const descriptionStyle = {
    fontSize: "16px",
    color: "#666",
    marginBottom: "15px",
  };

  const infoStyle = {
    fontSize: "14px",
    color: "black",
    width: "100%",
  };

  const strongStyle = {
    fontWeight: "medium",
    color: "#888",
  };

  const infoContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "5px 0",
  };

  const imageStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "4px",
    marginRight: "10px",
  };

  const viewCompanyStyle = {
    fontSize: "14px",
    color: "#007bff",
    cursor: "pointer",
    textDecoration: "underline",
    marginTop: "10px",
  };

  return (
    <div>
      <div style={titleStyle}>
        <a href="#" onClick={() => alert("Navigate to company detail page")}>
          <img
            src="https://cdn-new.topcv.vn/unsafe/80x/https://static.topcv.vn/company_logos/K15QCkTlmhlXpg2514eAkp762nuKrE1i_1715218902____8d044e704093ed332ccd282f0f905472.jpg"
            alt="Company Logo"
            style={imageStyle}
          />
        </a>
        <span>Meta Tech</span>
      </div>

      <p style={descriptionStyle}>The company provides technology services.</p>
      <div style={infoStyle}>
        <div style={infoContainerStyle}>
          <span style={strongStyle}>Company type:</span>
          <span> IT Product</span>
        </div>
        <div style={infoContainerStyle}>
          <span style={strongStyle}>Industry:</span>
          <span> Deep Tech Services</span>
        </div>
        <div style={infoContainerStyle}>
          <span style={strongStyle}>Company size:</span>
          <span> 51-150 employees</span>
        </div>
        <div style={infoContainerStyle}>
          <span style={strongStyle}>Country:</span>
          <span> Vietnam</span>
        </div>
        <div style={infoContainerStyle}>
          <span style={strongStyle}>Working days:</span>
          <span> Monday - Saturday</span>
        </div>
        <div style={infoContainerStyle}>
          <span style={strongStyle}>Overtime policy:</span>
          <span> Extra salary for OT</span>
        </div>
      </div>
      <div
        style={viewCompanyStyle}
        onClick={() => alert("Navigate to company detail page")}
      >
        View Company
      </div>
    </div>
  );
};

export default CompanySidebar;
