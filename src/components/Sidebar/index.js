import { Link, useLocation } from "react-router-dom";

import { RiRobot2Line } from "react-icons/ri";
import { RiFileShieldLine } from "react-icons/ri";
import { IoLibraryOutline } from "react-icons/io5";
import { FaTv } from "react-icons/fa";
import { HiOutlineQueueList } from "react-icons/hi2";
import { GrTrigger } from "react-icons/gr";
import { LuTvMinimalPlay } from "react-icons/lu";
import { MdOutlineShield } from "react-icons/md";
import { LuBookOpenCheck } from "react-icons/lu";
import { LuLibrary } from "react-icons/lu";
import { RiProfileLine } from "react-icons/ri";

const Sidebar = () => {
  const location = useLocation();

  const getClass = (path) =>
    `flex items-center text-sm font-semibold cursor-pointer mb-2 p-2 rounded transition-all ${
      location.pathname === path
        ? "bg-indigo-100 text-indigo-600 border-l-4 border-black"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <div className="bg-[white] w-64 border p-2 pl-3 ">
      <div className="m-3">
        <p className="text-[#b3b3ba] font-bold text-xs mb-2">MY PROJECTS</p>
        <ul className="ml-3 ">
          <li>
            <Link to="/agents">
              <div className={getClass("/agents")}>
                <RiRobot2Line className="ml-1 mr-3 text-lg" />
                <p>Agents</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/models">
              <div className={getClass("/models")}>
                <RiFileShieldLine className="ml-1 mr-3 text-lg" />
                <p>Modals</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/library">
              <div className={getClass("/library")}>
                <IoLibraryOutline className="ml-1 mr-3 text-lg" />
                <p>Library</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="m-3">
        <p className="text-[#b3b3ba] font-bold text-xs mb-2">ORCHESTRATOR</p>
        <ul className="ml-3 ">
          <li>
            <Link to="/published">
              <div className={getClass("/published")}>
                <RiRobot2Line className="ml-1 mr-3 text-lg" />
                <p>Published</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/machines">
              <div className={getClass("/machines")}>
                <FaTv className="ml-1 mr-3 text-lg" />
                <p>Machines</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/queues">
              <div className={getClass("/queues")}>
                <HiOutlineQueueList className="ml-1 mr-3 text-lg" />
                <p>Queues</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/triggers">
              <div className={getClass("/triggers")}>
                <GrTrigger className="ml-1 mr-3 text-lg" />
                <p>Triggers</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/jobs">
              <div className={getClass("/jobs")}>
                <LuTvMinimalPlay className="ml-1 mr-3 text-lg" />
                <p>Jobs</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/executions">
              <div className={getClass("/executions")}>
                <LuTvMinimalPlay className="ml-1 mr-3 text-lg" />
                <p>Executions</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/vault">
              <div className={getClass("/vault")}>
                <MdOutlineShield className="ml-1 mr-3 text-lg" />
                <p>Vault</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className={getClass("/")}>
                <LuBookOpenCheck className="ml-1 mr-3 text-lg " />
                <p>Knowledge Base</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/keystore">
              <div className={getClass("/keystore")}>
                <LuLibrary className="ml-1 mr-3 text-lg" />
                <p>Key Store</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="m-3">
        <p className="text-[#b3b3ba] font-bold text-xs mb-2">ADMIN</p>
        <ul className="ml-3 ">
          <li>
            <Link to="/tenant">
              <div className={getClass("/tenant")}>
                <RiProfileLine className="ml-1 mr-3 text-lg" />
                <p>Tenant</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
