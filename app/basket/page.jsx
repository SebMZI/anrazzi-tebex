"use client";
import React from "react";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Basket from "../components/Basket";

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
