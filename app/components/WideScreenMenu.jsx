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
  const pathname = usePathname();

  function handleDisconnect() {
    disconnectSession(setBasket, setBasketIdent, setIsAuthentificated);
  }
  return (
    <>
      <nav className="sm:block hidden">
        <ul className="flex justify-center gap-10">
          <li
            className={`py-1 ${
              pathname == "/" ? "border-b-[1px] border-ascent" : ""
            } relative hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[8%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 after:bg-ascent`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`py-1 ${
              pathname == "/store" ? "border-b-[1px] border-ascent" : ""
            } relative hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[8%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 after:bg-ascent`}
          >
            <Link href="/store">Store</Link>
          </li>
        </ul>
      </nav>
      <div className="hidden sm:flex justify-center gap-4 w-[131px]">
        {basket?.ident ? (
          <Link href="/basket" className="relative">
            <Image
              src={"/images/icon-basket.png"}
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
            src={"/images/icon-basket.png"}
            alt="Basket Icon"
            width="25"
            height="26"
          />
        )}

        {basket && (
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
