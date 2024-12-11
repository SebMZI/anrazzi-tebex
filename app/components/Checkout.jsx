"use client";
import Button from "./Button";
import { createNewBasket, decryptCookie, showNotification } from "../utils/functions";
import Cookies from "js-cookie";
import { removeCouponFromBasket } from "../utils/fetch";
const Checkout = ({
  isAuthentificated,
  setIsAuthentificated,
  setBasketIdent,
  setCoupon,
  setBasketCoupon,
  setBasket,
  basketCoupon,
  coupon,
  basket,
}) => {
  async function handleRemoveCoupon() {
    const newBasket = await removeCouponFromBasket(basketCoupon);
    setBasket(newBasket);
    setBasketCoupon("");
  }

  async function directToCheckout() {
    if (typeof window === "undefined") {
      console.error("Tebex checkout is only available on the client side.");
      return;
    }
    const Tebex = (await import("@tebexio/tebex.js")).default;

    Tebex.checkout.init({
      ident: decryptCookie(),
      locale: "en_US",
      theme: "auto",
    });
    Tebex.checkout.launch();
    Tebex.checkout.on("payment:complete", async (event) => {
      showNotification("success", "Thank you for your purchase");
      setBasket({});
      Cookies.remove("basketIdent");
      setBasketIdent("");
      setIsAuthentificated(false);
      createNewBasket(isAuthentificated, setBasketIdent);
    });
  }

  return (
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
              <p className="inline-block mr-3 opacity-70">{coupon.code}</p>
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
  );
};

export default Checkout;
