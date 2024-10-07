import iconSetting from "../../assets/svg/iconSetting.svg";
import iconNotification from "../../assets/svg/iconNotification.svg";
import IconSearch from "../../assets/svg/iconSearch.svg";
import CardView from "../../components/manager-user/card-view";
import DataTable from "../../components/manager-user/table-users";
import iconPrevious from "../../assets/svg/iconPrevious.svg";
import iconNext from "../../assets/svg/iconNext.svg";

const ManageUser = () => {
  return (
    <div className="flex w-full font-inter">
      <div className="p-5 w-[15%]">
        <div className="p-5 font-semibold text-[28px]">Sidebar</div>
        <div className="px-2 py-1 justify-center flex">
          <button className="border px-5 py-2 text-center text-white rounded-full bg-blue-500 font-medium text-[20px] hover:border-blue-500 hover:text-blue-600 hover:bg-white">
            Manage Users
          </button>
        </div>
      </div>
      <div className="py-5 px-10 w-full">
        <div className="flex justify-between ">
          <div className="p-5 font-semibold text-[28px]">List User</div>
          <div className="flex gap-5 items-center">
            <div className="border p-2 rounded-full">
              <img src={iconSetting} alt="Notification Icon" />
            </div>
            <div className="border p-2 rounded-full">
              <img src={iconNotification} alt="Notification Icon" />
            </div>
            <div className="border rounded-full">
              <img src="https://i.imgur.com/xmOk59x.png" alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className="p-5 ">
          <CardView />
        </div>
        <div className="px-5 py-2 flex justify-between relative">
          <div>
            <div className="absolute inset-y-0 flex items-center pl-4">
              <img src={IconSearch} alt="search" />
            </div>
            <input
              className="pl-12 justify-center flex py-1 rounded-[20px] border border-[#BDBDBD] placeholder:text-[15px] placeholder:text-[#888] focus:outline-none focus:border-blue-500 focus:border-[1.5px]"
              type="text"
              placeholder="Search for something"
            />
          </div>
          <button className="px-5 py-1 rounded-lg border-[1.5px] border-black hover:bg-blue-200 hover:outline-none hover:border-blue-200 hover:text-white">
            Add new
          </button>
        </div>
        <div className="p-5">
          <div className="w-full px-8 py-3 border-2 rounded-[24px] h-fit flex gap-5">
            <DataTable />
          </div>
        </div>
        <div className=" flex justify-end pr-[100px] mt-2">
          <div className="flex gap-5 items-center">
            <button className="flex gap-3 items-center">
              <img className="" src={iconPrevious} alt="buttonPrevious" />
              <span>Previous</span>
            </button>
            <div className="flex">
              <button className="border bg-black text-white px-4 py-2 rounded-xl">
                1
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-xl">
                2
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-xl">
                3
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-xl">
                4
              </button>
            </div>
            <button className="flex gap-3 items-center">
              <span>Next</span>
              <img src={iconNext} alt="buttonNext" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
