"use client";
import React, { useEffect, useContext } from "react";
import BasketHero from "./BasketHero";
import { basketContext } from "@/app/layout";
import { decryptCookie } from "../utils/functions";
import { fetchBasket } from "../utils/fetch";
import BasketContent from "./BasketContent";

const Basket = () => {
  const {
    basket,
    setBasket,
    isAuthentificated,
    setIsAuthentificated,
    basketIdent,
    setBasketIdent,
  } = useContext(basketContext);

  async function getBasket(basketIndent) {
    if (!basketIndent) return;
    try {
      const basket = await fetchBasket(basketIndent);
      if (basket) {
        setBasket(basket);
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getBasket(decryptCookie());
  }, []);

  return (
    <main className="">
      <BasketHero />
      <BasketContent basket={basket} setBasket={setBasket} />
    </main>
  );
};

export default Basket;
