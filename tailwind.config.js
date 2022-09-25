/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs, html}", "./views/*.{ejs, html}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
