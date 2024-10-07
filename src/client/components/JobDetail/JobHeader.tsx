
import React from 'react';

const JobHeader: React.FC = () => {
  return (
    <div style={{
      padding: '10px',
      backgroundColor: '#fff',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px'
    }}>
      <h1 style={{ color: '#333', fontSize: '24px', margin: '0 0 10px',fontWeight: 'bold' }}>
        Software Development Employee
      </h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontWeight: 'bold' }}>Salary</span>
          <p>20 - 30 Million</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontWeight: 'bold' }}>Location</span>
          <p>Ho Chi Minh City</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontWeight: 'bold' }}>Experience</span>
          <p>2 years</p>
        </div>
      </div>
      <p style={{ fontWeight: 'bold', color: '#d9534f' }}>Application Deadline: 30/10/2024</p>
      <button style={{
        padding: '10px 15px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Apply Now
      </button>
    </div>
  );
};

export default JobHeader;


