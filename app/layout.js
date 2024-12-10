"use client";
import { createContext, useState } from "react";
import localFont from "next/font/local";
import "./globals.css";

// export const metadata = {
//   title: "Anrazzi",
//   description: "FiveM GTA5 Scripts",
// };

export const basketContext = createContext();

export default function RootLayout({ children }) {
  const [basket, setBasket] = useState([]);
  const [isAuthentificated, setIsAuthentificated] = useState(false);
  const [basketIdent, setBasketIdent] = useState("");

  const addItemToBasket = (item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
  };

  const removeItemFromBasket = (itemId) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== itemId));
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-uber bg-background antialiased`}>
        <basketContext.Provider
          value={{
            basket,
            addItemToBasket,
            removeItemFromBasket,
            isAuthentificated,
            setIsAuthentificated,
            basketIdent,
            setBasketIdent,
          }}
        >
          {children}
        </basketContext.Provider>
      </body>
    </html>
  );
}
