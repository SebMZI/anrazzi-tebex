"use client";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { basketContext } from "@/app/layout";
import { disconnectSession } from "../utils/functions";

const Header = () => {
  const {
    basket,
    setBasket,
    isAuthentificated,
    setIsAuthentificated,
    basketIdent,
    setBasketIdent,
  } = useContext(basketContext);
  const pathname = usePathname();

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

  function handleDisconnect() {
    disconnectSession(setBasket, setBasketIdent, setIsAuthentificated);
  }

  return (
    <header className="py-10 border-b-[1px] border-b-[rgba(255,255,255,0.5)]">
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
        <nav>
          <ul className="flex justify-center gap-10">
            <li className={`py-1 ${pathname == "/" ? "border-b-[1px]" : ""}`}>
              <Link href="/">Home</Link>
            </li>
            <li
              className={`py-1 ${pathname == "/store" ? "border-b-[1px]" : ""}`}
            >
              <Link href="/store">Store</Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center gap-4">
          <Link href="/basket">
            <Image
              src="/images/icon-basket.png"
              alt="Basket Icon"
              width="25"
              height="26"
            />
          </Link>
          {basket?.length < 1 ? (
            <Image
              src="/images/icon-user.png"
              alt="User Icon"
              width="25"
              height="26"
            />
          ) : (
            <p
              className="cursor-pointer hover:underline"
              title="Disconnect"
              onClick={() => handleDisconnect()}
            >
              {basket?.username}
            </p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
