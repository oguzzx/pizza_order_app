import React from "react";
import logo from "../../assets/res-logo.png";
import { IoNavigateCircleOutline } from "react-icons/io5";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer flex items-center justify-between border h-[350px] bg-orange-100 mt-40 ">
      <div className="left flex flex-col">
        <div className="logo">
          <img src={logo} alt="logo" className="w-[50px]" />
        </div>
        <div className="title font-bold mt-2">
          <h2>Tasty Treat</h2>
        </div>
        <div className="section">
          <p className="pb-2">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Nesciunt pariatur <br /> accusamus
          </p>
        </div>
      </div>
      <div className="section1 flex flex-col">
        <div className="title font-bold text-lg mb-2">
          <h2>Delivery Time</h2>
        </div>
        <div className="section">
          <p className="font-bold">Sunday - Thursday</p>
          <p className="mb-5">10:00am - 11:00pm</p>
        </div>
        <div className="bottom">
          <p className="font-bold">Friday - Saturday</p>
          <p>Off Day</p>
        </div>
      </div>
      <div className="section2 flex flex-col">
        <div className="title mb-8 text-lg">
          <h2 className="font-bold">Contact</h2>
        </div>
        <div className="section mb-4">
          <p>Location: Istanbul, Türkiye</p>
        </div>
        <div className="bottom font-bold">
          <p className="mb-4">Phone: +90 555 555 55 55</p>
          <p>Email: oguzhanorhan049@gmail.com </p>
        </div>
      </div>
      <div className="right flex flex-col">
        <div className="title mb-9">
          <h2 className="font-bold text-xl">Newsletter</h2>
        </div>
        <div className="section mb-6">
          <p>Subscribe our newsletter</p>
        </div>
        <div className="bottom border-black p-4 flex justify-center">
          <input type="text" placeholder="Enter your email" className="p-2" />
          <button>
            <IoNavigateCircleOutline className="text-2xl" />
          </button>
        </div>
        <div className="social flex">
          <div className="title">
            <p>Follow: </p>
          </div>
          <div className="icon flex">
            <BsFacebook className="text-2xl ml-2 mr-3" />
            <a
              href="www.github.com/oguzzx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="text-2xl mr-3" />
            </a>
            <BsLinkedin className="text-2xl mr-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
