module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      screens: {
        xs: { max: "400px" },
      },
      backgroundImage: (theme) => ({
        "banner": "url('/src/assets/img/banner2.png')",
      }),
    },
  },
};
