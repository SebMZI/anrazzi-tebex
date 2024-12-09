import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Anrazzi",
  description: "FiveM GTA5 Scripts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-uber bg-background antialiased`}>{children}</body>
    </html>
  );
}
