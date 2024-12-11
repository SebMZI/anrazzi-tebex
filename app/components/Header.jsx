"use client";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { basketContext } from "@/app/layout";
import { disconnectSession } from "../utils/functions";
import WideScreenMenu from "./WideScreenMenu";
import NarrowScreenMenu from "./NarrowScreenMenu";

const Header = () => {
  const {
    basket,
    setBasket,
    isAuthentificated,
    setIsAuthentificated,
    basketIdent,
    setBasketIdent,
  } = useContext(basketContext);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const updateTheme = () => {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    };

    updateTheme();

    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQueryList.addEventListener("change", updateTheme);

    return () => mediaQueryList.removeEventListener("change", updateTheme);
  }, []);

  return (
    <header className="px-5 py-10 border-b-[1px] border-b-border-light">
      <div className="max-w-screen-xl mx-auto w-full flex justify-between items-center">
        <div>
          <Link href="/" className="header-link flex items-center">
            {theme === "light" ? (
              <Image
                src="/images/anrazzi-logo-black.png"
                alt="Black logo for light mode"
                width="148"
                height="148"
                className="h-16 w-16"
              />
            ) : (
              <Image
                src="/images/anrazzi-logo-white.png"
                alt="White logo for dark mode"
                width="148"
                height="148"
                className="h-16 w-16"
              />
            )}
            <p className="text-xl font-bold">Anrazzi</p>
          </Link>
        </div>
        <WideScreenMenu
          basket={basket}
          setBasket={setBasket}
          setBasketIdent={setBasketIdent}
          setIsAuthentificated={setIsAuthentificated}
        />
        <NarrowScreenMenu
          basket={basket}
          setBasket={setBasket}
          setBasketIdent={setBasketIdent}
          setIsAuthentificated={setIsAuthentificated}
        />
      </div>
    </header>
  );
};

export default Header;
