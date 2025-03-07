const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
	// Ensures Tailwind includes Flowbite styles
  content: ["./src/**/*.{html,js,jsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          limeGreen: "hsl(163, 72%, 41%)",
          brightRed: "hsl(356, 69%, 56%)",
        },
        social: {
          facebook: "hsl(208, 92%, 53%)",
          twitter: "hsl(203, 89%, 53%)",
          youtube: "hsl(348, 97%, 39%)",
        },
        gradient: {
          instagram: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
          toggleDark: "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
        },
        darkTheme: {
          bg: "hsl(230, 17%, 14%)",
          topBg: "hsl(232, 19%, 15%)",
          cardBg: "hsl(228, 28%, 20%)",
          text: "hsl(228, 34%, 66%)",
          white: "hsl(0, 0%, 100%)",
        },
        lightTheme: {
          bg: "hsl(0, 0%, 100%)",
          topBg: "hsl(225, 100%, 98%)",
          cardBg: "hsl(227, 47%, 96%)",
          textDarkGray: "hsl(228, 12%, 44%)",
          textVeryDarkBlue: "hsl(230, 17%, 14%)",
        },
      },
    },
  },
  // Enables Flowbite’s custom UI components
  plugins: [flowbite.plugin()],
}