import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import TermsMain from "@/app/components/TermsMain";
import Topbar from "@/app/components/Topbar";
import React from "react";

const page = () => {
  return (
    <>
      <Topbar />
      <Header />
      <TermsMain />
      <Footer />
    </>
  );
};

export default page;
