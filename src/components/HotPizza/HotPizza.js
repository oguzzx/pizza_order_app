import React from "react";
import { useGlobalContext } from "../../context/context";

function HotPizza() {
  const { products } = useGlobalContext();
  return (
    <div className="hotPizza mt-20 flex flex-col items-center justify-center  mr-10">
      <h2 className="text-4xl font-bold">Hot Pizza</h2>
      <div className="pizza flex items-center justify-center mt-10">
        {/* kategorisi pizza olanlardan ilk 4 tanesini koy */}
        {products
          .filter((product) => product.category === "Pizza")
          .slice(0, 4)
          .map((product) => {
            const { image01, title, price, id } = product;
            return (
              <div className="flex flex-col items-center justify-center border w-[250px] h-[250px] mx-6" key={id}>
                <img
                  src={image01}
                  key={id}
                  alt={title}
                  className="w-24 h-24 hover:scale-110 duration-300"
                />
                <h1 className="font-bold">{title}</h1>
                <div className="price flex mt-8">
                  <h1 className="text-red-500 mr-5">${price}</h1>
                  <button className="bg-red-500 text-white w-[100px] rounded-md hover:bg-red-600 duration-300">
                    Add
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HotPizza;
