/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { min: "0px", max: "767px" },
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1440px",
      custom: "703px",
    },
    extend: {
      gridTemplateColumns: {
        title: "1fr min(55ch, 100%) 1fr",
        card: "repeat(25, 1fr)",
      },
      boxShadow: {
        myShadow: "inset 0 0 0 1.5px rgba(0,0,0,0.3)",
        cardHoverShadow: "inset 0 0 0 1.5px hsla(172, 95%, 18%, 1)",
      },
      colors: {
        secondary: "hsla(171, 15%, 35%, 1)",
        header: "hsla(172, 95%, 18%, 1)",
        linkBg: "#FFFFFF80",
        pink: "hsla(284, 61%, 74%, 1)",
        backdrop: "hsla(45, 17%, 95%, .8)",
        white: "hsla(0, 0%, 100%, .3)",
        bgBody: "hsla(36, 31%, 90%, 1)",
        footerGreen: "hsla(171, 15%, 35%, 1)",
        beige: "hsla(36, 31%, 90%, 1)",
      },
      fontFamily: {
        acorn: ["var(--font-acorn)"],
      },
    },
    fontSize: {
      h1Size: "clamp(3.2rem, .5692rem + 8.238vw, 13.75rem)",
      fontLink: "clamp(.875rem, .7985rem + .3265vw, 1.125rem)",
      h2Size: "clamp(1.875rem, 1.301rem + 2.449vw, 3.95rem)",
      fontBody: "clamp(1rem, .8852rem + .4898vw, 1.275rem)",
    },
  },
  plugins: [],
};
