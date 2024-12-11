"use client";
import React, { useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import Button from "./Button";
import {
  removePackageToBasket,
  addCouponToBasket,
  removeCouponFromBasket,
  fetchBasket,
} from "../utils/fetch";
import { createNewBasket, decryptCookie } from "../utils/functions";
import { basketContext } from "../layout";
import Tebex from "@tebexio/tebex.js";

const BasketContent = () => {
  const {
    basket,
    setBasket,
    isAuthentificated,
    setIsAuthentificated,
    basketIdent,
    setBasketIdent,
  } = useContext(basketContext);
  const [coupon, setCoupon] = useState("");
  const [basketCoupon, setBasketCoupon] = useState("");

  async function handleDeletion(scriptId) {
    const newBasket = await removePackageToBasket(scriptId);
    setBasket(newBasket);
  }

  async function addCoupon() {
    if (!coupon) return;
    setBasketCoupon(coupon);
    const newBasket = await addCouponToBasket(coupon);
    setBasketCoupon(newBasket.coupons[0].code);
    setCoupon("");
    setBasket(newBasket);
  }

  async function handleRemoveCoupon() {
    const newBasket = await removeCouponFromBasket(basketCoupon);
    setBasket(newBasket);
    setBasketCoupon("");
  }

  function directToCheckout() {
    Tebex.checkout.init({
      ident: decryptCookie(),
      locale: "en_US",
      theme: "auto",
    });
    Tebex.checkout.launch();
    Tebex.checkout.on("payment:complete", async (event) => {
      console.log("Payment completed!", event);
      setBasket({});
      Cookies.remove("basketIdent");
      setBasketIdent("");
      setIsAuthentificated(false);
      createNewBasket(isAuthentificated, setBasketIdent);
    });
  }

  return (
    <section id="basketcontent" className="py-[8.5rem]">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-start items-start gap-16 px-5">
        <h2 className="w-full text-left font-medium text-5xl">Your cart</h2>

        {basket?.packages?.length > 0 ? (
          <div className="w-full flex flex-col gap-3 py-2">
            {basket?.packages?.map((script, i) => {
              return (
                <div
                  key={i}
                  className="w-full flex justify-between items-center"
                >
                  <div className="w-full flex flex-col gap-2">
                    <h3 className="font-medium text-ascent text-xl">
                      {script.name}
                    </h3>
                    <p
                      className="line-clamp-2 text-ellipsis opacity-70"
                      dangerouslySetInnerHTML={{
                        __html: script.description,
                      }}
                    ></p>
                  </div>
                  <div className="w-full flex justify-end gap-4 text-xl">
                    <p>{script?.in_basket?.price} €</p>
                    <p
                      className="text-red-700 cursor-pointer"
                      onClick={() => handleDeletion(script.id)}
                    >
                      X
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="w-full grid place-content-center">
            <p className="text-xl">
              It seems that you haven`&lsquo;t added anything...
            </p>
          </div>
        )}
        <div className="border-t-2 border-white-custom  py-6 w-full flex flex-col gap-10">
          <div className=" flex flex-col justify-start items-center gap-2">
            <div className="w-full flex justify-between items-center ">
              <h3 className="font-medium text-xl">Total without Taxes</h3>
              <p className="text-xl">{basket?.base_price} €</p>
            </div>
            <div className="w-full flex justify-between items-center">
              <h3 className="font-medium text-xl">Taxes</h3>
              <p className="text-xl">{basket?.sales_tax} €</p>
            </div>
            <div className="w-full flex justify-between items-center">
              <h3 className="font-medium text-xl">Total</h3>
              <p className="text-xl">{basket?.total_price} €</p>
            </div>
          </div>
          <div className="w-full flex justify-between items-start flex-wrap sm:flex-nowrap gap-5">
            <div className="w-full flex flex-col gap-4">
              <div className="flex justify-between w-full sm:justify-start items-center gap-4">
                <input
                  value={coupon}
                  type="text"
                  placeholder="JOB10"
                  onChange={(e) => setCoupon(e.target.value)}
                  className="bg-transparent inline-block w-full sm:w-auto border-[1px] border-border-light rounded-md py-3 px-6 font-medium text-base outline-none placeholder:text-border-light"
                />
                <Button text="Add Coupon" action={() => addCoupon()} />
              </div>
              {basket?.coupons?.length > 0 &&
                basket?.coupons?.map((coupon, i) => (
                  <div
                    key={i}
                    className="rounded-xl text-lg bg-light-black px-3 py-1 w-fit "
                  >
                    <p className="inline-block mr-3 opacity-70">
                      {coupon.code}
                    </p>
                    <p
                      className="text-red-700 inline-block cursor-pointer"
                      onClick={handleRemoveCoupon}
                    >
                      X
                    </p>
                  </div>
                ))}
            </div>

            <Button text="Checkout" action={() => directToCheckout()} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasketContent;
