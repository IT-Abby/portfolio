/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: ["Source Code Pro", "monospace"], // 👈 custom alias
      },
      backgroundImage: {
        spotlight:
          "radial-gradient(circle at center, rgba(255,255,255,0.06), transparent 70%)",
      },
    },
  },
  plugins: [],
};
