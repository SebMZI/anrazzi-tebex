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

        {/* Clarity Analytics */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `          
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "pcc5d3kts5");`,
          }}
        ></script>
      </body>
    </html>
  );
}
