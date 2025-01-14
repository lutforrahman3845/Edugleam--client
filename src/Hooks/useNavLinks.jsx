import { NavLink } from "react-router-dom";

const useNavLinks = () => {
    const links = (
        <>
          <li>
            <NavLink to={"/"} className={({isActive}) => `px-3 py-2 rounded-md font-roboto text-base font-medium hover:bg-none ${
                isActive ? 'bg-blue-500 text-white ' : 'dark:text-white text-secondary hover:text-blue-900'
            }`}>
                
                Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/scholarships"} className={({isActive}) => `px-3 py-2 rounded-md font-roboto text-base font-medium hover:bg-none ${
                isActive ? 'bg-blue-500 text-white ' : 'dark:text-white text-secondary hover:text-blue-900 '
            }`}>
                
                Scholarships
            </NavLink>
          </li>
          
        </>
      );
    
    return {links}
};

export default useNavLinks;