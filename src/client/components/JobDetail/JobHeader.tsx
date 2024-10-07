
import React from 'react';

const JobHeader = () => {

  const headerStyle = {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  };

  const titleStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
    color: 'black', 
  };

  const companyStyle = {
    fontSize: '16px',
    color: 'black', 
    margin: '5px 0',
  };

  const applyButtonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 25px',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    width: '100%', 
    marginTop: '15px', 
  };

  const iconTextStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    color: 'black', 
    margin: '10px 0',
  };

  const iconStyle = {
    marginRight: '8px',
    color: '#666',
  };

  const skillsStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  };

  const skillTagStyle = {
    backgroundColor: '#e0e0e0',
    color: 'black', 
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '14px',
  };

  return (
    <div style={headerStyle}>
      <h1 style={titleStyle}>Front End Developer (ReactJS, NextJS, JavaScript)</h1>
      <p style={companyStyle}>Meta Tech</p>

      <div style={iconTextStyle}>
        <span style={iconStyle}></span>
        <span>Sign in to view salary</span>
      </div>
      <button
        style={applyButtonStyle}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
      >
        Apply now
      </button>
      <div style={iconTextStyle}>
        <span style={iconStyle}></span>
        <span>97 Tran Thi Nghi, KDC Cityland, Go Vap district, Ho Chi Minh city</span>
      </div>

      <div style={iconTextStyle}>
        <span style={iconStyle}></span>
        <span>At office</span>
      </div>

      <div style={iconTextStyle}>
        <span style={iconStyle}></span>
        <span>Posted 4 hours ago</span>
      </div>

      <div style={skillsStyle}>
        <span>Skill</span>
        <span style={skillTagStyle}>ReactJS</span>
        <span style={skillTagStyle}>JavaScript</span>
        <span style={skillTagStyle}>NextJS</span>
      </div>

      
    </div>
  );
};

export default JobHeader;
