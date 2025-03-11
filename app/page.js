import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export const metadata = {
  title: "Anrazzi - Premium FiveM Scripts & Tools for GTA 5 Servers",
  description:
    "Boost your GTA 5 roleplay server with premium FiveM scripts and custom resources. Explore exclusive tools designed to enhance your gaming experience today!",
  keywords: ["FiveM", "GTA5", "Scrips", "Fivem Server", "Resources"],
  openGraph: {
    title: "Anrazzi - Premium FiveM Scripts & Tools for GTA 5 Servers",
    description:
      "Boost your GTA 5 roleplay server with premium FiveM scripts and custom resources. Explore exclusive tools designed to enhance your gaming experience today!",
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
    title: "Anrazzi - Premium FiveM Scripts & Tools for GTA 5 Servers",
    description:
      "Boost your GTA 5 roleplay server with premium FiveM scripts and custom resources. Explore exclusive tools designed to enhance your gaming experience today!",
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
