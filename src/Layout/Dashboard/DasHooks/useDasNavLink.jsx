import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";
import { FaRegCommentDots, FaRegUserCircle } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";

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
            <div className="flex items-center gap-1">
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
            to={"/dashboard/userReviews."}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-roboto text-base font-medium hover:bg-none ${
                isActive
                  ? "bg-blue-500 text-white hover:text-secondary dark:hover:text-white"
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
      {/* modarator */}
      {user && role === "modarator" && (
        <li>
          <NavLink
            to={"/dashboard/home"}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-roboto text-base font-medium hover:bg-none ${
                isActive
                  ? "bg-blue-500 text-white hover:text-secondary dark:hover:text-white"
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
      {/* Admin */}
      {user && role === "admin" && (
        <li>
          <NavLink
            to={"/dashboard/home"}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-roboto text-base font-medium hover:bg-none ${
                isActive
                  ? "bg-blue-500 text-white hover:text-secondary dark:hover:text-white"
                  : "dark:text-gray-400 text-secondary hover:text-blue-900 "
              }`
            }
          >
            <div className="flex items-center gap-1">
              <FaRegUserCircle className="text-lg" />
              Admin Profile
            </div>
          </NavLink>
        </li>
      )}
    </>
  );
  return dasLink;
};

export default useDasNavLink;
