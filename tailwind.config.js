/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "400px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      karla: "Karla, sans-serif",
      inter: "Inter, sans-serif",
    },
    extend: {
      screens: {
        "2sm": "300px",
        "3sm": "250px",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateY(0%)" },
          "25%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(-200%)" },
          "75%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      colors: {
        dark_blue: "#130F49",
        light_purple: "#A5A6FF",
        backGround_color: "#EFFBF8",
        textColor: "#55527C",
        hoverColor: "#FF972D",
      },
    },
  },
};
