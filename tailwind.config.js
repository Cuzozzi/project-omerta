/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}", "./public/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hello-img": "url('/public/images/hello.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
