import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import AllFoods from "./pages/AllFoods";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { useGlobalContext } from "./context/context";
import FoodDetails from "./pages/FoodDetails";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register";

function App() {
  const { isModalOpen, setIsModalOpen, cart, increaseAmount, decreaseAmount } =
    useGlobalContext();
  return (
    <>
      <Router>
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-end z-10 bg-black bg-opacity-50">
            <div className="bg-white w-1/3 h-full overflow-y-auto">
              <div className="flex justify-between items-center px-4 py-2 bg-gray-200">
                <h3 className="text-lg font-semibold">Sepet</h3>
                <button
                  className="text-gray-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  X
                </button>
              </div>
              <div className="px-4 py-2 mb-16">
                {/* Modal içeriğini buraya ekleyin */}
                {cart.map((item) => {
                  const { id, title, price, image01, amount } = item;
                  return (
                    <div
                      className="flex justify-between items-center mt-4"
                      key={id}
                    >
                      <div className="flex items-center">
                        <img
                          src={image01}
                          alt={title}
                          className="w-16 h-16 mr-4"
                        />
                        <h3 className="text-lg font-semibold">{title}</h3>
                      </div>
                      <div className="flex items-center">
                        <h3 className="text-lg font-semibold">${price}</h3>
                        <div className="flex items-center border ml-4">
                          <button
                            className="px-2"
                            onClick={() => {
                              decreaseAmount(id);
                            }}
                          >
                            -
                          </button>
                          <h3 className="px-2">{amount}</h3>
                          <button
                            className="px-2"
                            onClick={() => {
                              increaseAmount(id);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* aşağıya toplam tutar ve checkout butonlarını ekle toplam tutar ve checkout alanı modalın en altında olsun*/}
              <div className="flex justify-between items-center px-4 py-2 bg-gray-200 w-[450px] fixed bottom-0 right-0">
                <h3 className="text-lg font-semibold">Toplam Tutar</h3>
                <h3 className="text-lg font-semibold">
                  $
                  {cart.reduce(
                    (acc, item) => acc + item.price * item.amount,
                    0
                  )}
                </h3>
                <Link to="/checkout" onClick={() => setIsModalOpen(false)}>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 duration-300">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/foods" exact component={AllFoods} />
          <Route path="/foods/:id" exact component={FoodDetails} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
