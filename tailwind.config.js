/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      uber: ["UberMove", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ascent: "var(--ascent)",
        "black-custom": "var(--font-black)",
        "white-custom": "var(--font-white)",
        "light-black": "var(--light-black)",
      },
    },
  },
  plugins: [],
};
