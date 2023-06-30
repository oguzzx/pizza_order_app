import React from "react";
import hamburgerIcon from "../../assets/category-01.png";
import pizzaIcon from "../../assets/category-02.png";
import asianIcon from "../../assets/category-03.png";
import meatIcon from "../../assets/category-04.png";

function Foods() {
  return (
    <div className="foods mt-20 flex items-center justify-center  h-[100px] w-full hover:translate-y-1 duration-300 ease-in-out hover:cursor-pointer ">
      <div className="fastFood flex items-center mr-10  p-5 bg-rose-100 w-[250px]">
        <img src={hamburgerIcon} alt="" className="mr-4" />
        <p className="text-center font-bold mr-7">Fast Food</p>
      </div>
      <div className="pizza flex items-center mr-10 p-5 bg-rose-100 w-[250px]">
        <img src={pizzaIcon} alt="" className="mr-4" />
        <p className="text-center font-bold mr-7">Pizza</p>
      </div>
      <div className="asian flex items-center mr-10 p-5 bg-rose-100 w-[250px]">
        <img src={asianIcon} alt="" className="mr-4" />
        <p className="text-center font-bold mr-7">Asian</p>
      </div>
      <div className="meat flex items-center p-5 bg-rose-100 w-[250px]">
        <img src={meatIcon} alt="" className="mr-4" />
        <p className="text-center font-bold mr-7">Meat</p>
      </div>
    </div>
  );
}

export default Foods;
