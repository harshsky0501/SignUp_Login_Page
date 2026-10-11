import React from "react";
import googleLogo from "./google.png";
import appleLogo from "./apple.png";
import sbg from "./sbg.jpg";
import mail from "./mail.png";
import person from "./person.png";
import pass from "./pass.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [errors, seterrors] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const usernameReg = /^[A-Za-z_][A-Za-z0-9_]{2,19}$/;
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passReg =
    /^(?=[A-Za-z])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;

  const [signedIn, setsignedIn] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    };

    if (!usernameReg.test(username)) {
      newErrors.username =
        "UserName must contain 3-20 characters containing only letters, numbers or _";
    }
    if (!emailReg.test(email)) {
      newErrors.email = "Please enter a valid Email";
    }
    if (!passReg.test(password)) {
      newErrors.password =
        "Password must contain 8+ characters, uppercase, lowercase, number and special character";
    }
    if (password !== cpassword) {
      newErrors.cpassword = "Passwords do not match";
    }

    seterrors(newErrors);

    if (
      !newErrors.username &&
      !newErrors.email &&
      !newErrors.password &&
      !newErrors.cpassword
    ) {
      setsignedIn(true);
    }
  };

  return (
    <div
      className=" flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat px-4 sm:px-0"
      style={{ backgroundImage: `url(${sbg})` }}
    >
      <div className="p-4 flex flex-col justify-center items-center  max-w-full mx-auto h-max gap-5 sm:gap-7 border-0 sm:border sm:border-solid sm:border-white sm:rounded-4xl shadow-blue-950 z-10">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-center text-white font-semibold font-poppins">
            SIGN UP
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-center font-semibold font-poppins text-green-600">
            -TO GET STARTED
          </h1>
        </div>
        <form
          onSubmit={formSubmit}
          className="flex flex-col justify-center items-center gap-6 sm:gap-10"
        >
          <div className="w-full max-w-sm sm:w-100">
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="username"
                className="text-sm tracking-wide font-poppins text-gray-400 font-medium"
              >
                Create Username
              </label>
              <div className="relative w-full">
                <img
                  src={person}
                  alt="password"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                />

                <input
                  type="text"
                  name=""
                  id="username"
                  placeholder="abc$01"
                  onChange={(e) => setusername(e.target.value)}
                  className="py-1.5 pl-10 pr-3 w-full bg-gray-300 border border-solid font-poppins placeholder:text-gray-500 rounded-lg"
                  required
                />
              </div>
              <div>
                {errors.username && (
                  <p className="w-full min-h-8 mt-1 text-xs leading-4 text-red-500 font-poppins">
                    {" "}
                    {errors.username}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="email"
                className="text-sm tracking-wide font-poppins text-gray-400 font-medium"
              >
                Enter Email
              </label>
              <div className="relative w-full">
                <img
                  src={mail}
                  alt="password"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                />

                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="abc@gmail.com"
                  onChange={(e) => setemail(e.target.value)}
                  className="py-1.5 pl-10 pr-3 w-full bg-gray-300 border border-solid font-poppins placeholder:text-gray-500 rounded-lg"
                  required
                />
              </div>
              <div>
                {errors.email && (
                  <p className="w-full min-h-8 mt-1 text-xs leading-4 text-red-500 font-poppins">
                    {" "}
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="pass"
                className="text-sm tracking-wide font-poppins text-gray-400 font-medium"
              >
                Create Password
              </label>
              <div className="relative w-full">
                <img
                  src={pass}
                  alt="password"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                />

                <input
                  type="password"
                  name=""
                  id="pass"
                  placeholder="••••••••"
                  onChange={(e) => setpassword(e.target.value)}
                  className="py-1.5 pl-10 pr-3 w-full bg-gray-300 border border-solid font-poppins placeholder:text-gray-500 rounded-lg"
                  required
                />
              </div>
              <div>
                {errors.password && (
                  <p className="w-full min-h-8 mt-1 text-xs leading-4 text-red-500 font-poppins">
                    {" "}
                    {errors.password}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="cpass"
                className="text-sm tracking-wide font-poppins text-gray-400 font-medium"
              >
                Confirm Password
              </label>
              <div className="relative w-full">
                <img
                  src={pass}
                  alt="password"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                />

                <input
                  type="password"
                  name=""
                  id="cpass"
                  placeholder="••••••••"
                  onChange={(e) => setcpassword(e.target.value)}
                  className="py-1.5 pl-10 pr-3 w-full bg-gray-300 border border-solid font-poppins placeholder:text-gray-500 rounded-lg"
                  required
                />
              </div>
              <div>
                {errors.cpassword && (
                  <p className="w-full min-h-8 mt-1 text-xs leading-4 text-red-500 font-poppins">
                    {" "}
                    {errors.cpassword}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col justify-start items-center w-full">
              <button
                type="submit"
                className="w-full max-w-sm sm:w-100 border border-solid px-1 py-1 bg-green-600 text-white rounded-2xl hover:shadow-lg hover:scale-101 cursor-pointer transition-all duration-300 "
              >
                Sign Up
              </button>
              <p className="font-poppins text-gray-300 text-sm">
                Already have an accout?
                <span className="underline underline-offset-1">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </form>

        <div className="text-lg text-white font-poppins">OR</div>
        <div className="flex flex-col justify-center items-center gap-5 w-full">
          <div className=" flex justify-center items-center text-center text-white w-full max-w-sm border border-solid rounded-2xl p-1 hover:shadow-lg hover:scale-101 cursor-pointer transition-all duration-300 gap-3">
            Sign in with Google
            <img src={googleLogo} alt="" className="w-5 h-5 object-contain" />
          </div>
          <div className="flex justify-center items-center text-center text-white w-full max-w-sm border border-solid rounded-2xl p-1 hover:shadow-lg hover:scale-101 cursor-pointer transition-all duration-300 gap-3">
            Sign in with Apple
            <img src={appleLogo} alt="" className="w-6 h-6 object-contain" />
          </div>
        </div>
      </div>
      {signedIn && (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 sm:p-10 mx-4 rounded-2xl shadow-2xl text-center">
            <h2 className="text-2xl font-bold text-green-600 font-poppins">
              U are signed in
            </h2>

            <button
              onClick={()=>setsignedIn(false)}
              className="mt-6 rounded-3xl bg-green-600 px-8 py-2 text-white hover:bg-green-700 cursor-pointer transition font-poppins"
            >
              Okay
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default SignUp;
