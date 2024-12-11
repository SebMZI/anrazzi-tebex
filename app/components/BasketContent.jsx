"use client";
import React, { useState, useContext } from "react";

import {
  removePackageToBasket,
  addCouponToBasket,
  removeCouponFromBasket,
  fetchBasket,
} from "../utils/fetch";

import { basketContext } from "../layout";
import dynamic from "next/dynamic";

const Checkout = dynamic(() => import("./Checkout"), { ssr: false });

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

  return (
    <section id="basketcontent" className="py-[4.5rem] sm:py-[8.5rem]">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-start items-start gap-10 sm:gap-16 px-5">
        <h2 className="w-full text-left font-medium text-4xl sm:text-5xl">
          Your cart
        </h2>

        {basket?.packages?.length > 0 ? (
          <div className="w-full flex flex-col gap-3 py-2">
            {basket?.packages?.map((script, i) => {
              return (
                <div
                  key={i}
                  className="w-full flex justify-between items-center gap-5 sm:gap-0"
                >
                  <div className="w-full flex flex-col gap-2">
                    <h3 className="font-medium text-ascent text-lg sm:text-xl">
                      {script.name}
                    </h3>
                    <p
                      className="line-clamp-2 text-ellipsis opacity-70 text-sm sm:text-base"
                      dangerouslySetInnerHTML={{
                        __html: script.description,
                      }}
                    ></p>
                  </div>
                  <div className="w-3/4 sm:w-full flex justify-end gap-4 text-lg sm:text-xl">
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
            <p className="text-lg sm:text-xl">
              It seems that you haven&lsquo;t added anything...
            </p>
          </div>
        )}
        <div className="border-t-2 border-white-custom  py-6 w-full flex flex-col gap-10">
          <div className=" flex flex-col justify-start items-center gap-1 sm:gap-2">
            <div className="w-full flex justify-between items-center ">
              <h3 className="font-medium text-lg sm:text-xl">
                Total without Taxes
              </h3>
              <p className="text-lg sm:text-xl">{basket?.base_price} €</p>
            </div>
            <div className="w-full flex justify-between items-center">
              <h3 className="font-medium text-lg sm:text-xl">Taxes</h3>
              <p className="text-lg sm:text-xl">{basket?.sales_tax} €</p>
            </div>
            <div className="w-full flex justify-between items-center">
              <h3 className="font-medium text-lg sm:text-xl">Total</h3>
              <p className="text-lg sm:text-xl">{basket?.total_price} €</p>
            </div>
          </div>
          <Checkout
            isAuthentificated={isAuthentificated}
            setIsAuthentificated={setIsAuthentificated}
            setBasketIdent={setBasketIdent}
            setCoupon={setCoupon}
            setBasketCoupon={setBasketCoupon}
            setBasket={setBasket}
            basketCoupon={basketCoupon}
            coupon={coupon}
            basket={basket}
          />
        </div>
      </div>
    </section>
  );
};

export default BasketContent;
