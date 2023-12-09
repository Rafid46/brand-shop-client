/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import UseAxiosSecure from "../UseAxiosSecure";

const Naming = () => {
  const { user } = useContext(AuthContext);
  const [naming, setNaming] = useState([]);
  const axiosSecure = UseAxiosSecure();
  // const url = `http://localhost:5000/added?name=${user?.email}`;
  const url = `added?name=${user?.email}`;
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  // using axios
  useEffect(() => {
    axiosSecure.get(url).then((res) => setNaming(res.data));
  }, [url.axiosSecure]);
  return (
    <div>
      hello
      <h2>{naming.length}</h2>
    </div>
  );
};

export default Naming;
