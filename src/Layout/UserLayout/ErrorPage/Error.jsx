import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import fourOfour from "../../../assets/error.json"

const Error = () => {
  const navigate = useNavigate();
  
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center space-y-4">
      <div className="max-w-lg"><Lottie animationData={fourOfour} loop={true} /></div>
      <h1 className="text-3xl text-gray-700 dark:text-white font-semibold text-center">
        Whoops! Page not found
      </h1>
      <p className="max-w-xl text-center text-gray-500 dark:text-gray-100 font-medium">
        We're sorry, the page you requested could not be found Please go back to
        the homepage
      </p>
      <button
        onClick={() => navigate("/")}
        className="py-2 px-5 bg-primary text-white rounded-lg"
      >
        BACK TO HOME
      </button>
    </div>
  );
};

export default Error;