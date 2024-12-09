import Image from "next/image";
import React from "react";

const Review = ({ src, width, height, title, text }) => {
  return (
    <article className="w-full min-h-[158px] p-5 border border-[rgba(255,255,255,0.2)] rounded-md">
      <div className="flex justify-start items-center gap-3 mb-4">
        <Image
          src={src}
          alt={title}
          width={width}
          height={height}
          className="rounded-full object-contain"
        />
        <h3 className="font-medium text-xl">{title}</h3>
      </div>
      <p>{text}</p>
    </article>
  );
};

export default Review;
