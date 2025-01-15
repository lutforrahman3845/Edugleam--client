import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "./useRole";

const useNavLinks = () => {
  const { user } = useAuth();
  const { role } = useRole();
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-roboto text-base font-medium hover:bg-none ${
              isActive
                ? "bg-blue-500 text-white "
                : "dark:text-white text-secondary hover:text-blue-900"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-roboto text-base font-medium hover:bg-none ${
              isActive
                ? "bg-blue-500 text-white "
                : "dark:text-white text-secondary hover:text-blue-900"
            }`
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/scholarships"}
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-roboto text-base font-medium hover:bg-none ${
              isActive
                ? "bg-blue-500 text-white "
                : "dark:text-white text-secondary hover:text-blue-900 "
            }`
          }
        >
          Scholarships
        </NavLink>
      </li>
      {user && role === "admin" && (
        <li>
          <NavLink
            to={"/dashboard/adminHome"}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-roboto text-base font-medium hover:bg-none ${
                isActive
                  ? "bg-blue-500 text-white "
                  : "dark:text-white text-secondary hover:text-blue-900 "
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {user && role === "modarator" && (
        <li>
          <NavLink
            to={"/dashboard/modaratorHome"}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-roboto text-base font-medium hover:bg-none ${
                isActive
                  ? "bg-blue-500 text-white "
                  : "dark:text-white text-secondary hover:text-blue-900 "
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {user && !role && (
        <li>
          <NavLink
            to={"/dashboard/userHome"}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-roboto text-base font-medium hover:bg-none ${
                isActive
                  ? "bg-blue-500 text-white "
                  : "dark:text-white text-secondary hover:text-blue-900 "
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-roboto text-base font-medium hover:bg-none ${
              isActive
                ? "bg-blue-500 text-white "
                : "dark:text-white text-secondary hover:text-blue-900 "
            }`
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return { links };
};

export default useNavLinks;
