import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto min-h-[calc(100vh-73px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
