module.exports = {
  prefix: "tw-",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./layout/**/*.{ts,tsx}",
    "./shared/**/*.{ts,tsx}",
    "./fallback/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "takyon-blue-100": "#0047FF",
        "takyon-light-100": "rgba(255, 255, 255, 0.5)",
        "takyon-border-100":
          "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 53.65%, rgba(255, 255, 255, 0) 100%)",
        "takyon-blue-gradient": "#000624",
        "takyon-border-200": "rgba(255, 255, 255, 0.08)",
        "takyon-blue-300": "#000624",
        "takyon-light-200": "rgba(255, 255, 255, 0.07)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
