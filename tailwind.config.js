/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        desktopBackgroundImage: 'url("/images/bg-desktop.svg")',
        mobileDesktopBackgroundImage: 'url("/images/bg-mobile.svg")',
      },
      colors: {
        chViolet: "hsl(257, 40%, 49%)",
        softMagenta: "hsl(300, 69%, 71%)",
      },
    },
  },
  plugins: [],
};
