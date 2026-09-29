import type { Config } from "tailwindcss";

// Palette : modifiez ces trois valeurs pour ajuster l'identité (à comparer avec la carte).
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0A1428",       // bleu nuit profond (fond principal)
        nightSoft: "#0E1B33",   // bleu nuit légèrement plus clair (sections alternées)
        ivory: "#F2EDE2",       // ivoire (texte)
        steel: "#8FA3C7",       // bleu plus clair (interactions, textes secondaires)
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
