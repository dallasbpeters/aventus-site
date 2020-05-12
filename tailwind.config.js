module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.css", "./src/**/*.jsx"],
  theme: {
    container: {
      center: true,
    },
    backgroundColor: theme => ({
      primary: "#ED1C24",
    }),
    screens: {
      xs: "420",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1100px",
    },
    fontFamily: {
      display: ["Oswald", "sans-serif"],
      body: ["Ropa Sans", "sans-serif"],
    },
    spacing: {
      "0": "0",
      "0.5": "4px",
      "1": "8px",
      "2": "12px",
      "3": "16px",
      "4": "24px",
      "5": "32px",
      "6": "48px",
      "7": "60px",
      "8": "72px",
      "9": "84px",
      "10": "96px",
    },
  },
  variants: {
    opacity: ["responsive", "hover"],
    appearance: ["responsive", "hover", "focus"],
    fontSize: ["responsive", "hover", "focus"],
  },
  plugins: [],
}
