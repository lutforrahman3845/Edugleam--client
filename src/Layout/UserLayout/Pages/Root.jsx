import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
