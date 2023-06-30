import React, { useContext } from "react";
import logo from "../../assets/res-logo.png";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
import { useGlobalContext } from "../../context/context";

function Navbar() {
  const { openModal, cart, login, setLogin, registerName } = useGlobalContext();
  return (
    <div className="navbar fixed z-auto bg-white top-0 left-0 shadow-md  w-full h-[120px]  mb-5  flex items-center justify-between">
      <div className="logo ml-20 mt-5">
        <img src={logo} alt="logo" className="w-[70px] h-[70px]" />
        <div className="logo-text font-bold">Tasty Treats</div>
      </div>
      <div className="nav-links">
        <ul className="flex justify-between font-bold">
          <Link to="/" className="mr-10 text-red-500">
            Home
          </Link>
          <Link to="/foods" className="mr-10">
            Foods
          </Link>
          <Link to="/cart" className="mr-10">
            Cart
          </Link>
          <Link to="/contact" className="mr-10">
            Contact
          </Link>
        </ul>
      </div>
      <div className="right flex items-center justify-center  mr-20 mt-5">
        <div className="cart relative h-10 w-10">
          <span className="cart-count absolute right-0 top-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {cart.length}
          </span>

          <BiCart className="w-[30px] h-[30px]" onClick={() => openModal()} />
        </div>
        <div className="login ml-[20px]">
          {login ? (
            <Link to="/login">
              <CiLogin
                className="w-[30px] h-[30px]"
                onClick={() => setLogin(false)}
              />
              <p>{registerName}</p>
            </Link>
          ) : (
            <Link to="/login">
              <CiLogin
                className="w-[30px] h-[30px]"
                onClick={() => setLogin(false)}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
