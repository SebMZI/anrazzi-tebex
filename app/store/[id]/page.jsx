import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import ProductPage from "@/app/components/ProductPage";
import Topbar from "@/app/components/Topbar";
import React from "react";

const page = () => {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <ProductPage />
      </main>
      <Footer />
    </>
  );
};

export default page;
