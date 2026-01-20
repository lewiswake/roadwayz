/* 1. TAILWIND CONFIGURATION
   This must run immediately after the Tailwind CDN loads.
*/
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF7300",
          dark: "#00223D",
          light: "#FDFDFB",
          accent: "#E66A00",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 115, 0, 0.3)",
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
};

/* 2. INITIALIZE ANIMATIONS (AOS)
   We wait for the window to load so all elements are ready.
*/
window.addEventListener("load", function () {
  AOS.init({
    once: true,
    offset: 50,
    duration: 800,
    easing: "ease-out-cubic",
  });
});
