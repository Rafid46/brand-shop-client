import axios from "axios";
import { useEffect } from "react";
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const UseAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked in the interceptor", error.response);
      }
    );
  }, []);
  return axiosSecure;
};

export default UseAxiosSecure;
