import React from "react";
import { useGlobalContext } from "../context/context";

function FoodDetails() {
  const { selectedProduct, products } = useGlobalContext();
  const { image01, image02, image03, title, price, category, desc } =
    selectedProduct;
  console.log(selectedProduct);
  return (
    <div className="details mt-36">
      <div className="title border h-[150px] w-full flex items-center ">
        <h3 className="ml-20 text-3xl font-bold">{title}</h3>
      </div>
      <div className="product flex">
        <div className="treeImage  flex items-center justify-center flex-col  w-[300px] h-[300px]">
          <div className="top">
            <img src={image01} alt={image01} className="w-[86px] ml-24" />
          </div>
          <div className="mid">
            <img src={image02} alt={image02} className="w-[86px] ml-24" />
          </div>
          <div className="bottom">
            <img src={image03} alt={image03} className="w-[86px] ml-24" />
          </div>
        </div>
        <div className="image">
          <img
            src={image01}
            alt={title}
            className="w-[350px] h-[350px] ml-20"
          />
        </div>
        <div className="info">
          <div className="title">
            <h1 className="text-3xl font-bold mt-10 ml-16">{title}</h1>
          </div>
          <div className="price">
            <h1 className="text-2xl font-bold mt-10 ml-16 text-red-500">
              <span className="text-red-500">Price: </span>${price}
            </h1>
          </div>
          <div className="category">
            <h1 className="text-2xl font-bold mt-10 ml-16 flex">
              <span className="text-red-500">Category: </span>
              <p className="border ml-8 bg-red-200 p-1 rounded-md">
                {category}
              </p>
            </h1>
            <button className="bg-red-500 text-white w-[100px] rounded-md hover:bg-red-600 duration-300 mt-10 ml-16">
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="section m-10">
        <div className="description mr-10">
          <h1 className="text-2xl font-bold">Description</h1>
          <p className="mt-5">{desc}</p>
        </div>
      </div>
      {/* mevcut ürünün kategorisi hangisiyse o kategorideki ürünleri aşağıda göster */}
      <div className="hotPizza mt-20 flex flex-col items-center justify-center  mr-10">
      <h2 className="text-4xl font-bold">You might also like</h2>
      <div className="pizza flex items-center justify-center mt-10">
        {/* kategorisi pizza olanlardan ilk 4 tanesini koy */}
        {products
          .filter((product) => product.category === category)
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
    </div>
  );
}

export default FoodDetails;
