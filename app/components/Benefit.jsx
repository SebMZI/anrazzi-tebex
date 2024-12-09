import React from "react";

const Benefit = ({ title, subtitle }) => {
  return (
    <article className="text-left leading-tighttext-white-custom">
      <h2 className="font-bold text-[4rem]">{title}</h2>
      <p className="font-medium text-[2rem]">{subtitle}</p>
    </article>
  );
};

export default Benefit;
