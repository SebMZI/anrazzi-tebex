"use client";
import React, { useEffect } from "react";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import { StoreHero } from "../components/StoreHero";
import Footer from "../components/Footer";
import StoreCollections from "../components/StoreCollections";

const page = () => {
  
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <StoreHero />
        <StoreCollections />
      </main>
      <Footer />
    </>
  );
};

export default page;
