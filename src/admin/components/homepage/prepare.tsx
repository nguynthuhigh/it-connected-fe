import IconUpdateProfile from '../../assets/svg/iconUpdateProfile.svg';
import IconFormCV from '../../assets/svg/iconFormCV.svg';
import IconBlog from '../../assets/svg/iconBlog.svg';

const Prepare = () => {
    return(
        <div className='max-w-[1300px] mx-auto mb-20'>
        <div className='flex justify-center mb-10'>
          <h1 className='text-[29px] font-semibold'>Công cụ tốt nhất cho hành trang ứng tuyển của bạn</h1>
        </div>
        <div className='w-full flex'>
          <div className='w-1/3 flex gap-3 bg-[#fcfcfc] p-3'>
            <div>
              <img className='max-w-20' src={IconUpdateProfile} alt="" />
            </div>
            <div>
              <div className='text-[18px] font-semibold mb-3'>Hồ sơ cá nhân</div>
              <div className='mb-6'>Kiến tạo hồ sơ ITconnect với cấu trúc chuẩn mực cùng các gợi ý chi tiết</div>
              <button className='border border-[#ed1b2f] text-[#ed1b2f] font-semibold rounded-md px-5 py-2'>Cập nhật hồ sơ</button>
            </div>
          </div>

          <div className='w-1/3 flex gap-3 p-3'>
            <div>
              <img className='max-w-20' src={IconFormCV} alt="" />
            </div>
            <div>
              <div className='text-[18px] font-semibold mb-3'>Mẫu CV</div>
              <div className='mb-6'>Nâng cấp CV với các mẫu CV IT chuyên nghiệp - được nhà tuyển dụng đề xuất</div>
              <button className='border border-[#ed1b2f] bg-[#ed1b2f] text-white font-semibold rounded-md px-5 py-2'>Xem mẫu CV</button>
            </div>
          </div>

          <div className='w-1/3 flex gap-3 bg-[#fcfcfc] p-3'>
            <div>
              <img className='max-w-20' src={IconBlog} alt="" />
            </div>
            <div>
              <div className='text-[18px] font-semibold mb-3'>Blog về IT</div>
              <div className='mb-6'>Cập nhật thông tin lương thưởng, nghề nghiệp và kiến thức ngành IT</div>
              <button className='border border-[#ed1b2f] text-[#ed1b2f] font-semibold rounded-md px-5 py-2'>Khám phá Blog</button>
            </div>
          </div>
          
        </div>
      </div>
    )
}

export default Prepare