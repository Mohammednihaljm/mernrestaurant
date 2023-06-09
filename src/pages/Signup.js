import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link,useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate=useNavigate()
  const [showPassword, setshowPassword] = useState(false);
  const [showconfirmPassword, setshowconfirmPassword] = useState(false);
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
  const handelshowconfirmpassword = () => {
    setshowconfirmPassword((preve) => !preve);
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
    const { firstname, lastname, email, password, confirmpassword } = data;
    if (firstname && lastname && email && password && confirmpassword) {
      if (password === confirmpassword) {
        alert("success");
        navigate("/Login")
      } else {
        alert("password and confirm password does not match");
      }
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
          <label htmlFor="firstname">First Name</label>
          <input
            type={"text"}
            id="firstname"
            name="firstname"
            className=" mt-1 mb-2 w-full bg-slate-200 px-2 py-1"
            value={data.firstname}
            onChange={handelonchange}
          />

          <label htmlFor="lastname">Last name</label>
          <input
            type={"text"}
            id="lastname"
            name="lastname"
            className=" mt-1 mb-2 w-full bg-slate-200 px-2 py-1"
            value={data.lastname}
            onChange={handelonchange}
          />

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

          <label htmlFor="password">Confirm Password</label>
          <div className="flex px-2 py-1 mt-1 mb-2 bg-slate-200   focus-within:outline">
            <input
              type={showconfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmpassword"
              className="  w-full bg-slate-200 border-none outline-none"
              value={data.confirmpassword}
              onChange={handelonchange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handelshowconfirmpassword}
            >
              {showconfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button
            className="w-full bg-black text-white font-medium rounded cursor-pointer py-1 mt-4"
            onClick={handelsubmit}
          >
            Sign up
          </button>
        </form>
        <p className="text-sm mt-2">
          Already have account?<Link to={"/Login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
