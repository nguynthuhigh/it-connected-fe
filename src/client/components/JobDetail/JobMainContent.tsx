
import React from 'react';

const JobMainContent: React.FC = () => {
  return (
    <div style={{
      padding: '10px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
      marginBottom: '10px',
      width: '100%', 
      maxWidth: '1400px', 
      margin: '0 auto',
    }}>
  
      <h2 style={{ color: '#333', marginBottom: '20px',fontWeight: 'bold' }}>Job Details</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
    
        <img src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/employer_medias/f3cb7290ae6418396f89ab0bc018707c-66f627e236700.jpg" alt="Job Illustration 1" style={{
          width: '200px',
          height: '120px', 
          borderRadius: '10px',
          
        }} />
      
        {/* <img src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/employer_medias/f3cb7290ae6418396f89ab0bc018707c-66f627e236700.jpg" alt="Job Illustration 2" style={{
             width: '200px',
             height: '120px',
          borderRadius: '10px',
        }} /> */}
      </div>

      <h3 style={{ color: '#007BFF', marginBottom: '15px' }}>Job Description</h3>
      <ul style={{ marginBottom: '25px' }}>
        <li>Develop and maintain web applications using modern programming languages.</li>
        <li>Analyze requirements and design software technology solutions.</li>
        <li>Coordinate with internal teams to ensure project progress.</li>
      </ul>

      <h3 style={{ color: '#007BFF', marginBottom: '15px' }}>Candidate Requirements</h3>
      <ul style={{ marginBottom: '25px' }}>
        <li>At least 2 years of software development experience.</li>
        <li>Strong knowledge of ReactJS, NodeJS, and TypeScript.</li>
        <li>Good teamwork and time management skills.</li>
        <li>Priority for candidates with English communication skills.</li>
      </ul>

      <h3 style={{ color: '#007BFF', marginBottom: '15px' }}>Benefits</h3>
      <ul style={{ marginBottom: '25px' }}>
        <li>Basic salary $800 - $1,200, negotiable.</li>
        <li>Performance and project-based bonuses.</li>
        <li>Health insurance and attractive welfare benefits.</li>
      </ul>

      <h3 style={{ color: '#007BFF', marginBottom: '15px' }}>Work Location</h3>
      <p>83 Nguyen Ba Khoan, Yen Hoa Ward, Cau Giay District, Hanoi</p>

      <h3 style={{ color: '#007BFF', marginBottom: '15px' }}>Application Method</h3>
      <p>Submit your application online by clicking Apply Now below. Application deadline: 30/10/2024</p>

      <button style={{
        padding: '12px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px'
      }}>
        Save Job
      </button>
    </div>
  );
};

export default JobMainContent;

