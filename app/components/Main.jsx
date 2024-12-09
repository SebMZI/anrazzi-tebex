import React from "react";
import Button from "./Button";
import Image from "next/image";
import Benefit from "./Benefit";
import Question from "./Question";
import Review from "./Review";
import Form from "./Form";

const Main = () => {
  return (
    <main>
      <section
        id="main-hero"
        className="flex flex-col justify-center items-center py-[11.25rem] relative"
      >
        <div className="text-center mb-12 z-10">
          <h1 className="font-bold text-center text-[4rem] max-w-4xl mb-4 leading-tight">
            Level Up Your <span className="text-ascent">FiveM</span> Server with
            Our Scripts
          </h1>
          <h2 className="text-xl">
            Handcrafted NUI Scripts and More for a Seamless Experience.
          </h2>
        </div>
        <Button text="Shop Now" link="/store" />
        <Image
          src="/images/background-img.png"
          alt="Dotted transparent background"
          width="1440"
          height="645"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </section>
      <section id="main-benefits" className="bg-light-black ">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full py-28">
          <Benefit title={"Simple"} subtitle={"Installation"} />
          <Benefit title={"Dedicated"} subtitle={"Support"} />
          <Benefit title={"Regular"} subtitle={"Updates"} />
        </div>
      </section>
      {/* <section id="reviews">
        <div className="max-w-screen-xl mx-auto flex flex-col justify-between items-center w-full py-28 gap-12">
          <h2 className="font-medium text-5xl text-left w-full">Reviews</h2>
          <div className="flex justify-between items-center w-full gap-10">
            <Review
              src="/images/pogo.png"
              width={"32"}
              height={"32"}
              title={"Pogo"}
              text={
                "Fast, efficient and will patch every bug, for the moment best developer I have found in 10 months."
              }
            />
            <Review
              src="/images/pogo.png"
              width={"32"}
              height={"32"}
              title={"Pogo"}
              text={"Best developer ever"}
            />
            <Review
              src="/images/pogo.png"
              width={"32"}
              height={"32"}
              title={"Pogo"}
              text={"Best developer ever"}
            />
          </div>
        </div>
      </section> */}
      <section id="faq">
        <div className="max-w-screen-xl mx-auto flex flex-col justify-between items-center w-full py-28 gap-12">
          <h2 className="font-medium text-5xl text-left w-full">
            Frequently Asked Questions
          </h2>
          <div className="flex justify-between items-start gap-10 w-full">
            <Question
              title={"How can I get support ?"}
              text={
                "It's simple, join our Discord server and open a ticket, the owner or a moderator will answer you."
              }
            />
            <Question
              title={"Can I get a custom script ?"}
              text={
                "Of course you can, just reach out to us. You can send a message using the form below or open a ticket on the Discord server."
              }
            />
            <Question
              title={"Are your scripts updated often ?"}
              text={
                "Our scripts are updated when needed. If a bug occurs we'll take care of it. You'll be notified when an fix has been done."
              }
            />
          </div>
        </div>
      </section>
      <section id="cta" className="bg-light-black">
        <div className="max-w-screen-xl py-28 mx-auto">
          <h2 className="text-[3.5rem] font-bold text-left max-w-4xl leading-tight mb-10 text-white-custom">
            Turn your server into a <span className="text-ascent">massive</span>{" "}
            success
          </h2>
          <Button text={"Start now"} link="/store" />
        </div>
      </section>
      <section id="contact" className="relative">
        <Form />
      </section>
    </main>
  );
};

export default Main;
