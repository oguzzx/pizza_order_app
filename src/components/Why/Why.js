import React from "react";
import { TiTick } from "react-icons/ti";
import location from "../../assets/location.png";

function Why() {
  return (
    <div className="mt-20  w-[1200px] flex items-center justify-center ">
      <div className="left flex">
        <div className="image">
          <img src={location} alt="location" className="h-[500px]" />
        </div>
      </div>
      <div className="right ml-20 flex flex-col  items-center justify-center">
        <div className="title text-center">
          <h1 className="text-4xl font-bold">
            Why
            <span className="text-red-500">Tasty Treat?</span>
          </h1>
        </div>
        <div className="content mt-16">
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            minus. <br /> Tempora reprehenderit a corporis velit, laboriosam
            vitae ullam, repellat illo <br /> sequi odio esse iste fugiat dolor,
            optio incidunt eligendi deleniti!
          </p>
        </div>
        <div className="list flex flex-col">
          <div className="list1">
            <div className="title flex">
              <TiTick />
              <p className="pl-5 font-medium">Fresh and tasty foods</p>
            </div>
            <div className="content text-gray-500 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,{" "}
              <br />
              voluptatibus.
            </div>
          </div>
          <div className="list2">
            <div className="title">
              <TiTick />
              <p className="pl-5 font-medium">Quality support</p>
            </div>
            <div className="content text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              earum.
            </div>
          </div>
          <div className="list3">
            <div className="title">
              <TiTick />
              <p className="pl-5 font-medium">Order from any location</p>
            </div>
            <div className="content text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              earum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
