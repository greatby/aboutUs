module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 3s ease infinite",
      },
        backgroundImage: {
        'white-overlay': 'linear-gradient(#ffffff52, #ffffff52)',
      },
    },
    keyframes: {
      gradient: {
        "0%, 100%": {
          backgroundPosition: "0% 50%",
        },
        "50%": {
          backgroundPosition: "100% 50%",
        },
      },
    },
  },
  plugins: [],
};
