import Image from "next/image";
import React from "react";

const BasketHero = () => {
  return (
    <section id="basket-hero" className=" py-[8.5rem] relative">
      <div className="max-w-screen-xl mx-auto relative z-10 px-5">
        <div className="text-center mb-10">
          <h1 className="font-bold text-left text-5xl sm:text-[4rem] mb-4 leading-none">
            <span className="text-white-custom">Basket</span>
          </h1>
        </div>
      </div>
      <Image
        src="/images/background-img.png"
        alt="Dotted transparent background"
        width="1440"
        height="645"
        className="absolute inset-0 object-cover w-full h-full"
      />
    </section>
  );
};

export default BasketHero;
