import { createContext, useContext, useEffect, useState } from "react";
import data from "../api/data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  // datanın içindeki categorileri alıp unique bir şekilde array içinde tutuyoruz.
  const [categories, setCategories] = useState("All");
  const allCategories = ["All", ...new Set(data.map((item) => item.category))];
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [image, setImage] = useState(products.image01);

  // categori eğer all ise bütün ürünleri göster
  // değilse o kategoriye ait ürünleri göster
  const filterItems = (category) => {
    if (category === "All") {
      setProducts(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setProducts(newItems);
    // seçili kategoriye göre o kategorinin etrafına border çiz
    setCategories(category);

    console.log(category);
  };

  const addToCart = (product) => {
    const { id, title, price, image01 } = product;
    const item = cart.find((item) => item.id === id);
    console.log(item);
    if (item) {
      setCart(
        cart.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        })
      );
    } else {
      const newItem = { id, title, price, image01, amount: 1 };
      setCart([...cart, newItem]);
    }
  };
  // console.log(cart);

  const increaseAmount = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setCart(newCart);
  };

  const decreaseAmount = (id) => {
    const newCart = cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    setCart(newCart);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleImage = (image) => {
    setImage(image);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const [filteredProducts, setFilteredProducts] = useState([]);

  // inputtaki veriye göre filtreleme
  const filterProducts = (searchTerm) => {
    if (searchTerm !== "") {
      const newProducts = products.filter((product) => {
        return Object.values(product)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setFilteredProducts(newProducts);
    } else {
      setFilteredProducts(products);
    }
  };

  const [selectValue, setSelectValue] = useState("");

  // select option kısmındaki value değerine göre filtreleme
  const urunSirala = () => {
    // value değerleri a-z,z-a,low-high,high-low
    if (selectValue === "a-z") {
      const newProducts = products.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
      setFilteredProducts(newProducts);
    }
    if (selectValue === "z-a") {
      const newProducts = products.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setFilteredProducts(newProducts);
    }
    if (selectValue === "low-high") {
      const newProducts = products.sort((a, b) => {
        return b.price - a.price;
      });
      setFilteredProducts(newProducts);
    }
    if (selectValue === "high-low") {
      const newProducts = products.sort((a, b) => {
        return a.price - b.price;
      });
      setFilteredProducts(newProducts);
    }
  };

  // butona tıkladığında cartın içindeki tıklanılan ürünü sil
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const [login, setLogin] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");

  // loginemail ve registeremail değerlerini kontrol et duruma göre login i true yada false yap

  const handleLogin = () => {
    if (loginEmail === registerEmail && loginPassword === registerPassword) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  console.log(login);
  console.log("loginemail:" + loginEmail);
  console.log("registeremail:" + registerEmail);
  console.log("loginpassword" + loginPassword);
  console.log("registerpassword" + registerPassword);

  useEffect(() => {
    filterProducts(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    urunSirala();
  }, [selectValue]);

  useEffect(()=>{
    handleLogin()
  })

  return (
    <AppContext.Provider
      value={{
        products,
        allCategories,
        categories,
        setCategories,
        filterItems,
        addToCart,
        isModalOpen,
        setIsModalOpen,
        openModal,
        handleProductClick,
        selectedProduct,
        image,
        handleImage,
        cart,
        increaseAmount,
        decreaseAmount,
        searchTerm,
        setSearchTerm,
        filteredProducts,
        selectValue,
        setSelectValue,
        removeItem,
        login,
        setLogin,
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
        registerEmail,
        setRegisterEmail,
        registerPassword,
        setRegisterPassword,
        registerName,
        setRegisterName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
