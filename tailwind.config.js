/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hello-img": "url('/public/images/hello.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
