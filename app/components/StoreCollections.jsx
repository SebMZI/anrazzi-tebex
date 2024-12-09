import React, { useState, useEffect } from "react";
import ResourceCard from "./ResourceCard";

const StoreCollections = () => {
  const [categoriesData, setCategoriesData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchCat() {
    setIsLoading(true);
    const response = await fetch(
      `https://headless.tebex.io/api/accounts/${process.env.NEXT_PUBLIC_TEBEX_PUBLIC_KEY}/categories?includePackages=1`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    if (data) {
      setCategoriesData(data.data);
      console.log(data.data);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <section id="collections" className="py-[8.5rem]">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-start items-start gap-16">
        <h2 className="font-medium text-5xl text-left w-full">
          Our Collections
        </h2>
        <div className="w-full flex flex-col gap-10">
          {isLoading ? (
            <div className="flex flex-col justify-center items-center w-full h-80 gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-white-custom"></div>
              <p className="text-xl font-medium">Loading...</p>
            </div>
          ) : (
            categoriesData?.map((category, _) => (
              <div key={_} className="flex flex-col gap-8">
                <h3 className="text-3xl font-medium">{category.name}</h3>
                <div className="flex">
                  {category?.packages?.map((scripts, _) => (
                    <ResourceCard resource={scripts} key={_} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default StoreCollections;
