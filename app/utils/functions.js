import { addPackageToBasket, createBasket, getAuthLink } from "../utils/fetch";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

const encryptCookie = (data) => {
  const encryptedData = CryptoJS.AES.encrypt(
    data,
    process.env.NEXT_PUBLIC_SECRET_KEY
  ).toString();
  Cookies.set("basketIdent", encryptedData, {
    path: "/",
    secure: true,
    expires: 1,
    sameSite: "Strict",
  });
  return encryptedData;
};

export const decryptCookie = () => {
  const encryptedData = Cookies.get("basketIdent");
  console.log(encryptedData);

  if (encryptedData) {
    const bytes = CryptoJS.AES.decrypt(
      encryptedData,
      process.env.NEXT_PUBLIC_SECRET_KEY
    );
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedData;
  }
  return null;
};

export const createNewBasket = async (isAuthentificated, setBasketIdent) => {
  try {
    const data = await createBasket();
    if (data?.ident) {
      console.log("Nouveau panier créé avec identifiant :", data.ident);

      const encryptedBasketIdent = encryptCookie(data.ident);
      setBasketIdent(encryptedBasketIdent);

      console.log(
        "Utilisateur non authentifié. Redirection vers le lien d'authentification..."
      );
      const authLink = await getAuthLink(data.ident, window.location.href);
      if (authLink) {
        window.location.assign(authLink);
      }
    } else {
      console.error("L'API createBasket n'a pas retourné de valeur valide.");
    }
  } catch (error) {
    console.error("Erreur lors de la création du panier :", error.message);
  }
};

export const handleAddButton = async (
  isAuthentificated,
  setBasketIdent,
  setBasket,
  script
) => {
  const basketIdent = decryptCookie();

  if (!basketIdent) {
    // Si le cookie n'existe pas ou est invalide
    console.log("Cookie manquant ou invalide. Création d'un nouveau panier...");

    try {
      const data = await createBasket();
      if (data?.ident) {
        console.log("Nouveau panier créé avec identifiant :", data.ident);

        const encryptedBasketIdent = encryptCookie(data.ident);
        setBasketIdent(encryptedBasketIdent);

        if (!isAuthentificated) {
          console.log(
            "Utilisateur non authentifié. Redirection vers le lien d'authentification..."
          );
          const authLink = await getAuthLink(data.ident, window.location.href);
          if (authLink) {
            window.location.assign(authLink);
          }
        }
      } else {
        console.error("L'API createBasket n'a pas retourné de valeur valide.");
      }
    } catch (error) {
      console.error("Erreur lors de la création du panier :", error.message);
    }
  } else {
    console.log("Cookie existant détecté :", basketIdent);

    try {
      const newBasket = await addPackageToBasket(script);
      setBasket(newBasket);
      console.log("Article ajouté au panier existant.");
    } catch (e) {
      console.error("Erreur lors de l'ajout au panier :", e.message);
    }
  }
};
