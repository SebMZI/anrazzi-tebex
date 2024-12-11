import { useState, useEffect } from "react";
import "@tebexio/tebex.js";
import { decryptCookie } from "../utils/functions";
import Button from "./Button";

const Checkout = () => {
  const onPaymentComplete = () => {
    console.log("Payment completed");
  };

  const directToCheckout = () => {
    const checkout = document.getElementById("checkout");
    checkout.setAttribute("open", "true");
  };

  return (
    <>
      <tebex-checkout
        id="checkout"
        inline
        ident={decryptCookie()}
        onPaymentComplete={onPaymentComplete}
      ></tebex-checkout>
      
    </>
  );
};

export default Checkout;
