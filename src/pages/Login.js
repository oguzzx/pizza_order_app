import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useGlobalContext } from "../context/context";

function Login() {
  const {
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    handleLogin,
  } = useGlobalContext();
  return (
    <div className="login mt-36">
      <div className="title">
        <h1 className="text-4xl font-bold w-full h-[200px] flex items-center pl-10 border  bg-orange-100">
          Login
        </h1>
      </div>
      <div className="section mt-10 flex items-center justify-center w-full ">
        <div className="loginContainer border w-[325px] h-[215px] flex rounded-md bg-red-100">
          <div className="form flex flex-col ml-10 mt-10">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className=" outline-none border-b border-black bg-red-100"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />{" "}
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) =>
                // setloginpassword u string değere çevir
                setLoginPassword(e.target.value)
              }
              className="outline-none border-b mt-4 border-black bg-red-100"
            />
            <Link to="/">
              <button
                onClick={handleLogin}
                className=" flex justify-center items-center w-[50px] h-[30px] p-4 rounded-md mt-5 border bg-red-500 text-white"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="registerLink flex items-center justify-center mt-8">
        Don't have an account?
        <Link to="/register" className="text-red-500">
          Create an account
        </Link>
      </div>
    </div>
  );
}

export default Login;
