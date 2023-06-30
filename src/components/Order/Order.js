import React from "react";
import { AiFillCar } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { BiArrowFromLeft } from "react-icons/bi";
import heroPng from "../../assets/hero.png"

function Order() {
  return (
    <div className="order  w-[1175px] h-[490px] flex  justify-between mt-40 ">
      <div className="order-left ml-5">
        <div className="order-title ml-7">
          <p className="mt-20 font-bold text-lg">Easy way to make an order</p>
          <h3 className="font-bold text-xl">
            <span className="text-red-500 text-4xl font-bold">HUNGRY?</span>{" "}
            Just wait <br /> food at{" "}
            <span className="text-red-500 text-4xl font-bold">your door</span>
          </h3>
        </div>
        <div className="order-content text-gray-500 ml-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni
          delectus <br /> tenetur autem, sint veritatis!
        </div>
        <div className="order-button flex items-center justify-between m-5  h-8 w-72">
          <button className="order-btn bg-red-500 text-white ml-5 rounded-md flex items-center p-2 ">
            <p className="pr-2 font-bold"> Order Now</p>{" "}
            <BiArrowFromLeft className="text-lg" />
          </button>
          <button className="order-btn bg-red-500 text-white ml-5 rounded-md flex items-center p-2 ">
            See all foods
          </button>
        </div>
        <div className="order-icon  flex m-5 px-7 items-center font-bold">
          <AiFillCar className="bg-red-500 text-white rounded-full" />
          <p className="mr-7">No shipping charge</p>
          <TiTick className="bg-red-500 text-white rounded-full" />
          <p>100% secure checkout</p>
        </div>
      </div>
      <div className="order-right">
        <div className="img">
          <img src={heroPng} alt="" className="h-[550px]"/>
        </div>
      </div>
    </div>
  );
}

export default Order;
