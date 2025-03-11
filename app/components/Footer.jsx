import Link from "next/link";
import React from "react";

const Footer = () => {
  function getCurrentYear() {
    let now = new Date();
    let year = now.getFullYear();
    return year;
  }
  return (
    <footer className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center py-10 px-5 w-full gap-5">
      <p className="text-sm">
        &copy; Copyright 2024 - {getCurrentYear()}
        <span className="font-bold"> Anrazzi</span>. We do not have affiliation
        with any real world brands.
      </p>
      <ul className="flex flex-wrap items-center gap-3">
        <li className="border-b border-border-light">
          <Link href="/terms/impressum">Impressum</Link>
        </li>
        <li className="border-b border-border-light">
          <Link href="/terms/checkout">Terms & Conditions</Link>
        </li>
        <li className="border-b border-border-light">
          <Link href="/terms/privacy">Privacy Policy</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
