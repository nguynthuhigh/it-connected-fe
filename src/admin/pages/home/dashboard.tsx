
import Header from '../../components/homepage/header';
import Search from '../../components/homepage/search';
import IconListRed from '../../assets/svg/iconList.svg';
import IconNextRed from '../../assets/svg/iconNextRed.svg';

import TopEmployer from '../../components/homepage/top-employer';
import Prepare from '../../components/homepage/prepare';
import Footer from '../../components/homepage/footer';




const Dashboard = () => {

  return (
    <div className="font-inter">
      <div>
        <Header />
      </div>
      <div>
        <Search />
      </div>

      <div className='bg-[#f7f7f7] py-6 mb-12 border-b'>
        <div className='flex max-w-[1200px] mx-auto justify-center gap-5 text-[16px] items-center'> 
          <img className='w-[22px]' src={IconListRed} alt="iconList" />
          <div className='font-semibold'>
            Khảo sát lương & tuyển dụng IT
          </div>
          <div className=''>
            ĐỊNH HÌNH THỊ TRƯỜNG IT 2024-2025 BẰNG Ý KIẾN CỦA BẠN
          </div>
          <img src={IconNextRed} alt="iconNext" />
        </div>
      </div>
        
      <div>
        <Prepare />
      </div>
      
      <div>
        <TopEmployer />
      </div>
      
      <div>
        <Footer />
      </div>

    </div>
  )
}


export default Dashboard;
