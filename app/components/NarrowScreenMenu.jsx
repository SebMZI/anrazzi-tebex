"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const NarrowScreenMenu = ({
  basket,
  setBasket,
  setBasketIdent,
  setIsAuthentificated,
}) => {
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
    <div className="sm:hidden block ">
      <div
        className={`sm:hidden flex flex-col gap-2 cursor-pointer ${
          menuOpen ? "fixed z-50 right-[20px] top-[97px]" : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div
          className={`w-7 h-[2px] bg-white-custom transition-all ${
            menuOpen
              ? "rotate-45 translate-y-[8px]"
              : "rotate-0 translate-y-[0px]"
          }`}
        ></div>
        <div
          className={`w-7 h-[2px] bg-white-custom transition-all ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-7 h-[2px] bg-white-custom transition-all ${
            menuOpen
              ? "-rotate-45 -translate-y-[12px]"
              : "-rotate-0 -translate-y-[0px]"
          }`}
        ></div>
      </div>

      <div
        className={`fixed z-40 inset-0 bg-background text-white-custom w-full h-screen transition-all duration-300 flex flex-col justify-center items-center ${
          menuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-[300px] opacity-0 pointer-events-none"
        }`}
      >
        <nav className={`${menuOpen ? "block mb-5" : "hidden"}`}>
          <ul className="flex flex-col justify-center items-center gap-5 text-xl">
            <li
              className={`py-4 px-10 `}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`py-4 px-10 `}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Link href="/store">Store</Link>
            </li>
          </ul>
        </nav>
        <div
          className={`${
            menuOpen
              ? "flex  flex-col justify-center items-center gap-5"
              : "hidden"
          }`}
        >
          {basket?.ident ? (
            <Link
              href="/basket"
              className="relative py-4 px-10"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Image
                src={`${
                  theme === "light"
                    ? "/images/icon-basket-dark.png"
                    : "/images/icon-basket.png"
                }`}
                alt="Basket Icon"
                width="25"
                height="26"
              />
              {basket?.packages.length > 0 && (
                <div className="absolute top-0 right-0 rounded-full bg-ascent opacity-70 h-2 w-2"></div>
              )}
            </Link>
          ) : (
            <div className="py-4 px-10" onClick={() => setMenuOpen(!menuOpen)}>
              <Image
                src={`${
                  theme === "light"
                    ? "/images/icon-basket-dark.png"
                    : "/images/icon-basket.png"
                }`}
                alt="Basket Icon"
                width="25"
                height="26"
              />
            </div>
          )}

          {basket?.length < 1 ? (
            <div className="py-4 px-10" onClick={() => setMenuOpen(!menuOpen)}>
              <Image
                src={`${
                  theme === "light"
                    ? "/images/icon-user-dark.png"
                    : "/images/icon-user.png"
                }`}
                alt="User Icon"
                width="25"
                height="26"
              />
            </div>
          ) : (
            <p
              className="cursor-pointer hover:underline py-4 px-10 text-white-custom"
              title="Disconnect"
              onClick={() => {
                handleDisconnect();
                setMenuOpen(!menuOpen);
              }}
            >
              {basket?.username}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NarrowScreenMenu;
