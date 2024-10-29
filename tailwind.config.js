/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mulish: "var(--mulish)",
      openSans: "var(--openSans)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "2rem",
      },
    },
    extend: {
      backgroundImage: {
        "customer-image": "url('/customer.png')",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        thirdColor: "var(--thirdColor)",
      },
    },
  },
  plugins: [],
};
