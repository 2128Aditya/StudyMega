/** @type {import('tailwindcss').Config} */
export default {
    
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAF7FF",
        primary: "#7C3AED",
        secondary: "#5B21B6",
        text: "#111827",
        card: "#FFFFFF",
        border: "#E9D5FF",
        
      },
    },
  },
  plugins: [],
};
