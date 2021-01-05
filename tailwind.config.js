module.exports = {
  purge: {
    content: ["./src/**/*.svelte", "./node_modules/svetamat2/dist/*.js"],
    whitelistPatterns: [/svelte-/],
    mode: 'all',
    preserveHtmlElements: true,
  },
  theme: {
    extend: {
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-elevation')(['responsive', 'hover', 'active']),
  ],
};
