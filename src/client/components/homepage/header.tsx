// import { useState } from "react";

// const Header = () => {
//     // const [openDropdown, setOpenDropdown] = useState(null);
//     // const [menuOpen, setMenuOpen] = useState(false); // Thêm trạng thái cho menu trên mobile

//     // const handleMouseEnter = (dropdownId) => {
//     //     setOpenDropdown(dropdownId);
//     // };

//     // const handleMouseLeave = () => {
//     //     setOpenDropdown(null);
//     // };

//     // const toggleMenu = () => {
//     //     setMenuOpen(!menuOpen); // Toggle menu khi nhấn icon trên mobile
//     // };

//     return (
//         <div className='bg-[#0075ff]'>
//             <div className="flex bg-[#0075ff] max-w-[1400px] mx-auto px-10 items-center">
//                 <div className="mr-5 py-5">
//                     <img
//                         className="max-w-[108px] max-h-[42px]"
//                         src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"
//                         alt="logo web"
//                     />
//                 </div>

//                 {/* Icon menu cho màn hình nhỏ */}
//                 <div className="sm:hidden cursor-pointer" onClick={toggleMenu}>
//                     <img
//                         src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
//                         alt="Menu icon"
//                         className="w-6 h-6"
//                     />
//                 </div>

//                 {/* Menu */}
//                 <div className={`flex-col sm:flex-row sm:flex ${menuOpen ? 'flex' : 'hidden'} w-full text-white justify-between`}>
//                   <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
//                       {/* <div
//                           className="relative"
//                           onMouseEnter={() => handleMouseEnter(1)}
//                           onMouseLeave={handleMouseLeave}
//                           onClick={() => setOpenDropdown(openDropdown === 1 ? null : 1)} // Click để mở dropdown trên mobile
//                       > */}
//                           <div className="cursor-pointer py-8">
//                               Việc Làm IT
//                           </div>
//                           {openDropdown === 1 && (
//                               <div className="absolute bg-white text-black rounded shadow-lg w-48">
//                                   <ul className="p-2">
//                                       <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
//                                           Frontend Developer
//                                       </li>
//                                       <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
//                                           Backend Developer
//                                       </li>
//                                       <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
//                                           Fullstack Developer
//                                       </li>
//                                   </ul>
//                               </div>
//                           )}
//                       </div>

//                       <div
//                           className="relative"
//                           onMouseEnter={() => handleMouseEnter(2)}
//                           onMouseLeave={handleMouseLeave}
//                           onClick={() => setOpenDropdown(openDropdown === 2 ? null : 2)}
//                       >
//                           <div className="cursor-pointer py-8">
//                               Top Công ty IT
//                           </div>
//                           {openDropdown === 2 && (
//                               <div className="absolute bg-white text-black rounded shadow-lg w-48">
//                                   <ul className="p-2">
//                                       <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
//                                           Google
//                                       </li>
//                                       <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
//                                           Microsoft
//                                       </li>
//                                       <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
//                                           Facebook
//                                       </li>
//                                   </ul>
//                               </div>
//                           )}
//                       </div>

//                       <div
//                           className="relative"
//                           onMouseEnter={() => handleMouseEnter(3)}
//                           onMouseLeave={handleMouseLeave}
//                           onClick={() => setOpenDropdown(openDropdown === 3 ? null : 3)}
//                       >
//                           <div className="cursor-pointer py-8">
//                               Blog
//                           </div>
//                           {openDropdown === 3 && (
//                               <div className="absolute bg-white text-black rounded shadow-lg w-48">
//                                   <ul className="p-2">
//                                       <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
//                                           IT Trends
//                                       </li>
//                                       <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
//                                           Coding Tips
//                                       </li>
//                                       <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
//                                           Developer Tools
//                                       </li>
//                                   </ul>
//                               </div>
//                           )}
//                       </div>
//                   </div>

//                   {/* Chỉnh lại đoạn này */}
//                   <div className="flex flex-col sm:flex-row gap-5 mt-5 sm:mt-0 items-center">
//                       <div>Nhà Tuyển Dụng</div>
//                       <div>Đăng Nhập/Đăng Ký</div>
//                   </div>
//               </div>

//             </div>
//         </div>
//     );
// };

// export default Header;
