/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      // backgroundImage: {'basic-background': url("./assets/images/collection-background.svg")},
      colors: {'main-color': '#ff6452', 'sec-color': '#6d6d6d', 'pale-blue-color': '#f5f6ff'},
      backgroundImage: {
        'basic-img': "url('/assets/images/thumbnail-background.svg')",
      },
      boxShadow: {
        '3xl': '5px 5px 20px 2px rgb(0 0 0 / 0.1)',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fit, minmax(250px, 1fr))'
      }
    },
  },
  plugins: [],
}

