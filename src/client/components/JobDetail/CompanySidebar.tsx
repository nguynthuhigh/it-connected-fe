import React from 'react';

const CompanySidebar: React.FC = () => {
  return (
    <div style={{
      padding: '10px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
      maxWidth: '400px', 
      margin: '10px auto', 
     
    }}>
       <div style={{
      padding: '0 px',
      backgroundColor: '#fff',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      margin: '5px'
    }}>
      <img 
        src="https://cdn-new.topcv.vn/unsafe/80x/https://static.topcv.vn/company_logos/K15QCkTlmhlXpg2514eAkp762nuKrE1i_1715218902____8d044e704093ed332ccd282f0f905472.jpg" 
        alt="Company Logo" 
        style={{
          width: '50px', 
          height: '50px', 
          borderRadius: '5px', 
          marginRight: '10px' 
        }} 
      />
      <h3 style={{ color: '#007BFF', marginBottom: '10px', fontWeight: 'bold' }}>
        GREEN SOFTWARE CO., LTD
      </h3>
    </div>
      <p>Size: 50 - 100 employees</p>
      <p>Industry: Software Development</p>
      <p>Location: 83 Nguyen Ba Khoan, Yen Hoa Ward, Cau Giay District, Hanoi</p>
      <a href="#" style={{ color: '#007BFF', textDecoration: 'underline' }}>View Company Page</a>
      
      <h3 style={{ color: '#007BFF', marginTop: '20px', marginBottom: '10px' }}>General Information</h3>
      <p>🔹 Position: Employee</p>
      <p>🔹 Experience: 2 years</p>
      <p>🔹 Employment Type: Full-time</p>
      <p>🔹 Gender: No preference</p>

      <h3 style={{ color: '#007BFF', marginTop: '20px', marginBottom: '10px' }}>Industry</h3>
      <p>Software Development</p>
      <p>Information Technology</p>

      <h3 style={{ color: '#007BFF', marginTop: '20px', marginBottom: '10px' }}>Location</h3>
      <p>Hanoi</p>
      <p>Ho Chi Minh City</p>
    </div>
  );
};

export default CompanySidebar;
