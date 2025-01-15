import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";

const useDasNavLink = () => {
    const {user} =useAuth();
    const {role} = useRole();
  const dasLink = (
    <>
      <li>
        <a className="text-lg font-semibold hover:bg-gray-300 rounded-lg p-2">
          Dashboard Overview
        </a>
      </li>
      <li>
        <a className="text-lg font-semibold hover:bg-gray-300 rounded-lg p-2">
          Analytics
        </a>
      </li>
      <li>
        <a className="text-lg font-semibold hover:bg-gray-300 rounded-lg p-2">
          User Management
        </a>
      </li>
      <li>
        <a className="text-lg font-semibold hover:bg-gray-300 rounded-lg p-2">
          Settings
        </a>
      </li>
    </>
  );
  return dasLink;
};

export default useDasNavLink;
