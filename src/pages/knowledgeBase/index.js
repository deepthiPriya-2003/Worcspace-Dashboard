import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import data from "../../data/mockData";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const KnowledgeBase = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col justify-between h-full ">
      <div>
        <div className="flex items-center justify-between mb-6 mx-3">
          <h1 className="items-left font-bold text-xl">Knowledge Base</h1>
          <div className="flex items-center justify-end w-2/3 m-4 ">
            <div className="flex items-center justify-items-start text-[#d0cfe3] bg-white pl-2 border mr-5 rounded-md">
              <IoSearch className="text-[#d0cfe3] " />
              <input
                type="text"
                placeholder="Search ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full max-w-md px-4 py-2 border-none outline-none focus-outline-none rounded-lg"
              />
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center bg-[#4F46E5] text-white px-3 py-2 rounded-lg hover:bg-indigo-600 ml-2 text-sm"
              onCreate={() => setIsOpen(true)}
            >
              <span className="text-2xl pr-2">+ </span> Create New
            </button>
            {isOpen && (
              <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 border p-2 m-2 w-fit rounded">
          {filteredData.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 m-5 pb-5">
        <p className="text-[black]">{filteredData.length} rows</p>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <p className="text-[black]">Rows per page:</p>
            <select className="border rounded px-2 py-1 outline-none">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>

          <div className="flex flex-row items-center w-[160px]">
            <p className="mr-2 text-[black]">Page 1 of 1</p>
            <button className="border mr-1 rounded">
              <MdOutlineKeyboardDoubleArrowLeft />
            </button>

            <button className="border mr-1 rounded">
              <MdKeyboardArrowLeft />
            </button>

            <button className="border mr-1 rounded">
              <MdKeyboardArrowRight />
            </button>

            <button className="border mr-1 rounded">
              <MdOutlineKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
