import React from "react";
import { useGlobalContext } from "../../context/context";
import pizza from "../../assets/pizza.png";
import burger from "../../assets/hamburger.png";
import bread from "../../assets/bread.png";

function Categories() {
  const { products, allCategories, categories, setCategories, filterItems } =
    useGlobalContext();
  const categoriesIcon = [burger, pizza, bread];
  return (
    <div className="categories mt-7 border h-[60px] w-[900px] bg-red-500  flex items-center justify-center ">
      <div className="flex justify-center items-center">
        {allCategories.map((category, index) => {
          return (
            <div className="flex mx-10" key={index}>
              {/* her bir ürünün başına o ürünün iconunu koy
                    eğer kategori all ise iconu koyma
              */}
              {category !== "All" && (
                <img
                  src={categoriesIcon[index - 1]}
                  alt={category}
                  className="w-7 h-7"
                />
              )}

              <button
                key={index}
                className={`text-2xl font-bold text-white mx-5 ${
                  // seçili kategoriye göre o kategorinin etrafına border çiz
                  categories === category && "border-b-4 border-white"
                }`}
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
