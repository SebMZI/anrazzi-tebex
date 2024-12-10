import Image from "next/image";
import React from "react";
import Button from "./Button";
import { useContext, useEffect, useState } from "react";
import { basketContext } from "@/app/layout";
import { createBasket, getAuthLink } from "../utils/fetch";

const ScriptModal = ({ onClose, resource }) => {
  const {
    basket,
    addItemToBasket,
    removeItemFromBasket,
    isAuthentificated,
    setIsAuthentificated,
    basketIdent,
    setBasketIdent,
  } = useContext(basketContext);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleAddButton = async () => {
    if (!basketIdent && !isAuthentificated) {
      try {
        const data = await createBasket();
        setBasketIdent(data?.ident); // On met à jour le basketIdent
        if (data?.ident) {
          try {
            const authLink = await getAuthLink(
              data?.ident,
              window.location.href
            );
            if (authLink) {
              window.location.assign(authLink);
            }
          } catch (e) {
            console.error("Error adding item to basket:", e.message);
          }
        }
      } catch (error) {
        console.error("Error creating basket:", error.message);
      }
    }
  };

  return (
    <dialog
      className="h-screen w-screen fixed inset-0 z-50 bg-[rgba(0.0,0.0,0.0,0.5)] flex justify-center items-center"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-light-black max-w-[448px] overflow-hidden w-full max-h-[565px] h-full rounded-md relative top-[-5%] p-5 flex flex-col justify-between gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center gap-6 flex-wrap md:flex-nowrap">
          <Image
            src={resource?.image}
            alt={resource?.name}
            width={230}
            height={165}
            className="w-full max-h-[150px] h-full object-cover rounded-md  "
          />
          <h2 className="text-4xl w-full font-medium text-white-custom">
            {resource?.name}
          </h2>
        </div>
        <p
          className="text-white-custom h-[60%] overflow-y-scroll pr-2"
          dangerouslySetInnerHTML={{ __html: resource?.description }}
        ></p>
        <div className="flex justify-end items-center gap-5">
          <p className="text-xl font-medium text-white-custom">
            {resource?.base_price} €
          </p>
          <Button link="" text={"Buy"} action={handleAddButton} />
        </div>
      </div>
    </dialog>
  );
};

export default ScriptModal;
