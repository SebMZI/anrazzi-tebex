import React from "react";

const Question = ({ title, text }) => {
  return (
    <article className="w-full min-h-[158px] h-auto p-5 border border-light-black rounded-md">
      <h3 className="font-medium text-xl mb-4">{title}</h3>
      <p className="h-full">{text}</p>
    </article>
  );
};

export default Question;
