import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export const metadata = {
  title: "Anrazzi | Home",
  description:
    "Anrazzi offers premium FiveM scripts, custom resources, and high-quality GTA 5 mods for an enhanced gaming experience. Explore exclusive content, mods, and resources to elevate your GTA 5 roleplay with top-tier FiveM scripts and customizations.",
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
