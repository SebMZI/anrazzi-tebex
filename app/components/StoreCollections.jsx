"use client";
import { useContext, useEffect, useState } from "react";
import { basketContext } from "@/app/layout";
import { createBasket, fetchBasket, getAuthLink } from "../utils/fetch";
import {
  createNewBasket,
  decryptCookie,
  showNotification,
} from "../utils/functions";
import ResourceCard from "./ResourceCard";
import content from "@/app/_data/content.json";

const StoreCollections = () => {
  const [categoriesData, setCategoriesData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const {
    basket,
    setBasket,
    isAuthentificated,
    setIsAuthentificated,
    basketIdent,
    setBasketIdent,
  } = useContext(basketContext);

  async function fetchCat() {
    setIsLoading(true);
    const response = await fetch(
      `https://headless.tebex.io/api/accounts/${process.env.NEXT_PUBLIC_TEBEX_PUBLIC}/categories?includePackages=1`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    if (data) {
      setCategoriesData(data.data);
      setIsLoading(false);
    }
  }

  async function getBasket(basketIndent) {
    try {
      const basket = await fetchBasket(basketIndent);
      if (basket) {
        setBasket(basket);
      }
    } catch (e) {
      console.error(e);
    }
  }
  
  useEffect(() => {
    fetchCat();
    if (!isAuthentificated) {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has("success")) {
        setIsAuthentificated(urlParams.get("success"));
        showNotification("success", "Successfully connected");
      }
    }

    const cookie = decryptCookie();
    if (cookie === null) {
      createNewBasket(isAuthentificated, setBasketIdent);
    } else {
      getBasket(cookie);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthentificated, basketIdent]);

  const generateSchema = () => {
    if (!categoriesData) return;

    const categoriesSchema = categoriesData.map((category) => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: category.name,
      url: `https://anrazzi.fr/store/`,
      itemListElement: category.packages?.map((product) => ({
        "@type": "Product",
        name: content[product.id].title,
        url: `https://anrazzi.fr/store/${product.id}`,
        image: `https://anrazzi.fr/${content[product.id].mainImg.href}`,
        description: content[product.id].description,
        offers: {
          "@type": "Offer",
          url: `https://anrazzi.fr/store/${product.id}`,
          priceCurrency: "EUR",
          shippingDetails: "Electronic",
          hasMerchantReturnPolicy: false,
          price: product.base_price,
          itemCondition: "https://schema.org/NewCondition",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Anrazzi Store",
          },
        },
      })),
    }));

    return categoriesSchema;
  };

  const schemaData = generateSchema();

  return (
    <section id="collections" className="py-[4.5rem] sm:py-[8.5rem]">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-start items-start gap-16 px-5">
        <h2 className="font-medium text-4xl sm:text-5xl text-left w-full">
          Our Collections
        </h2>
        <div className="w-full flex flex-col gap-20">
          {isLoading ? (
            <div className="flex flex-col justify-center items-center w-full h-80 gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-spinner-custom"></div>
              <p className="text-xl font-medium">Loading...</p>
            </div>
          ) : (
            categoriesData?.map((category, _) => (
              <div key={_} className="flex flex-col gap-8">
                <h3 className="text-3xl sm:text-4xl font-medium">
                  {category.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {category?.packages?.map((scripts, _) => (
                    <ResourceCard resource={scripts} key={_} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "Anrazzi Store",
            url: "https://anrazzi.fr/store",
            logo: "https://anrazzi.fr/images/anrazzi-logo.png",
            image: "https://anrazzi.fr/images/anrazzi-opengraph.webp",
            mainEntityOfPage: "https://anrazzi.fr/store",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Rue Fictive", // Adresse fictive
              addressLocality: "Paris", // Ville fictive
              postalCode: "75000", // Code postal fictif
              addressCountry: "FR", // Pays fictif
            },
            hasPart: schemaData,
          }),
        }}
      />
    </section>
  );
};

export default StoreCollections;
