"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import content from "@/app/_data/content.json";
import Link from "next/link";
import Head from "next/head";
import { fetchBasket } from "@/app/utils/fetch";
import {
  handleAddButton,
  decryptCookie,
  showNotification,
} from "@/app/utils/functions";
import { basketContext } from "@/app/layout";

const ProductPage = () => {
  const {
    basket,
    setBasket,
    isAuthentificated,
    setIsAuthentificated,
    basketIdent,
    setBasketIdent,
  } = useContext(basketContext);

  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
    if (!isAuthentificated) {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has("success")) {
        setIsAuthentificated(urlParams.get("success"));
        showNotification("success", "Successfully connected");
      }
    }

    getBasket(decryptCookie());
  }, [isAuthentificated]);

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://headless.tebex.io/api/accounts/${process.env.NEXT_PUBLIC_TEBEX_PUBLIC}/packages/${id}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!response.ok) {
          throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        if (!data || !data.data) {
          throw new Error("Produit introuvable");
        }

        setProduct(data.data);
      } catch (err) {
        console.error(err);
        setError(err.message);
        router.push("/404");
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  return (
    <section className="max-w-screen-xl mx-auto py-[4.5rem] sm:py-[8.5rem]  px-5">
      <Head>
        <title>
          {product ? `${product.name} - Premium GTA 5 Script` : "Product Page"}
        </title>
        <meta
          name="description"
          content={product ? product.description : "Description not available"}
        />
        <meta
          name="keywords"
          content="FiveM, GTA5, Scripts, Resources, Custom Scripts, Gaming"
        />
        <meta
          property="og:title"
          content={
            product ? `${product.name} - Premium GTA 5 Script` : "Product Page"
          }
        />
        <meta
          property="og:description"
          content={product ? product.description : "Description not available"}
        />
        <meta
          property="og:image"
          content={product ? product.image : "/images/default-image.jpg"}
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="product" />
        <meta
          name="twitter:title"
          content={
            product ? `${product.name} - Premium GTA 5 Script` : "Product Page"
          }
        />
        <meta
          name="twitter:description"
          content={product ? product.description : "Description not available"}
        />
        <meta
          name="twitter:image"
          content={product ? product.image : "/images/default-image.jpg"}
        />
        <meta name="twitter:card" content="summary_large_image" />

        {product && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: content[id].title,
              description: content[id].description,
              image: content[id].mainImg.href,
              url: window.location.href,
              brand: {
                "@type": "Brand",
                name: "Anrazzi",
              },
              offers: {
                "@type": "Offer",
                priceCurrency: "EUR",
                price: product.base_price,
                availability: "https://schema.org/InStock",
                url: window.location.href,
              },
            })}
          </script>
        )}
      </Head>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center w-full h-80 gap-3">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-spinner-custom"></div>
          <p className="text-xl font-medium">Loading...</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-10 md:gap-20 mb-10">
            <div className="md:col-span-4">
              <Image
                src={content[id].mainImg.href}
                width={1280}
                height={720}
                alt={`Image du produit ${product.name}`}
                className="rounded"
              />
            </div>
            <div className="md:col-span-3">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-3">
                  {content[id].title}
                </h1>
                <h2 className="text-lg md:text-xl font-light">
                  {content[id].subtitle}
                </h2>
              </div>
              <div className="mt-10">
                <p className="opacity-60">Price</p>
                <p>
                  <span className="mr-2 text-3xl font-bold">
                    {product.base_price}€
                  </span>
                  <span>{content[id].type === "Abonnement" && "/month"}</span>
                </p>
              </div>
              <button
                className="bg-ascent  py-3 px-6 rounded-md z-10 text-black w-full mt-10 hover:opacity-80 transition-opacity duration-[400]"
                onClick={() => {
                  handleAddButton(
                    basket,
                    isAuthentificated,
                    setBasketIdent,
                    setBasket,
                    id,
                    setIsAuthentificated
                  );
                }}
              >
                <span className=" font-medium text-sm sm:text-base">
                  Add to cart
                </span>
              </button>
            </div>
          </div>
          <div className="py-10">
            <p className="text-lg md:text-xl mt-2 font-light">
              {content[id].description}
            </p>
          </div>
          <div className="py-10">
            <h2 className="font-bold text-3xl">What&apos;s in it?</h2>
            <ul className="mt-4 ml-5 text-lg md:text-xl font-light">
              {content[id].keyFeatures.map((feature, i) => (
                <li key={i} className="list-disc mt-1">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          {content[id].frameworks && (
            <div className="py-10">
              <h2 className="font-bold text-3xl">Compatibility</h2>
              <p className="text-lg md:text-xl mt-2 font-light">
                Check if our resource is compatible with your server
              </p>
              <div className="flex gap-3 mt-6">
                {content[id].frameworks.map((framework, i) => (
                  <span
                    key={i}
                    className="py-3 px-6 rounded-md border border-ascent text-ascent hover:bg-ascent hover:text-black transition-all duration-[400]"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>
          )}
          {content[id].ytbLink && (
            <div className="py-10">
              <h2 className="font-bold text-3xl ">See it in action</h2>
              <p className="text-lg md:text-xl mt-2 font-light">
                Watch our video
              </p>
              <div className="grid place-content-center mt-6">
                <iframe
                  width="560"
                  height="315"
                  src={content[id].ytbLink}
                  title={content[id].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
          <div className="py-10">
            <h2 className="font-bold text-3xl">Support</h2>
            <p className="text-lg md:text-xl mt-2 font-light">
              Get the assistance you need with our dedicated support team.
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-5 items-center mt-6">
              <Link href="https://discord.gg/XerFPzYseR" target="_blank">
                <button className="bg-ascent py-3 px-6 rounded-md z-10 text-black w-full md:w-fit hover:opacity-80 transition-opacity duration-[400]">
                  <span className=" font-medium text-sm sm:text-base">
                    Join our Discord
                  </span>
                </button>
              </Link>
              <span>- or -</span>
              <Link href="mailto:mzi.sebastien@gmail.com">
                <button className="border border-ascent py-3 px-6 rounded-md z-10 text-ascent w-full md:w-fit hover:bg-ascent transition-all duration-[400] hover:text-black">
                  <span className=" font-medium text-sm sm:text-base">
                    Send an email
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductPage;
