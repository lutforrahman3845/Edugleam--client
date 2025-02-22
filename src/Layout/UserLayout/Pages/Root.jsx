import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useEffect } from "react";
const Root = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[location])
  return (
    <div >
      <Navbar></Navbar>
      <div className="container mx-auto flex-grow overflow-x-hidden min-h-[calc(100vh-180px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
