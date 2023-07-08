/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      //adding some custom colors//
      colors: {
        customBlue: '#0A1627',
        lightBlue:'#016693',
        customBlack:'#141414',
        memberBlue:"#0459FA",
        menubar:"#1C3879",
        formMain:'#212A3E',
        formFill:"#1C3879",
        submit:"#FF00A8",
        swap:'#1e3a8a',
        lal:"#f9fafb"
      },
    },
  },
  plugins: [],
}