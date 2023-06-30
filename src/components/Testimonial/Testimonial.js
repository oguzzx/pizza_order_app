import React from "react";
import Slider from "react-slick";
import person1 from "../../assets/ava-1.jpg";
import person2 from "../../assets/ava-2.jpg";
import person3 from "../../assets/ava-3.jpg";
import network from "../../assets/network.png";

function Testimonial() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,

  // };

  // const slides = [
  //   {
  //     id: 1,
  //     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio voluptas esse harum dicta. Ea rerum, molestiae, sequi quae qui error non unde doloremque laudantium enim magni rem placeat veritatis deserunt?",
  //     name: "John Doe",
  //     img: person1,
  //   },
  //   {
  //     id: 2,
  //     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio voluptas esse harum dicta. Ea rerum, molestiae, sequi quae qui error non unde doloremque laudantium enim magni rem placeat veritatis deserunt?",
  //     name: "John Doe",
  //     img: person2,
  //   },
  //   {
  //     id: 3,
  //     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio voluptas esse harum dicta. Ea rerum, molestiae, sequi quae qui error non unde doloremque laudantium enim magni rem placeat veritatis deserunt?",
  //     name: "John Doe",
  //     img: person3,
  //   },
  // ];

  return (
    <div className="testimonial mt-20 flex">
      <div className="left">
        <h4 className="title text-lg text-red-500 font-bold">Testimonial</h4>
        <div className="content">
          <h1 className="title text-4xl mt-5">
            What our <span className="text-red-500 font-bold">customers</span>{" "}
            are saying
          </h1>
          <p className="text text-gray-400 mt-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            quasi qui <br /> minus quos sit perspiciatis inventore quis
            provident placeat fugiat!
          </p>
        </div>
        <div className="slide">
          <div className="content mt-6">
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis atque, <br /> quam minus totam maiores laborum!
              Impedit consectetur illum aliquid odit. <br /> Odit dolore ipsum
              quod debitis nostrum necessitatibus quis dolorem quas!
            </p>
          </div>
          <div className="image flex mt-10">
            <img src={person1} alt="" className="w-[50px] mr-10" />
            <p className="font-bold"> Jhon doe</p>
          </div>
        </div>
      </div>
      <div className="right ml-10">
        <img src={network} alt="" className="w-[550px]" />
      </div>
    </div>
  );
}

export default Testimonial;
