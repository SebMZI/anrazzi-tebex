import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export const metadata = {
  title: "Anrazzi | Home",
  description:
    "Anrazzi offers premium FiveM scripts, custom resources, and high-quality GTA 5 mods for an enhanced gaming experience. Explore exclusive content, mods, and resources to elevate your GTA 5 roleplay with top-tier FiveM scripts and customizations.",
  keywords: ["FiveM", "GTA5", "Scrips", "Fivem Server", "Resources"],
  openGraph: {
    title: "Anrazzi | Home",
    description:
      "Anrazzi offers premium FiveM scripts, custom resources, and high-quality GTA 5 mods for an enhanced gaming experience. Explore exclusive content, mods, and resources to elevate your GTA 5 roleplay with top-tier FiveM scripts and customizations.",
    url: "https://anrazzi.fr",
    siteName: "Anrazzi",
    images: [
      {
        url: "/images/anrazzi-opengraph.webp",
        width: 1280,
        height: 720,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Anrazzi - FiveM Scripts for GTA 5 Servers | Premium Resources & Tools",
    description:
      "Boost your GTA 5 roleplay server with premium FiveM scripts and custom resources. Explore exclusive tools to enhance your gaming experience today!",
    images: {
      url: "/images/anrazzi-opengraph.webp",
      alt: "Anrazzi Logo",
    },
    site: "@Anrazzi",
  },
};

export default function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
