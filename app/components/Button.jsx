import React from "react";
import Link from "next/link";

const Button = ({ text, link = "", type = "", action = () => {} }) => {
  return (
    <button className="bg-ascent py-3 px-6 rounded-md z-10" type={type}>
      {link.length > 0 ? (
        <Link href={link} className="text-black-custom font-medium text-base">
          {text}
        </Link>
      ) : (
        <span
          className="text-black-custom font-medium text-base"
          onClick={action}
        >
          {text}
        </span>
      )}
    </button>
  );
};

export default Button;
