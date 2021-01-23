module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      screens: {
        xs: { max: "400px" },
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "8rem",
        "10xl": "10rem",
      },
      inset: {
        22: "21.5rem",
        26: "6.5rem",
        30: "30rem",
        33: "33rem",
        40: "44rem",
        50: "50rem",
        60: "60rem",
        "-100": "-69rem",
        "-200": "-138rem",
      },
    },
  },
};
