import React from "react";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Basket from "../components/Basket";

export const metadata = {
  title: "Anrazzi | Basket",
  description:
    "Review and manage your cart at Anrazzi. Shop the latest FiveM scripts, GTA 5 mods, and exclusive custom content for an enhanced gaming experience. Checkout now for top-tier GTA 5 resources!",
};

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
