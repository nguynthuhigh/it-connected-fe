const Footer = () => {
    return (
        <div className="bg-[#0075df] flex justify-center p-5">
            <div className="flex flex-col sm:flex-row gap-2 items-center text-center sm:text-left">
                <div className="text-[12px] sm:text-[14px] text-[#A6A6A6]">
                    Copyright © IT VIEC JSC
                </div>
                <span className="hidden sm:inline text-[#A6A6A6]">|</span>
                <div className="text-[12px] sm:text-[14px] text-[#A6A6A6]">
                    MST: 0312192258
                </div>
            </div>
        </div>
    );
};

export default Footer;
