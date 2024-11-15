/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chat: "SimHei, Microsoft JhengHei, STHeiti, LiHei Pro Medium",
      },
      backgroundImage: {
        home: "url(/images/home/bg.png)",
        folio: "url(/images/folio/bg.png)",
        project: "url(/images/project/bg.png)",
        "project-detail": "url(/images/project/bg-detail.png)",
        prison: "url(/images/prison/bg.png)",
      },
      animation: {
        dot: "dot 1.5s infinite",
        landscape: "landscape 1.5s ease infinite alternate",
      },
      keyframes: {
        dot: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        landscape: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "30%": {
            transform: "rotate(0deg)",
          },
          "70%": {
            transform: "rotate(90deg)",
          },
          "100%": {
            transform: "rotate(90deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
