import Order from "../components/Order/Order";
import Foods from "../components/Foods/Foods";
import Section from "../components/Section/Section";
import PopularFoods from "../components/PopularFoods/PopularFoods";
import Products from "../components/Products/Products";
import Why from "../components/Why/Why";
import HotPizza from "../components/HotPizza/HotPizza";
import Testimonial from "../components/Testimonial/Testimonial";

function Home() {
  return (
    <div className="ml-20  mt-36">
      <Order />
      <Foods />
      <Section />
      <PopularFoods />
      <Products />
      <Why />
      <HotPizza />
      <Testimonial />
    </div>
  );
}

export default Home;
