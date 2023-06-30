import React from "react";

function Contact() {
  return (
    <div className="contact mt-36 ml-12 flex flex-col items-center justify-center">
      <div className="title">
        <p className="font-bold text-2xl">Bizimle İletişime Geçin</p>
      </div>
      <div className="form flex flex-col border rounded-xl bg-orange-100 w-[300px] mt-10">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="w-[150px] mt-8 ml-4 outline-none bg-orange-100 border-b-2 border-black"
        />
        <button className="flex w-[70px] bg-red-500 hover:scale-105 text-white items-center justify-center rounded-2xl mt-8 mb-4 ml-4">
          Gönder
        </button>
      </div>
    </div>
  );
}

export default Contact;
