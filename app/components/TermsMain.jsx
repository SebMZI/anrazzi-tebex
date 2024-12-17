import Link from "next/link";
import React from "react";

const TermsMain = () => {
  return (
    <main>
      <section id="hero-checkout" className=" py-[8.5rem] relative">
        <div className="max-w-screen-xl mx-auto relative z-10 px-5">
          <div className="text-center mb-10">
            <h1 className="font-bold text-left text-5xl sm:text-[4rem] mb-4 leading-none text-white-custom">
              <span className="text-ascent">Terms </span>& Conditions
            </h1>
          </div>
        </div>
      </section>
      <section
        id="main-checkout"
        className="max-w-screen-xl mx-auto flex flex-col justify-center items-center py-[2.5rem] px-5 relative"
      >
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Store</h2>
          <ul>
            <li>Store Name: Anrazzi</li>
            <li>
              Purpose: This website serves as a storefront to showcase products
              available through Tebex. All transactions, payments, and product
              deliveries are managed directly by Tebex.
            </li>
          </ul>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Payment Management</h2>
          <p>
            Payments are securely processed and managed by Tebex. For any
            payment-related inquiries, please contact Tebex support directly.
          </p>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Product Delivery</h2>
          <p>
            All purchased products, such as scripts or digital services, are
            automatically delivered through Tebex/CFX Keymaster once payment has
            been confirmed.
          </p>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Refund Policy</h2>
          <p>
            Refund requests are handled according to Tebex&apos;s refund policy.
            For more details, please refer to their terms and conditions.
          </p>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Limitation of Liability</h2>
          <p>
            As a frontend service provider, we are not liable for payment
            processing, transaction errors, or delivery issues. Tebex assumes
            full responsibility for these processes.
          </p>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">
            Link to Tebex’s Terms and Conditions
          </h2>
          <p>
            For Tebex&apos;s full Terms and Conditions, please visit{" "}
            <Link href="https://checkout.tebex.io/terms">Tebex</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default TermsMain;
