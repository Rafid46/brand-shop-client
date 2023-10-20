/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import swal from "sweetalert";
import NavBar from "../NavBar";
const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [mainUser, setMainUser] = useState(null);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(result.user);
        swal("Hello there", "Login successful", "success");
        setMainUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center text-black">
              Do not have an account, Please
              <Link className="text-blue-500" to="/register">
                Register
              </Link>
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={handleGoogleSignIn}
                className="btn border-none bg-[#00FFE1] rounded-none mt-5 items-center"
              >
                <FaGoogle className="text-2xl"></FaGoogle>
                Google
              </button>
              {/* <p>{mainUser.displayName}</p>
        <img src={mainUser.photoURL} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
