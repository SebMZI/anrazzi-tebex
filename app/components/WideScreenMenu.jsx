"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { disconnectSession } from "../utils/functions";

const WideScreenMenu = ({
  basket,
  setBasket,
  setBasketIdent,
  setIsAuthentificated,
}) => {
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

  const pathname = usePathname();

  function handleDisconnect() {
    disconnectSession(setBasket, setBasketIdent, setIsAuthentificated);
  }
  return (
    <>
      <nav className="sm:block hidden">
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
      <div className="hidden sm:flex justify-center gap-4">
        {basket?.ident ? (
          <Link href="/basket" className="relative">
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
        )}

        {basket?.length < 1 ? (
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
    </>
  );
};

export default WideScreenMenu;
