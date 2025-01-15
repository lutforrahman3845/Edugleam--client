import axios from "axios";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_serverUrl,
});
const useAxiosSecure = () => {
  const { singout } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axiosSecure.interceptors.response.use(
    function (res) {
      return res;
    },
    async (error) => {
      console.log(error)
      if (error.response.status === 401 || error.response.status === 403) {
        await singout();
        navigate("/signIn");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
