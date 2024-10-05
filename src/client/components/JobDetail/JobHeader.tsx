import React from 'react';

const JobHeader: React.FC = () => {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px'
    }}>
      <h1 style={{ color: '#333', fontSize: '24px', margin: '0 0 10px' }}>
        Nhân viên phát triển phần mềm IT
      </h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontWeight: 'bold' }}>💰 Mức lương</span>
          <p>20 - 30 Triệu</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontWeight: 'bold' }}>📍 Địa điểm</span>
          <p>TP Hồ Chí Minh</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontWeight: 'bold' }}>🧑‍💼 Kinh nghiệm</span>
          <p>2 năm</p>
        </div>
      </div>
      <p style={{ fontWeight: 'bold', color: '#d9534f' }}>Hạn nộp hồ sơ: 30/10/2024</p>
      <button style={{
        padding: '10px 15px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Ứng tuyển ngay
      </button>
    </div>
  );
};

export default JobHeader;
