import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../../../assets/Google.png";
import signUppageImage from "../../../assets/Education-bro.svg";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import docTitle from "../../../Hooks/Title";
import axios from "axios";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { singUpUser, setUser, googleSignIn, profileUpDate } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [photo, setPhoto] = useState("");
  const [accountcreating, setAccountcreating] = useState(false);

  const hangleSelectImage = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  const handleRegistation = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const terms = form.terms.checked;
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("upload_preset", "ResigtrationUser");
      setAccountcreating(true);
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/dyeotrpkd/image/upload`,
        formData
      );
      setAccountcreating(false);
      setPhoto(res.data);
    } catch (error) {
      return setError("Please select an image");
    }

    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      return Swal.fire({
        icon: "error",
        text: "Fill in all the information",
      });
    }

    if (!/[A-Z]/.test(password)) {
      setError("Must have an Uppercase letter in the password.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Must have a Lowercase letter in the password");
      return;
    }
    if (password.length < 6) {
      setError("Length must be at least 6 character");
      return;
    }
    if (!terms) {
      setError("You must agree to the terms and conditions");
      return;
    }

    const userInfo = {
      name: name,
      email: email,
    };

    axiosPublic
      .post("/user", userInfo)
      .then((res) => {
        if (res.data.insertedId) {
          singUpUser(email, password)
            .then((result) => {
              const usr = result.user;
              profileUpDate({ displayName: name, photoURL: photo })
                .then(() => {
                  toast.success("Succsessfully sing up", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                  setUser(usr);
                  form.reset();
                  navigate(location?.state ? location.state : "/");
                })
                .catch((error) => {
                  setError(error.message);
                });
            })
            .catch((error) => {
              setError(error.message);
            });
        }
      })
      .catch((error) => setError(error.message));
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleRegister = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const usr = result.user;
        setUser(usr);
        toast.success("Succsessfully sing up", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  docTitle("SignUp | EduGleam");
  return (
    <div className="mx-2 font-roboto mt-10 sm:mt-16 md:mt-24 lg:mt-36">
      <div className="flex max-w-sm md:max-w-6xl mx-auto border dark:border-gray-700 rounded-lg">
        <div className="hidden md:block w-1/2 h-full my-auto">
          <img className="w-full h-full " src={signUppageImage} alt="" />
        </div>
        <div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8  border dark:border-gray-700 w-full md:w-1/2  rounded-lg shadow-md">
          <div className="sm:mx-auto sm:w-full ">
            <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-gray-800 dark:text-white font-poppins">
              Sign Up to Join
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleRegistation} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium text-gray-800  dark:text-white"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    autoComplete="name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-800  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary "
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="photo"
                  className="block text-sm/6 font-medium text-gray-800  dark:text-white"
                >
                  Profile Photo
                </label>
                <div className="mt-2">
                  <input
                    id="photo"
                    name="photo"
                    onChange={hangleSelectImage}
                    type="file"
                    accept="image/*"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-800  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                  />
                </div>
              </div>

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
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-800 dark:text-white"
                >
                  Password
                </label>

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
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </button>
                </div>

                <p className="label-text-alt text-red-500 mt-1 text-sm">
                  {error}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <label className="label">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    name="terms"
                  />
                </label>
                <p className="text-sm font-medium">
                  Accept Our Terms & condition
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {!accountcreating ? "Sign Up" : "creating account"}
                </button>
              </div>
            </form>

            <p className="text-center text-sm mt-3 font-semibold">
              Already have an account?{" "}
              <Link
                state={location.state}
                className="text-red-600"
                to="/signIn"
              >
                Sign In
              </Link>
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-8">
            <button
              onClick={handleGoogleRegister}
              className="flex items-center justify-center gap-2 py-2 px-3 border rounded-lg shadow-xl mt-5"
            >
              <span>
                <img className="w-5" src={googleIcon} alt="google icon" />
              </span>
              Sing up with Google{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
