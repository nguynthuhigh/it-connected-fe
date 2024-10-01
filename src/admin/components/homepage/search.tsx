import IconLocation from '../../assets/svg/iconLocation.svg'
import IconArrowDown from '../../assets/svg/iconArrowDown.svg'
import IconSearch1 from '../../assets/svg/iconSearch1.svg'



const Search = () => {
    return(
        <div className='bg-[#A6CCF8]'>
            <div className='bg-[#A6CCF8] max-w-[1200px] mx-auto'>
                <h1 className='text-[29px] text-white font-semibold pb-8 pt-14'>999 Việc làm IT cho Developer "Chất"</h1>
                <div className='flex pb-6 max-w-[1400px] gap-2'>
                    <button className="flex bg-white w-1/5 border rounded-md border-[#DEDEDE] justify-between items-center gap-2 py-4 px-5">
                        <div className="flex gap-2 items-center">
                            <img className="w-[17px]" src={IconLocation} alt="icon định vị" />
                            <span className="text-[15px]">Tất cả thành phố</span>
                        </div>
                        <img className="w-[16px]" src={IconArrowDown} alt="icon dropdown" />
                    </button>
                    <div className="border border-[#DEDEDE] rounded-md w-3/5 ">
                        <input className="rounded-md w-full h-full p-4 focus:outline-none" type="text" placeholder="Nhập từ khoá theo kỹ năng, chức vụ, công ty..." />
                    </div>
                    <button className='bg-[#ed1b2f] flex w-1/5 rounded-md items-center gap-2 justify-center'>
                        <img className="w-[20px]" src={IconSearch1} alt="icon search" />
                        <span className="text-white text-[18px]">Tìm kiếm</span>
                    </button>
                </div>
                <div className='flex gap-4 pb-10 text-white items-center'>
                    <div>Gợi ý cho bạn:</div>
                    <div className='flex gap-3'>
                        <div className="border border-[#dedede] px-3 py-1 rounded-full">Java</div>
                        <div className="border border-[#dedede] px-3 py-1 rounded-full">ReactJS</div>
                        <div className="border border-[#dedede] px-3 py-1 rounded-full">.NET</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search