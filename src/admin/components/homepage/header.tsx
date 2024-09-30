import { useState } from "react";

const Header = () => {

    const [openDropdown, setOpenDropdown] = useState(null);
    const handleMouseEnter = (dropdownId) => {
        setOpenDropdown(dropdownId);
    };
    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    return(
        <div className='bg-[#0075ff] '>
        <div className="flex bg-[#0075ff] max-w-[1400px] mx-auto px-10 ">
          <div className="mr-5 py-5">
            <img
              className="max-w-[108px] max-h-[42px]"
              src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"
              alt="logo web"
            />
          </div>
          <div className="flex w-full justify-between items-center text-white">
            <div className="flex gap-5">
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="cursor-pointer py-8">
                  Việc Làm IT
                </div>
                {openDropdown === 1 && (
                  <div className="absolute bg-white text-black rounded shadow-lg w-48">
                    <ul className="p-2">
                      <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                        Frontend Developer
                      </li>
                      <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                        Backend Developer
                      </li>
                      <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                        Fullstack Developer
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="cursor-pointer py-8">
                  Top Công ty IT
                </div>
                {openDropdown === 2 && (
                  <div className="absolute bg-white text-black rounded shadow-lg w-48">
                    <ul className="p-2">
                      <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                        Google
                      </li>
                      <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                        Microsoft
                      </li>
                      <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                        Facebook
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="cursor-pointer py-8">
                  Blog
                </div>
                {openDropdown === 3 && (
                  <div className="absolute bg-white text-black rounded shadow-lg w-48">
                    <ul className="p-2">
                      <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                        IT Trends
                      </li>
                      <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                        Coding Tips
                      </li>
                      <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                        Developer Tools
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-5">
              <div>Nhà Tuyển Dụng</div>
              <div>Đăng Nhập/Đăng Ký</div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Header