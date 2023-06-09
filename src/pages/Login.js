import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  console.log(data);
  const handelshowpassword = () => {
    setshowPassword((prev) => !prev);
  };

  const handelonchange = (e) => {
    const { name, value } = e.target;
    setdata((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handelsubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      alert("success");
    } else {
      alert("required fields");
    }
  };
  return (
    <div className="p-3 md:p-4">
      <div className="w-full  max-w-md bg-white m-auto flex items-center flex-col p-4">
        <div className="w-20 overflow-hidden  rounded-full drop-shadow-md shadow-md">
          <img
            src="https://www.kindpng.com/picc/m/20-203381_sign-up-icon-png-login-and-signup-icon.png"
            className="w-full"
            alt="img"
          />
        </div>
        <form className="w-full py-3">
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className=" mt-1 mb-2 w-full bg-slate-200 px-2 py-1"
            value={data.email}
            onChange={handelonchange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 mt-1 mb-2 bg-slate-200  focus-within:outline">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="  w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handelonchange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handelshowpassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button
            className="w-full bg-black text-white font-medium rounded cursor-pointer py-1 mt-4"
            onClick={handelsubmit}
          >
            Login
          </button>
        </form>
        <p className="text-sm mt-2">
          Already have account?<Link to={"/Login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
