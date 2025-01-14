import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../../../assets/Google.png";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import useAuth from "../../../Hooks/useAuth";
import signInpageImage from "../../../assets/Education-pana.svg";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import docTitle from "../../../Hooks/Title";

const SignIn = () => {
  const { singInUser, setUser, googleSignIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    singInUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setUser(user);
        toast.success("Succsessfully sing in", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Succsessfully sing in", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  docTitle("SignIn | EduGleam")
  return (
    <div className="mx-2 font-roboto mt-10 sm:mt-16 md:mt-24 lg:mt-36">
      <div className="flex max-w-sm md:max-w-6xl mx-auto border dark:border-gray-700 rounded-lg">
        <div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8  border dark:border-gray-700 w-full md:w-1/2  rounded-lg shadow-md">
          <div className="sm:mx-auto sm:w-full ">
            <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-gray-800 dark:text-white font-poppins">
              Sign In to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleLogIn} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-800  dark:text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-800  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-800 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-primary cursor-pointer hover:underline  hover:text-red-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 relative"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="p-[2px]   absolute top-[23%] right-4 z-50 rounded-sm"
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </div>
                <p className="label-text-alt text-red-500 mt-1 text-sm">
                  {error}
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="text-center text-sm mt-3 font-semibold">
              Don't have an account?{" "}
              <Link
                state={location.state}
                className="text-red-600"
                to="/signUp"
              >
                Sing Up
              </Link>
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-8">
            <button
              onClick={handleGoogleLogIn}
              className="flex items-center justify-center gap-2 py-2 px-3 border rounded-lg shadow-xl mt-5"
            >
              <span>
                <img className="w-5" src={googleIcon} alt="google icon" />
              </span>
              Sing in with Google{" "}
            </button>
          </div>
        </div>
        <div className="hidden md:block w-1/2 h-full my-auto">
          <img className="w-full h-full " src={signInpageImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
