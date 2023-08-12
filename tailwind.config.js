/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        textShadowPopBr: {
          '0%': {
            textShadow: "0 0 theme('colors.primary'), 0 0 theme('colors.primary'), 0 0 theme('colors.primary'), 0 0 theme('colors.primary'), 0 0 theme('colors.primary'), 0 0 theme('colors.primary'), 0 0 theme('colors.primary'), 0 0 theme('colors.primary')",
            transform: 'translateX(0) translateY(0)'
          },
          '100%': {
            textShadow: "1px 1px theme('colors.primary'), 2px 2px theme('colors.primary'), 3px 3px theme('colors.primary'), 4px 4px theme('colors.primary'), 5px 5px theme('colors.primary'), 6px 6px theme('colors.primary'), 7px 7px theme('colors.primary'), 8px 8px theme('colors.primary')",
            transform: 'translateX(-8px) translateY(-8px)'
          }
        },
      },
      animation: {
        'textShadowPopBr': 'textShadowPopBr 3s both infinite',
        'textShadowPopBrLoading': 'textShadowPopBr 1s infinite',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      {
        apple: {

          "primary": "#e3fc9f",

          "secondary": "#31bfa0",

          "accent": "#9eea10",

          "neutral": "#1c2327",

          "base-100": "#363536",

          "info": "#618bf5",

          "success": "#25934f",

          "warning": "#f9bd62",

          "error": "#fb042d",
        }
      },
    ],
  },

}

