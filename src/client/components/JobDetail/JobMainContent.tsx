import React from 'react';

const JobMainContent: React.FC = () => {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px'
    }}>
      <h2 style={{ color: '#333', marginBottom: '15px' }}>Chi tiết tuyển dụng</h2>
      
      <h3 style={{ color: '#007BFF', marginBottom: '10px' }}>Mô tả công việc</h3>
      <ul style={{ marginBottom: '20px' }}>
        <li>Phát triển và bảo trì các ứng dụng web sử dụng các ngôn ngữ lập trình hiện đại.</li>
        <li>Phân tích yêu cầu và thiết kế giải pháp công nghệ phần mềm.</li>
        <li>Phối hợp với các nhóm nội bộ để đảm bảo tiến độ dự án.</li>
      </ul>

      <h3 style={{ color: '#007BFF', marginBottom: '10px' }}>Yêu cầu ứng viên</h3>
      <ul style={{ marginBottom: '20px' }}>
        <li>Kinh nghiệm từ 2 năm trở lên trong phát triển phần mềm.</li>
        <li>Có kiến thức vững về ReactJS, NodeJS, và TypeScript.</li>
        <li>Kỹ năng làm việc nhóm, quản lý thời gian tốt.</li>
        <li>Ưu tiên ứng viên có khả năng giao tiếp tiếng Anh.</li>
      </ul>

      <h3 style={{ color: '#007BFF', marginBottom: '10px' }}>Quyền lợi</h3>
      <ul style={{ marginBottom: '20px' }}>
        <li>Lương cơ bản 20 - 30 triệu, có thể thương lượng.</li>
        <li>Thưởng theo hiệu quả công việc và dự án.</li>
        <li>Bảo hiểm sức khỏe và các chế độ phúc lợi hấp dẫn.</li>
      </ul>

      <h3 style={{ color: '#007BFF', marginBottom: '10px' }}>Địa điểm làm việc</h3>
      <p>83 Nguyễn Bá Khoản, Phường Yên Hòa, Cầu Giấy, Hà Nội</p>

      <h3 style={{ color: '#007BFF', marginBottom: '10px' }}>Cách thức ứng tuyển</h3>
      <p>Ứng viên nộp hồ sơ trực tuyến bằng cách bấm Ứng tuyển ngay dưới đây. Hạn nộp hồ sơ: 30/10/2024</p>

      <button style={{
        padding: '10px 15px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Lưu tin
      </button>
    </div>
  );
};

export default JobMainContent;
