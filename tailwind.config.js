/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0b0f",
        card: "rgba(255,255,255,0.06)",
        glass: "rgba(255,255,255,0.08)",
        text: "#eef1f7",
        muted: "#aab0bf",
        accent: "#7aa3ff",
        accent2: "#9a7aff"
      },
      boxShadow: {
        'vel': "0 10px 30px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)"
      },
      backdropBlur: {
        vel: '8px'
      }
    },
  },
  plugins: [],
}
