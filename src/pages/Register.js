import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useGlobalContext } from "../context/context";

function Register() {
  const {
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    registerName,
    setRegisterName,
  } = useGlobalContext();
  return (
    <div className="login mt-36">
      <div className="title">
        <h1 className="text-4xl font-bold w-full h-[200px] flex items-center pl-10 border  bg-orange-100">
          SingUp
        </h1>
      </div>
      <div className="section mt-10 flex items-center justify-center w-full ">
        <div className="loginContainer border w-[325px] h-[265px] flex rounded-md bg-red-100">
          <div className="form flex flex-col ml-10 mt-10">
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Full Name"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
              className=" outline-none border-b border-black bg-red-100 mb-4"
            />{" "}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              className=" outline-none border-b border-black bg-red-100 mt-4"
            />{" "}
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              className="outline-none border-b mt-4 border-black bg-red-100"
            />
            <button className=" flex justify-center items-center w-[100px] h-[30px] p-4 rounded-md mt-5 mb-5 border bg-red-500 text-white">
              Sing Up
            </button>
          </div>
        </div>
      </div>
      <div className="registerLink flex items-center justify-center mt-8">
        Already have an account?
        <Link to="/login" className="text-red-500">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
