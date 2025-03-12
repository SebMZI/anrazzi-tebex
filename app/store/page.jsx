import React from "react";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import { StoreHero } from "../components/StoreHero";
import Footer from "../components/Footer";
import StoreCollections from "../components/StoreCollections";

export const metadata = {
  title: "Anrazzi Store | High-Quality FiveM Scripts for GTA 5 Servers",
  description:
    "Discover the latest FiveM scripts, resources, and exclusive deals at Anrazzi, your online store for premium GTA 5 custom content.",
  keywords: [
    "FiveM",
    "GTA5",
    "Scripts",
    "FiveM Server",
    "Resources",
    "MLO",
    "Mapping",
  ],
  openGraph: {
    title: "Anrazzi Store | High-Quality FiveM Scripts for GTA 5 Servers",
    description:
      "Discover the latest FiveM scripts, resources, and exclusive deals at Anrazzi, your online store for premium GTA 5 custom content.",
    url: "https://anrazzi.fr/store",
    siteName: "Anrazzi",
    images: [
      {
        url: "/images/anrazzi-opengraph.webp",
        width: 1280,
        height: 720,
        alt: "Anrazzi Storefront",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anrazzi Store | High-Quality FiveM Scripts for GTA 5 Servers",
    description:
      "Discover the latest FiveM scripts, resources, and exclusive deals at Anrazzi, your online store for premium GTA 5 custom content.",
    images: {
      url: "/images/anrazzi-opengraph.webp",
      alt: "Anrazzi Storefront",
    },
    site: "@Anrazzi",
  },
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
