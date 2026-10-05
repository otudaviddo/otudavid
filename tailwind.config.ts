import type { Config } from "tailwindcss";

// Palette : modifiez ces trois valeurs pour ajuster l'identité (à comparer avec la carte).
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Les couleurs passent par des variables (voir globals.css) : un même nom
      // change de valeur selon que la section est blanche, bleu très pâle ou bleue.
      colors: {
        night: "rgb(var(--c-night) / <alpha-value>)",
        nightSoft: "rgb(var(--c-nightSoft) / <alpha-value>)",
        ivory: "rgb(var(--c-ivory) / <alpha-value>)",
        steel: "rgb(var(--c-steel) / <alpha-value>)",
        steelDeep: "rgb(var(--c-steelDeep) / <alpha-value>)",
        ivoryDeep: "rgb(var(--c-ivoryDeep) / <alpha-value>)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
