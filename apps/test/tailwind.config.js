/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // for me from future reference
      // https://www.realtimecolors.com/dashboard?colors=0d0d17-f9f9fb-5f5da8-d2accd-b77b9b&fonts=Roboto-Roboto
      colors: {
        'text': '#0d0d17',
        'background': '#f9f9fb',
        'primary': '#5f5da8',
        'secondary': '#d2accd',
        'accent': '#b77b9b',
      },
    },
  },
  plugins: [],
}
