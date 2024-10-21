const Banner = () => {
  return (
      <div className="relative">
          <img 
              src="https://chefjob.vn/wp-content/uploads/2020/07/mo-ta-cong-viec-nhan-vien-truc-tong-dai-khach-san.jpg" 
              alt="Banner" 
              className="w-full h-auto" 
              style={{ maxHeight: '450px', objectFit: 'cover' }} // Đảm bảo hình ảnh có chiều cao tối đa
          />
          <div 
              className="absolute inset-0 flex flex-col justify-center items-center text-white"
              style={{
                  background: 'linear-gradient(90deg, #78B6FF, #3B95FF)',
                  opacity: 0.8,
              }}
          >
              <h1 className="text-4xl font-bold">Contact us</h1>
              <p className="text-lg mt-4">
                  IT connected is ready to provide the right solution according to your needs
              </p>
          </div>
      </div>
  );
};

export default Banner;
