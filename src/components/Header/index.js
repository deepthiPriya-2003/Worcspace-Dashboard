import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdKeyboardCommandKey } from "react-icons/md";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-gradient-to-r from-[#1E1B4B] via-[#2e2978] to-[#1E1B4B] text-white h-16 rounded p-2 w-full">
        <div className="flex items-center justify-items-start">
          <img
            src="https://res.cloudinary.com/dzxmezrqp/image/upload/v1775052441/aventisia-logo_zwbtwm.png"
            alt="logo"
            className="h-12 w-10 rounded"
          />
          <h1 className="font-bold text-lg font-sans ml-2">Worcspace</h1>
          <select className="bg-indigo-900 rounded-full text-center ml-5">
            <option>Worcspace 1</option>
            <option>worcspace 2</option>
            <option>worcspace 3</option>
          </select>
        </div>
        <div className="flex items-center justify-items-start bg-[#605d8f] text-[#d0cfe3] p-2 mr-5 rounded-md">
          <IoSearch className="ml-1 text-[#d0cfe3]" />
          <input
            type="search"
            className="bg-[#605d8f] w-96 h-6 px-4 border-none outline-none focus-outline-none"
            placeholder="Search... "
          />
          <MdKeyboardCommandKey className="text-[#d0cfe3]" />
          <p>K</p>
        </div>
        <div className="flex items-center justify-items-start ml-5">
          <IoIosNotificationsOutline className="text-[#d0cfe3] text-2xl" />
          <div className="bg-[#ceb9ed] p-2 ml-2 rounded-full outline-5 outline-[#1E1B4B]">
            <h1 className="text-[#1E1B4B] font-bold ">GK</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
