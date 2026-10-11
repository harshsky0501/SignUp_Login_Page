import React from "react";
import sbg from "./sbg.jpg";
import mail from "./mail.png";
import pass from "./pass.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, seterrors] = useState({
      email: "",
      password: ""
    });
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passReg = /^(?=[A-Za-z])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;

  const [loggedIn, setloggedIn] = useState(false);


  const formSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      email: "",
      password: ""
    }

    if(!emailReg.test(email)){
      newErrors.email = "Please enter a valid Email"
    }
    if(!passReg.test(password)){
      newErrors.password = "Password must contain 8+ characters, uppercase, lowercase, number and special character"
    }

    seterrors(newErrors)
    if (
      !newErrors.email && !newErrors.password
    ) {
      setloggedIn(true)
    }
  }
  return (
    <div
      className=" flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${sbg})` }}
    >
      <div className="p-5 sm:p-7 flex flex-col justify-center items-center w-11/12 sm:w-2xl mx-auto h-max gap-6 sm:gap-8 border-0 sm:border sm:border-solid sm:border-white shadow-blue-950 rounded-2xl sm:rounded-4xl z-10">
        <h1 className="text-4xl sm:text-6xl text-white font-semibold font-poppins">
          LOGIN
        </h1>
        <form onSubmit={formSubmit} className="flex flex-col justify-center items-center gap-5 sm:gap-7">
          <div className="w-full sm:w-100">
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
                {errors.email && (<p className="w-full min-h-8 mt-1 text-xs leading-4 text-red-500 font-poppins"> {errors.email}</p> )}
              </div>
            </div>
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="pass"
                className="text-sm tracking-wide font-poppins text-gray-400 font-medium"
              >
                Enter Password
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
                {errors.password && (<p className="w-full min-h-8 mt-1 text-xs leading-4 text-red-500 font-poppins"> {errors.password}</p> )}
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <button className="w-32 sm:w-40 font-poppins border border-solid p-2 bg-green-600 text-white rounded-2xl hover:shadow-lg hover:scale-101 cursor-pointer transition-all duration-300ms ">
                Log in
              </button>
              <p className="font-poppins text-gray-300 text-sm">
                Don't have an accout?{" "}
                <span className="underline underline-offset-1">
                  <Link to="/">Sign Up</Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
      {loggedIn && (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="text-2xl font-bold text-green-600 font-poppins">
              Welcome! You are Logged In!
            </h2>

            <button
              onClick={()=>setloggedIn(false)}
              className="mt-6 rounded-lg bg-green-600 px-8 py-2 text-white hover:bg-green-700 cursor-pointer transition font-poppins"
            >
              Okay
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Login;
