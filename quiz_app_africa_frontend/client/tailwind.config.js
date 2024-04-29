/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#6801A7",
        lightPurple: "#9F03FF",

        green: "#008D5A",
        lightGreen: "#BDFFE7",

        backgroundColor: "#F0F0F0",

        lightGray: "#CACACA",
        gray: "#8C8C8C",

        black: "#000000",

        pink: "#FF0074",
        lightPink: "#FF88BE",

        lightYellow: "#F8FF9D",
        ligthRed: "#FF8B82",

        primaryColor: "#030040",
        secondaryColor: "#4B0086",
      },

      boxShadow: {
        "3xl": "0px 10px 50px 0px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
