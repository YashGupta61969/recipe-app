/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        red:"var(--red)",
        primaryBlack:"var(--primaryBlack)",
        dove:"var(--dove)",
        silver:"var(--silver)",
        gallery:"var(--gallery)"
      }
    },
  },
  plugins: [],
}
