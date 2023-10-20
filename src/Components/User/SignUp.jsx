// import { useContext } from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import swal from "sweetalert";
import NavBar from "../NavBar";
// import { AuthContext } from "../../Providers/AuthProviders";
// import { AuthContext } from "../../Providers/AuthProviders";

const SignUp = () => {
  //   const [success, setSuccess] = useState("");
  const [registerError, setRegisterError] = useState("");
  const { createUser } = useContext(AuthContext);
  //   const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault(e);
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(form, name, email, photo, password);

    setRegisterError("");
    if (password.length < 6) {
      setRegisterError("password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("password should have capital letters");
      // return swal("Good job!", "You clicked the button!", "success");
    } else if (/^[a-zA-Z0-9]*$/.test(password)) {
      setRegisterError("password should have special character");
      return;
    } else {
      swal("Good job!", "account created succesfully", "success");
    }

    createUser(email, password)
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
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-center text-black">
              Already have an account?., Please
              <Link className=" text-xl ml-5 text-green-400" to="/login">
                Login
              </Link>
            </p>
            {registerError && <p className="text-red-600">{registerError}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
