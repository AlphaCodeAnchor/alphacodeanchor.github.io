// postcss.config.mjs
import tailwindcssTypography from '@tailwindcss/typography'; // Import typography plugin

export default {
  plugins: {
    // THIS IS THE CORRECT WAY to configure Tailwind CSS v4 in PostCSS,
    // as indicated by the error message.
    '@tailwindcss/postcss': {
      // All Tailwind CSS specific configuration (including plugins like typography)
      // now goes nested under this key.
      plugins: [
        tailwindcssTypography, // Reference the imported typography plugin
        // Add any other Tailwind CSS plugins here (e.g., import forms from '@tailwindcss/forms'; forms,)
      ],
      // If you have content configuration for Tailwind v4, it should also go here:
      // content: [
      //   './app/**/*.{js,ts,jsx,tsx,mdx}',
      //   './components/**/*.{js,ts,jsx,tsx,mdx}',
      // ],
      // Other Tailwind CSS configuration options for v4 (e.g., theme, variants)
      // would also be defined within this object based on Tailwind v4's specific docs.
    },
    // Other PostCSS plugins go here, outside the '@tailwindcss/postcss' object
    autoprefixer: {}, // Correctly configure autoprefixer as an object
  },
};
