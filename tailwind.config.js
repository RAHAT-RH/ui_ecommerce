module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screen: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#7811D4",
        secondary: "#B872F7",
        neutral: "rgba(140, 27, 241, 0.59)",
        "custom-color": "#6003aa",
        "body-color": "#F5F5F5"
      },
    },
  },
  plugins: [require("daisyui")],
}
