import React from 'react';

const CompanySidebar: React.FC = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ color: '#007BFF' }}>CÔNG TY TNHH PHẦN MỀM XANH</h3>
      <p>Quy mô: 50 - 100 nhân viên</p>
      <p>Lĩnh vực: Công nghệ phần mềm</p>
      <p>Địa điểm: 83 Nguyễn Bá Khoản, Phường Yên Hòa, Cầu Giấy, Hà Nội</p>
      <a href="#" style={{ color: '#007BFF', textDecoration: 'underline' }}>Xem trang công ty</a>

      <h3 style={{ color: '#007BFF' }}>Thông tin chung</h3>
      <p>🔹 Cấp bậc: Nhân viên</p>
      <p>🔹 Kinh nghiệm: 2 năm</p>
      <p>🔹 Loại hình: Toàn thời gian</p>
      <p>🔹 Giới tính: Không yêu cầu</p>

      <h3 style={{ color: '#007BFF' }}>Ngành nghề</h3>
      <p>Phát triển phần mềm</p>
      <p>Công nghệ thông tin</p>

      <h3 style={{ color: '#007BFF' }}>Khu vực</h3>
      <p>Hà Nội</p>
      <p>TP Hồ Chí Minh</p>
    </div>
  );
};

export default CompanySidebar;
