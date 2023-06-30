import React from "react";
import motor from "../../assets/service-01.png";
import araba from "../../assets/service-02.png";
import zil from "../../assets/service-03.png";

function Section() {
  return (
    <div className="section mt-16 flex flex-col items-center justify-center">
      <div className="title  ">
        <h5 className="text-red-500 font-bold text-lg flex justify-center">
          What we serve
        </h5>
        <h3 className="font-bold text-4xl">
          Just sit back at home <br /> we will{" "}
          <span className="text-red-500 font-bold">take care</span>
        </h3>
      </div>
      <div className="content mt-5 mb-20 ">
        <p className="text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          officiis? <br /> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aperiam, eius.
        </p>
      </div>
      <div className="icons flex items-center justify-between mx-16 ">
        <div className="icon1 flex flex-col items-center justify-center mx-16">
          <div className="icon fle items-center justify-center">
            <img src={motor} alt="" className="h-14" />
          </div>
          <div className="title flex items-center justify-center font-bold">
            <p className="flex items-center justify-center">Quick Delivery</p>
          </div>
          <div className="content flex items-center justify-center text-center">
            <p className="flex items-center justify-center text-gray-500 mt-4 ml-4 ">
              Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
              Minus, <br /> doloremque.
            </p>
          </div>
        </div>
        <div className="icon2 flex flex-col items-center justify-center mx-16">
          <div className="icon fle items-center justify-center">
            <img src={araba} alt="" className="h-14" />
          </div>
          <div className="title flex items-center justify-center font-bold">
            <p className="flex items-center justify-center">Quick Delivery</p>
          </div>
          <div className="content flex items-center justify-center text-center">
            <p className="flex items-center justify-center text-gray-500 mt-4 ml-4 ">
              Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
              Minus, <br /> doloremque.
            </p>
          </div>
        </div>
        <div className="icon3 flex flex-col items-center justify-center mx-16">
          <div className="icon fle items-center justify-center">
            <img src={zil} alt="" className="h-14" />
          </div>
          <div className="title flex items-center justify-center font-bold">
            <p className="flex items-center justify-center">Quick Delivery</p>
          </div>
          <div className="content flex items-center justify-center text-center">
            <p className="flex items-center justify-center text-gray-500 mt-4 ml-4 ">
              Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
              Minus, <br /> doloremque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
