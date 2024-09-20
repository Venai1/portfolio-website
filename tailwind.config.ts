import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 
        'light-theme': 'radial-gradient(125% 125% at 50% 10%, #f0f0f0 40%, #d0d0d0 100%)',
        'dark-theme': 'radial-gradient(125% 125% at 50% 10%, #030014 50%, #63e 100%)',
        'sunset-theme': 'radial-gradient(125% 125% at 50% 10%, #001133 30%, #ff5f6d 100%)',
        'retro-theme': 'radial-gradient(125% 125% at 50% 10%, #f0f0f0 40%, #0047AB 100%)',
      },
    },
  },
  plugins: [
    addVariablesForColors,
    require("daisyui"),
  ],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [{
      dark: {
        ...require("daisyui/src/theming/themes")["light"],
        primary: "63e",
        secondary: "red",
        accent: "#d16aff"
        },
      },
      "light"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
