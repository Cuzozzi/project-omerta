/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hello-img": "url('/public/images/hello.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
