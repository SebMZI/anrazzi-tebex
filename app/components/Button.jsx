"use client";
import React from "react";
import Link from "next/link";

const Button = ({ text, link = "", type = "", action = () => {} }) => {
  return (
    <>
      {link.length > 0 ? (
        <Link
          href={link}
          className="font-medium text-base z-10"
          onClick={() => action()}
        >
          <button
            className="bg-ascent w-full min-w-[115px] sm:w-auto py-3 px-6 rounded-md  text-black hover:opacity-80 transition-opacity duration-[400]"
            type={type}
          >
            <span className=" font-medium text-sm sm:text-base">{text}</span>
          </button>
        </Link>
      ) : (
        <button
          className="bg-ascent w-full min-w-[115px] sm:w-auto py-3 px-6 rounded-md z-10 text-black hover:opacity-80 transition-opacity duration-[400]"
          onClick={() => action()}
          type={type}
        >
          <span className=" font-medium text-sm sm:text-base">{text}</span>
        </button>
      )}
    </>
  );
};

export default Button;
