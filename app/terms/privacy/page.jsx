import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import PrivacyMain from "@/app/components/PrivacyMain";
import Topbar from "@/app/components/Topbar";
import React from "react";

const page = () => {
  return (
    <>
      <Topbar />
      <Header />
      <PrivacyMain />
      <Footer />
    </>
  );
};

export default page;
