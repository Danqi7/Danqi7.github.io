/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,ts,tsx,html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'nanum': ['Nanum Myeongjo', 'serif']
      },
    },
  },
  plugins: [],
}

