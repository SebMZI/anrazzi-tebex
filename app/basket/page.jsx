"use client";
import React from "react";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";
// import Basket from "../components/Basket";

const Basket = dynamic(() => import("../components/Basket"), { ssr: false });
const page = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Basket />
      <Footer />
    </>
  );
};

export default page;
