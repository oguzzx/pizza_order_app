import React from "react";
import Products from "../components/Products/Products";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../context/context";
import FilterProducts from "../components/FilterProducts/FilterProducts";

function AllFoods() {
  const { searchTerm, setSearchTerm, selectValue, setSelectValue } =
    useGlobalContext();
  return (
    <div className="foods mt-36">
      <div className="title">
        <h1 className="text-4xl font-bold w-full h-[200px] flex items-center pl-10 border  bg-orange-100">
          All Foods
        </h1>
      </div>
      <div className="form flex items-center justify-between">
        <div className="input ml-10 mt-16 flex items-center border">
          <input
            type="text"
            placeholder="I'm looking for..."
            className="border-none outline-none font-bold w-[400px] h-[50px] pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="icon">
            <AiOutlineSearch className="w-6 h-6 text-gray-500" />
          </div>
        </div>
        <div className="select mt-16 mr-16">
          <select
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value="">İşlem Seçiniz</option>
            <option value="a-z">Alfabetik A-Z</option>
            <option value="z-a">Alfabetik Z-A</option>
            <option value="low-high">Fiyat Artan</option>
            <option value="high-low">Fiyat Azalan</option>
          </select>
        </div>
      </div>
      <div className="products ml-10">
        <FilterProducts />
      </div>
    </div>
  );
}

export default AllFoods;
