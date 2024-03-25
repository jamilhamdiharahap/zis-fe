/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "15px",
        lg: "15px",
        xl: "0",
        "2xl": "0",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      colors: {
        'title': '#A8A196',
      },
    },
  },
  plugins: [],
}

