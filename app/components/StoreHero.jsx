import Image from "next/image";
import React from "react";
import Button from "./Button";

export const StoreHero = () => {
  return (
    <section id="store-hero" className=" py-[8.5rem] px-5 relative">
      <div className="max-w-screen-xl mx-auto relative z-10 px-5">
        <div className="text-center mb-10">
          <h1 className="font-bold text-left text-5xl sm:text-[4rem] mb-4 leading-none sm:break-normal break-words">
            <span className="text-ascent">Performance</span> at Your Fingertips
          </h1>
          <h2 className="text-lg sm:text-xl text-left">
            Discover our collection of scripts to create ultra-immersive RP
            gaming experiences
          </h2>
        </div>
        <Button text="Shop Now" link="/store#collections" />
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
