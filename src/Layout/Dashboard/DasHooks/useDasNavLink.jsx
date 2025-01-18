import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";
import { VscPreview } from "react-icons/vsc";
import {
  FaGraduationCap,
  FaRegCommentDots,
  FaRegUserCircle,
} from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";

const useDasNavLink = () => {
  const { user } = useAuth();
  const { role } = useRole();
  const dasLink = (
    <>
      {/* Regular user */}
      {user && !role && (
        <li>
          <NavLink
            to={"/dashboard/home"}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-roboto text-base  hover:bg-none ${
                isActive
                  ? "bg-blue-500 text-white hover:text-secondary dark:hover:text-white font-medium"
                  : "dark:text-gray-400 text-secondary hover:text-blue-900 "
              }`
            }
          >
            <div className="flex items-center gap-1 ">
              <FaRegUserCircle className="text-lg" />
              My Profile
            </div>
          </NavLink>
        </li>
      )}
      {user && !role && (
        <li>
          <NavLink
            to={"/dashboard/userApplication"}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-roboto text-base hover:bg-none ${
                isActive
                  ? "bg-blue-500 text-white hover:text-secondary dark:hover:text-white font-medium "
                  : "dark:text-gray-400 text-secondary hover:text-blue-900 "
              }`
            }
          >
            <div className="flex items-center gap-1">
              <TiDocumentText className="text-xl" />
              My Application
            </div>
          </NavLink>
        </li>
      )}
      {user && !role && (
        <li>
          <NavLink
            to={"/dashboard/userReviews"}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-roboto text-base hover:bg-none ${
                isActive
                  ? "bg-blue-500 text-white hover:text-secondary dark:hover:text-white font-medium "
                  : "dark:text-gray-400 text-secondary hover:text-blue-900 "
              }`
            }
          >
            <div className="flex items-center gap-1">
              <FaRegCommentDots className="text-lg" />
              My Reviews.
            </div>
          </NavLink>
        </li>
      )}






      {/* moderator */}
      {user && role === "moderator" && (
        <li>
          <NavLink
            to={"/dashboard/home"}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-roboto text-base hover:bg-none ${
                isActive
                  ? "bg-blue-500 text-white hover:text-secondary dark:hover:text-white font-medium "
                  : "dark:text-gray-400 text-secondary hover:text-blue-900 "
              }`
            }
          >
            <div className="flex items-center gap-1">
              <FaRegUserCircle className="text-lg" />
              My Profile
            </div>
          </NavLink>
        </li>
      )}
      {user && role === "moderator" && (
        <li>
          <NavLink
            to={"/dashboard/manageScholarships"}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-roboto text-base hover:bg-none ${
                isActive
                  ? "bg-blue-500 text-white hover:text-secondary dark:hover:text-white font-medium "
                  : "dark:text-gray-400 text-secondary hover:text-blue-900 "
              }`
            }
          >
            <div className="flex items-center gap-1">
              <FaGraduationCap className="text-xl" />
              Manage Scholarships
            </div>
          </NavLink>
        </li>
      )}
      {user && role === "moderator" && (
        <li>
          <NavLink
            to={"/dashboard/allreviews"}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-roboto text-base hover:bg-none ${
                isActive
                  ? "bg-blue-500 text-white hover:text-secondary dark:hover:text-white font-medium "
                  : "dark:text-gray-400 text-secondary hover:text-blue-900 "
              }`
            }
          >
            <div className="flex items-center gap-1">
              <VscPreview className="text-xl" />
              All reviews
            </div>
          </NavLink>
        </li>
      )}
      {user && role === "moderator" && (
        <li>
          <NavLink
            to={"/dashboard/addScholarship"}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-roboto text-base hover:bg-none ${
                isActive
                  ? "bg-blue-500 text-white hover:text-secondary dark:hover:text-white font-medium "
                  : "dark:text-gray-400 text-secondary hover:text-blue-900 "
              }`
            }
          >
            <div className="flex items-center gap-1">
              <IoAddCircleOutline className="text-xl" />
              Add Scholarship
            </div>
          </NavLink>
        </li>
      )}











      {/* Admin */}
      {user && role === "admin" && (
        <li>
          <NavLink
            to={"/dashboard/home"}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-roboto text-base hover:bg-none ${
                isActive
                  ? "bg-blue-500 text-white hover:text-secondary dark:hover:text-white font-medium "
                  : "dark:text-gray-400 text-secondary hover:text-blue-900 "
              }`
            }
          >
            <div className="flex items-center gap-1">
              <FaRegUserCircle className="text-lg " />
              Admin Profile
            </div>
          </NavLink>
        </li>
      )}
      {user && role === "admin" && (
        <li>
          <NavLink
            to={"/dashboard/addScholarship"}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-roboto text-base hover:bg-none ${
                isActive
                  ? "bg-blue-500 text-white hover:text-secondary dark:hover:text-white font-medium "
                  : "dark:text-gray-400 text-secondary hover:text-blue-900 "
              }`
            }
          >
            <div className="flex items-center gap-1">
              <IoAddCircleOutline className="text-xl" />
              Add Scholarship
            </div>
          </NavLink>
        </li>
      )}
      {user && role === "admin" && (
        <li>
          <NavLink
            to={"/dashboard/manageScholarships"}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-roboto text-base hover:bg-none ${
                isActive
                  ? "bg-blue-500 text-white hover:text-secondary dark:hover:text-white font-medium "
                  : "dark:text-gray-400 text-secondary hover:text-blue-900 "
              }`
            }
          >
            <div className="flex items-center gap-1">
              <FaGraduationCap className="text-xl" />
              Manage Scholarships
            </div>
          </NavLink>
        </li>
      )}
      {user && role === "admin" && (
        <li>
          <NavLink
            to={"/dashboard/manageUsers"}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-roboto text-base hover:bg-none ${
                isActive
                  ? "bg-blue-500 text-white hover:text-secondary dark:hover:text-white font-medium "
                  : "dark:text-gray-400 text-secondary hover:text-blue-900 "
              }`
            }
          >
            <div className="flex items-center gap-1">
              <MdManageAccounts className="text-xl" />
              Manage Users
            </div>
          </NavLink>
        </li>
      )}
      {user && role === "admin" && (
        <li>
          <NavLink
            to={"/dashboard/allreviews"}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-roboto text-base hover:bg-none ${
                isActive
                  ? "bg-blue-500 text-white hover:text-secondary dark:hover:text-white font-medium "
                  : "dark:text-gray-400 text-secondary hover:text-blue-900 "
              }`
            }
          >
            <div className="flex items-center gap-1">
              <VscPreview className="text-xl" />
              Manage reviews
            </div>
          </NavLink>
        </li>
      )}
    </>
  );
  return dasLink;
};

export default useDasNavLink;
