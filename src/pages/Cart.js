import React from "react";
import { useGlobalContext } from "../context/context";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Cart() {
  const { cart,removeItem } = useGlobalContext();

  if (cart.length < 1)
    return (
      <div className="cart mt-36 ">
        <div className="title">
          <h1 className="text-4xl font-bold w-full h-[200px] flex items-center pl-10 border  bg-orange-100">
            Your Cart
          </h1>
        </div>
        <div className="cartItems flex w-full">
          <div className="cartContainer flex border w-[1115px] h-[120px] items-center justify-between">
            <h1 className="text-2xl font-bold">Your cart is empty</h1>
          </div>
        </div>
      </div>
    );

  return (
    <div className="cart mt-36 ">
      <div className="title">
        <h1 className="text-4xl font-bold  h-[200px] flex items-center pl-10 border  bg-orange-100">
          Your Cart
        </h1>
      </div>
      <div className="cartItems flex flex-col  w-full ml-24 mt-12">
        {cart.map((item) => {
          const { id, title, price, image01, amount } = item;
          return (
            <div className="cartContainer flex border w-[1115px] h-[120px] items-center justify-between mb-5 px-5">
              <div className="cartImage">
                <h1 className="font-bold ml-5 mb-2 border-b-2 border-black">
                  Image
                </h1>
                <img src={image01} alt={title} className="w-[70px]" />
              </div>
              <div className="cartTitle">
                <h1 className="font-bold mb-7 border-b-2 border-black">
                  Product Title
                </h1>
                <h1>{title}</h1>
              </div>
              <div className="cartPrice">
                <h1 className="font-bold  mb-7 border-b-2 border-black">
                  Price
                </h1>
                <h1>${price}</h1>
              </div>
              <div className="cartAmount">
                <h1 className="font-bold  mb-7 border-b-2 border-black">
                  Amount
                </h1>
                <h1>{amount}</h1>
              </div>
              <div className="cartRemove">
                <h1 className="font-bold  mb-7 border-b-2 border-black">
                  Remove
                </h1>
                <MdDelete className="text-red-500 text-2xl cursor-pointer" onClick={
                  ()=>removeItem(id)
                }/>
              </div>
            </div>
          );
        })}
      </div>
      <div className="subTotal flex ">
        <div className="subTotalContainer  flex">
          <div className="title ml-24 font-bold mr-10">
            <h1 className="text-xl">Subtotal: </h1>
          </div>
          <div className="subTotalPrice flex justify-center h-[50px] font-bold text-2xl text-red-700">
           <p className="mr-1 text-sm flex justify-center-center"> $</p>{" "}
            {cart.reduce((acc, curr) => {
              return acc + curr.price * curr.amount;
            }, 0)}
          </div>
        </div>
      </div>
      <div className="buttons">
        <Link to="/foods">
          <button className="bg-red-500 mt-10 ml-24 text-white w-[150px] h-[60px] rounded-md hover:bg-red-600 duration-300">
            Continue Shopping
          </button>
        </Link>
        <button className="bg-red-500 mt-10 ml-24 text-white w-[150px] h-[60px] rounded-md hover:bg-red-600 duration-300">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
