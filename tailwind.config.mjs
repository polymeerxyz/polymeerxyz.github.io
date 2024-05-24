import starlightPlugin from "@astrojs/starlight-tailwind";
import { fontFamily } from "tailwindcss/defaultTheme";

// Generated color palettes
const accent = {
  200: "#8dd6e9",
  600: "#00798e",
  900: "#003944",
  950: "#002932",
};
const gray = {
  100: "#f6f6f6",
  200: "#edeeed",
  300: "#c1c2c2",
  400: "#8a8c8b",
  500: "#575858",
  700: "#373838",
  800: "#262726",
  900: "#181818",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      translate: {
        "slide-0": "0px",
        "slide-1": "320px",
        "slide-2": "640px",
        "slide-3": "960px",
        "slide-4": "1280px",
      },
      colors: { accent, gray },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
  plugins: [starlightPlugin()],
};
