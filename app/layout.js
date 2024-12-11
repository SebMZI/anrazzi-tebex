"use client";
import { createContext, useState } from "react";
import "./globals.css";

export const basketContext = createContext();

export default function RootLayout({ children }) {
  const [basket, setBasket] = useState([]);
  const [isAuthentificated, setIsAuthentificated] = useState(false);
  const [basketIdent, setBasketIdent] = useState("");

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-uber bg-background antialiased`}>
        <basketContext.Provider
          value={{
            basket,
            setBasket,
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
