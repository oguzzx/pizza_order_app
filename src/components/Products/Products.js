import React from "react";
import { useGlobalContext } from "../../context/context";
import { Link } from "react-router-dom";

function Products() {
  const { products, addToCart, handleProductClick } = useGlobalContext();
  return (
    <div className="grid grid-cols-4 gap-5 mt-5">
      {products.map((product) => {
        const { image01, title, price, id } = product;
        return (
          <div
            className="flex flex-col  justify-center items-center border w-[250px] h-[250px]"
            key={id}
          >
            <img
              src={image01}
              key={id}
              alt={title}
              className="w-24 h-24 hover:scale-110 duration-300"
            />
            <Link
              to={`/foods/${product.id}`}
              onClick={() => handleProductClick(product)}
            >
              <h1 className="font-bold">{title}</h1>
            </Link>
            <div className="price flex mt-8">
              <h1 className="text-red-500 mr-5">${price}</h1>
              <button
                className="bg-red-500 text-white w-[100px] rounded-md hover:bg-red-600 duration-300"
                onClick={() => addToCart(product)}
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
