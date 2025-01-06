/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
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
        elevated: "0px 8px 16px #10245b, 2px 12px 24px #051031",
        overWhite: "0px 8px 16px #a2a1a1b4",
      },
    },
  },
  plugins: [],
};
