import Image from "next/image";
import Button from "./Button";
import content from "@/app/_data/content.json";
import Link from "next/link";

const ResourceCard = ({ resource }) => {
  return (
    <article
      className="border-[1px] border-border-light rounded-md p-5 w-full h-auto flex flex-col justify-between gap-16"
      id={resource?.id}
    >
      <div className="flex flex-col gap-4">
        <div className="h-auto w-full grid">
          <Link href={`/store/${resource?.id}`}>
            <Image
              src={content[resource?.id]?.mainImg?.href || ""}
              alt={`${resource?.name} Image`}
              width={1280}
              height={720}
              className="w-full h-auto object-contain rounded aspect-video"
            />
          </Link>
        </div>
        <div>
          <Link href={`/store/${resource?.id}`}>
            <h4
              className="w-fit text-3xl font-medium mb-2 relative hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[8%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 after:bg-ascent"
            >
              {content[resource?.id].title}
            </h4>
          </Link>
          <p className="opacity-60 font-light text-xl">
            {content[resource?.id].subtitle}
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-5 sm:gap-0">
        <div>
          <p className="font-light">Price</p>
          <p className="text-xl font-medium w-full">
            {resource?.base_price} €{" "}
            {content[resource?.id].type === "Abonnement" && "/month"}
          </p>
        </div>
        <Button text={"Buy"} link={`/store/${resource?.id}`} />
        {/* <Button
          text={"Buy"}
          action={() =>
           
          }
        /> */}
      </div>
    </article>
  );
};

export default ResourceCard;
