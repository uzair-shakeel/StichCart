/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#e51747", // Example primary color
        orange: "#ff9600", // Example secondary color
      },
      borderRadius: {
        lg: "0.5rem",
      },
      boxShadow: {
        button: "0 2px 4px rgba(0, 0, 0, 0.1)",
      },
      fontSize: {
        heading: ["2.25rem", { lineHeight: "2.5rem" }], // Example for h1
        h2: ["2rem", { lineHeight: "2.25rem" }], // Example for h2
        subheading: ["1.75rem", { lineHeight: "2rem" }], // Example for h3
        h4: ["1.5rem", { lineHeight: "1.75rem" }], // Example for h4
        h5: ["1.25rem", { lineHeight: "1.5rem" }], // Example for h5
        narrowheading: ["1rem", { lineHeight: "1.25rem" }], // Example for h6
      },
    },
  },
  plugins: [],
};
