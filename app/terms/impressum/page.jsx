import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import ImpressumMain from "@/app/components/ImpressumMain";
import Topbar from "@/app/components/Topbar";
import React from "react";

const page = () => {
  return (
    <>
      <Topbar />
      <Header />
      <ImpressumMain />
      <Footer />
    </>
  );
};

export default page;
