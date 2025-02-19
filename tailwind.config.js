/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#80f0ff",
        secondary: "black",
      },
      animation: {
        ripple: "ripple 0.4s linear",
      },
      keyframes: {
        ripple: {
          "0%": {
            transform: "scale(0)",
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(4)",
            opacity: "0",
          },
        },
      },
      boxShadow: {
        elevated: "0px 8px 16px rgb(8, 25, 70), 2px 12px 24px rgb(2, 10, 36)",
        overWhite: "0px 8px 16px #a2a1a1b4",
      },
      backgroundColor: {
        primary: "#80f0ff",
        dark: "#0c121c",
      },
    },
  },
  plugins: [],
};
