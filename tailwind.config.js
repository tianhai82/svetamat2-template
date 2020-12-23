module.exports = {
  purge: {
    content: ["./src/**/*.svelte", "./node_modules/svetamat2/dist/*.js"],
    whitelistPatterns: [/svelte-/],
    mode: 'all',
    preserveHtmlElements: false,
  },
  theme: {
    extend: {
      colors: {
        orange: {
          500: "#ff3e00",
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-elevation')(['responsive', 'hover', 'active']),
  ],
};
