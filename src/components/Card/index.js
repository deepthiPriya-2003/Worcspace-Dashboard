import { HiDotsVertical } from "react-icons/hi";



const Cards =({title, description, date })=>{
    return(
        <div className="flex flex-col bg-white p-5 rounded-xl shadow hover:shadow-md transition cursor-pointer h-48 w-96">
      <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>
      <HiDotsVertical /> 
      </div>

      <p className="text-sm text-gray-600 mt-2 mb-5 line-clamp-2 flex flex-wrap mb-3">
        {description}
      </p>
      <hr/>
      <p className="text-xs text-gray-400 mt-4 ">
        Created on: <span className="text-gray-600">{date}</span>
      </p>

    </div>
    )
}

export default Cards