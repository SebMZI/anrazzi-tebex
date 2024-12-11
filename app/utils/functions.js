import { addPackageToBasket, createBasket, getAuthLink } from "../utils/fetch";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

const encryptCookie = (data) => {
  if (data === undefined || data === null) {
    console.error("Données à chiffrer invalides:", data);
    return null;
  }

  const encryptedData = CryptoJS.AES.encrypt(
    data,
    process.env.NEXT_PUBLIC_SECRET_KEY
  ).toString();

  Cookies.set("basketIdent", encryptedData, {
    path: "/",
    secure: true,
    expires: 1 / 24,
    sameSite: "Strict",
  });

  return encryptedData;
};

export const decryptCookie = () => {
  const encryptedData = Cookies.get("basketIdent");

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
      const encryptedBasketIdent = encryptCookie(data.ident);
      setBasketIdent(encryptedBasketIdent);

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
  basket,
  isAuthentificated,
  setBasketIdent,
  setBasket,
  script
) => {
  const basketIdent = decryptCookie();
  console.log(basket);
  if (basketIdent === null) {
    try {
      const data = await createBasket();
      if (data?.ident) {
        const encryptedBasketIdent = encryptCookie(data?.ident);
        setBasketIdent(encryptedBasketIdent);

        if (!isAuthentificated) {
          const authLink = await getAuthLink(data?.ident, window.location.href);
          if (authLink) {
            window.location.assign(authLink);
          }
        }
      } else {
        console.error("L'API createBasket n'a pas retourné de valeur valide.");
      }
    } catch (error) {
      console.error("Erreur lors de la création du panier S :", error.message);
    }
  } else if (basketIdent && !isAuthentificated) {
    const authLink = await getAuthLink(decryptCookie(), window.location.href);
    if (authLink) {
      window.location.assign(authLink);
    }
  } else {
    try {
      const newBasket = await addPackageToBasket(script, basket);
      setBasket(newBasket);
    } catch (e) {
      console.error("Erreur lors de l'ajout au panier :", e.message);
    }
  }
};

export const disconnectSession = (
  setBasket,
  setBasketIdent,
  setIsAuthentificated
) => {
  setBasket([]);
  setIsAuthentificated(false);
  Cookies.remove("basketIdent");
  setBasketIdent("");
  showNotification("success", "Successfully disconnected");
  window.location.assign("/");
};

let currentNotification = null;

export const showNotification = (type, text) => {
  if (currentNotification) {
    currentNotification.classList.remove("show");
    currentNotification.classList.add("hide");

    setTimeout(() => {
      currentNotification.remove();
    }, 500);
  }

  const notification = document.createElement("div");
  notification.classList.add("notification");

  if (type === "error") {
    notification.classList.add("error");
    notification.style.borderColor = "rgb(220, 38, 38)";
    notification.style.color = "rgb(220, 38, 38)";
  } else if (type === "success") {
    notification.classList.add("success");
    notification.style.borderColor = "rgb(101, 163, 13)";
    notification.style.color = "rgb(101, 163, 13)";
  }

  notification.textContent = text;

  document.body.appendChild(notification);

  currentNotification = notification;

  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  setTimeout(() => {
    notification.classList.remove("show");
    notification.classList.add("hide");

    setTimeout(() => {
      notification.remove();
      currentNotification = null;
    }, 500);
  }, 3000);
};
