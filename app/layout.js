"use client";
import { createContext, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
              })(window, document, "clarity", "script", "pcc5d3kts5");
            `,
          }}
        ></script>

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `                       
              window.axeptioSettings = {
                clientId: "676587bd75e639c447bd7f85",
                cookiesVersion: "anrazzi-fr-EU",
              };
              
              (function(d, s) {
                var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
                e.async = true; e.src = "//static.axept.io/sdk.js";
                t.parentNode.insertBefore(e, t);
              })(document, "script");             
            `,
          }}
        ></script>

        {/* New axeptio callback function for cookie completion */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `               
              void 0 === window._axcb && (window._axcb = []);             
              window._axcb.push(function(axeptio) {               
                axeptio.on("cookies:complete", function(choices) {                 
                  if(choices.clarity){
                    window.clarity('consent');
                  } else if(!choices.clarity){  // Corrected here
                    window.clarity('consent', false);
                  }            
                });             
              });             
            `,
          }}
        ></script>

        {/* Vercel Analytics */}
        <Analytics />
        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
