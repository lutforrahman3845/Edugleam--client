import { GoogleAuthProvider } from "firebase/auth";
import googleIcon from "../../assets/Google.png";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const GoogleLogin = ({ setError }) => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { setUser, googleSignIn } = useAuth();
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleRegister = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        const userInfo = {
          name: user?.displayName,
          email: user?.email,
          photo: user?.photoURL,
        };
        axiosPublic.post("/user", userInfo)
        .then((res) => {
            console.log(res)
        })
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
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="flex justify-center mt-4 mb-8">
      <button
        onClick={handleGoogleRegister}
        className="flex items-center justify-center gap-2 py-2 px-3 border rounded-lg shadow-xl mt-5"
      >
        <span>
          <img className="w-5" src={googleIcon} alt="google icon" />
        </span>
        Sign up with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
