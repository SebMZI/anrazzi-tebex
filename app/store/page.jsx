import React from "react";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import { StoreHero } from "../components/StoreHero";
import Footer from "../components/Footer";
import StoreCollections from "../components/StoreCollections";

export const metadata = {
  title: "Anrazzi | Store",
  description:
    "Discover the latest FiveM scripts, resources, and exclusive deals on Anrazzi, your online store for high-quality GTA 5 custom content.",
};

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
