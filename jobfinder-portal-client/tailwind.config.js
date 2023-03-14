/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0052CC",

          "secondary": "#00193D",

          "accent": "#4E4E4E",

          "neutral": "#0B2E4E",

          "base-100": "#ffffff",

          "info": "#5eead4",

          "success": "#F5F5F5",

          "warning": "#EDC00C",

          "error": "#E03E74",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}
