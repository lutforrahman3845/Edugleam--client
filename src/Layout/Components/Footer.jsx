import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="dark:bg-secondary dark:text-white text-gray-700 border-t dark:border-gray-700 mt-10 sm:mt-16 md:mt-24 lg:mt-32">
      <footer className=" grid grid-cols-1 lg:grid-cols-6 gap-20  py-10 px-6 xl:px-10 container mx-auto">
        <div className="col-span-1 lg:col-span-2">
          <Link to="/">
            <img className="w-20" src={logo} alt="logo" />
            <p className="text-gray-900 dark:text-white font-bold text-xl md:text-2xl lg:text-3xl mt-2 font-poppins">
              EduGleam
            </p>
          </Link>
          <p className="font-roboto font-normal text-gray-600 dark:text-gray-400 max-w-md mt-2">
            Empowering students with the tools and resources to find the best
            scholarships and universities worldwide.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="text-2xl"
            >
              <FaInstagram />
            </a>
            <a href="https://x.com/" target="_blank" className="text-2xl">
              <FaXTwitter />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              className="text-2xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-4 ">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 ">
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <div className=" flex flex-col gap-3">
                <a className="text-base font-normal text-gray-700 dark:text-gray-400 cursor-pointer">
                  Scholarships
                </a>
                <a className="text-base font-normal text-gray-700 dark:text-gray-400 cursor-pointer">
                  Universities
                </a>
                <a className="text-base font-normal text-gray-700 dark:text-gray-400 cursor-pointer">
                  Blog
                </a>
                <a className="text-base font-normal text-gray-700 dark:text-gray-400 cursor-pointer">
                  Contact Us
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <div className="flex flex-col gap-3">
                <a className="text-base font-normal text-gray-700 dark:text-gray-400 cursor-pointer">
                  About Us
                </a>
                <a className="text-base font-normal text-gray-700 dark:text-gray-400 cursor-pointer">
                  FQA
                </a>
                <a className="text-base font-normal text-gray-700 dark:text-gray-400 cursor-pointer">
                  Press
                </a>
                <a className="text-base font-normal text-gray-700 dark:text-gray-400 cursor-pointer">
                  Careers
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <div className=" flex flex-col gap-3">
                <a className="text-base font-normal text-gray-700 dark:text-gray-400 cursor-pointer">
                  Contact Us
                </a>
                <a className="text-base font-normal text-gray-700 dark:text-gray-400 cursor-pointer">
                  Guides
                </a>
                <a className="text-base font-normal text-gray-700 dark:text-gray-400 cursor-pointer">
                  Documentation
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <div className="flex flex-col gap-3">
                <a className="text-base font-normal text-gray-700 dark:text-gray-400 cursor-pointer ">
                  Terms of Service
                </a>
                <a className="text-base font-normal text-gray-700 dark:text-gray-400 cursor-pointer ">
                  Privacy Policy
                </a>
                <a className="text-base font-normal text-gray-700 dark:text-gray-400 cursor-pointer ">
                  A License
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center border-t border-gray-300 dark:border-gray-600 mt-6  py-6">
        <p>© {new Date().getFullYear()} EduGleam. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
