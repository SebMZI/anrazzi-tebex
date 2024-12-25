"use client";
import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";
import { basketContext } from "@/app/layout";
import Button from "./Button";
import ScriptModal from "./ScriptModal";
import { createPortal } from "react-dom";
import { handleAddButton } from "../utils/functions";

const ResourceCard = ({ resource }) => {
  const {
    basket,
    setBasket,

    isAuthentificated,
    setIsAuthentificated,
    basketIdent,
    setBasketIdent,
  } = useContext(basketContext);
  const [showModal, setShowModal] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: resource?.name,
    description: resource?.description,
    brand: "Anrazzi",
    offers: {
      "@type": "Offer",
      url: "https://anrazzi.fr/store",
      priceCurrency: "EUR",
      price: resource?.price,
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory: "https://schema.org/NonRefundable",
        merchantReturnDays: 0,
      },
      shippingDetails: {
        "@type": "ShippingRateSettings",
        shippingDestination: {
          "@type": "DefinedRegion",
          name: "Worldwide",
        },
        shippingMethod: {
          "@type": "DeliveryMethod",
          name: "Digital Delivery",
        },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "1",
      },
      review: {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Anonymous",
        },
        datePublished: "2024-12-08",
        reviewBody:
          "Rapide, efficace et vous patchera chaque problème jusqu'au dernier, pour le moment le meilleur dev que j'ai pu trouver en 10 mois",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    },
  };

  return (
    <article
      className="border-[1px] border-border-light rounded-md p-5 w-full sm:max-w-[270px] sm:w-[270px] flex flex-col gap-5"
      id={resource?.id}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Image
        src={resource?.image}
        alt={resource?.name}
        width={230}
        height={165}
        className="w-full max-h-[150px] h-full object-cover rounded-md  "
      />
      <div>
        <h4 className="text-2xl font-medium">{resource?.name}</h4>
        <p
          className="ellipsis-text line-clamp-1 opacity-60"
          dangerouslySetInnerHTML={{ __html: resource?.description }}
        />
        {showModal &&
          createPortal(
            <ScriptModal
              onClose={() => setShowModal(false)}
              resource={resource}
            />,
            document.body
          )}
        <button
          className="underline opacity-60"
          onClick={() => setShowModal(true)}
          aria-haspopup="dialog"
          aria-expanded={showModal}
        >
          see more
        </button>
      </div>
      <div className="flex justify-between items-center gap-5 sm:gap-0">
        <p className="text-xl font-medium w-full">{resource?.base_price} €</p>
        <Button
          text={"Buy"}
          action={() =>
            handleAddButton(
              basket,
              isAuthentificated,
              setBasketIdent,
              setBasket,
              resource?.id
            )
          }
        />
      </div>
    </article>
  );
};

export default ResourceCard;
