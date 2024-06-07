/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        havGreen: "#88E771",
        default:"#171717"
      },
      backgroundImage: {
        user: "url(https://duo.com/img/asset/aW1nL3Nlby1pbWFnZXMvRlkyNF9RMl9hbm5vdW5jaW5nLWR1by1tZmEtc3VwcG9ydC1mb3ItYWQtZnMtb2lkYy1hcHBsaWNhdGlvbnNfYmxvZ19oZXJvLmpwZw==?w=1440&h=490&fit=crop&s=b1fa8e10ded05d1bc2189ec82f843e0f)",
        hav: "url(components/img/havira-espiral.jpg)",
      },
    },
    dropShadow: {
      havGreen: "0 4px 3px #88E771",
    },
    keyframes: {
      colorChange: {
        "0%": { color: "#88EE71" },
        "50%": { color: "transparent", WebkitTextStroke: "2px #88E771" },
        "75%": { color: "##88EE71" },
        "100%": { color: "##88EE71" },
      },
      fadeUp: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      }
    },
    animation: {
      colorChange: "colorChange 3s infinite normal",
      fadeUp: 'fadeUp 0.5s ease-out' ,
    },
  },
  plugins: [],
};
