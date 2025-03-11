/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,ts,tsx,html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'nanum': ['Nanum Myeongjo', 'serif'],
        'helvetica': ['Helvetica', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
        'inconsolata': ['Inconsolata', 'monospace']
      },
    },
  },
  plugins: [],
}

