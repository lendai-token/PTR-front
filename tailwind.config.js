/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '8px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      fontFamily:{
        'sans': ["Poppins", ...defaultTheme.fontFamily.sans],
        'inter': ["Inter", ...defaultTheme.fontFamily.sans],
        'merriweather': ["Merriweather", ...defaultTheme.fontFamily.sans],
        'trebuchet': ["Trebuchet MS", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "blue-100": "#1273EB", //
        "blue-200": "#C7EBFF", //
        "blue-300": "#1273EB", //
        "blue-400": "#74FBFF", //
        "blue-500": "#F5FBFF", //
        "blue-600": "#0066EE", //
        "blue-700": "#EFF8FF", //
        "blue-800": "#E8F4FC", //
        "blue-900": "#006FFD", //
        "grey-100": "#FBFAFC", //
        "grey-200": "#B5B5B5", //
        "grey-300": "#9C9C9C", //
        "grey-400": "#F8FAFB", //
        "grey-500": "#EFF3F6", //
        "grey-600": "#D6D6D6", //
        "grey-700": "#FFFFFF80", //
        "grey-800": "#898D90", //
        "grey-900": "#84AED3", //
        "grey-1000": "#D8D8D8", //
        "grey-1100": "#E9EAEC", //
        "grey-1200": "#F4F4F4", //
        "grey-1300": "#EEEEEE", //
        "grey-1400": "#707070", //
        "grey-1500": "#FAFAFA", //
        "grey-1600": "#EEEEEE", //
        "purple-100": "#0F43F9", //
        "purple-200": "#3F69FA", //
        "purple-300": "#CFDAFF", //
        "black-100": "#374957", //
        "black-200": "#5F7D95", //
        "black-300": "#182F43", //
        "black-400": "#2E5A81", //
        "black-500": "#263A4D", //
        "black-600": "#212F3F", //
        "black-700": "#424E5C", //
        "black-800": "#333333", //
        "black-900": "#6F7882", //
        "black-1000": "#212121", //
        "black-1100": "#616161", //
      }
    },
  },
  corePlugins: {
    // ...
    borderWidth: false, // Disable the default borderWidth utilities
  },
  plugins: [
    function ({ addUtilities }) {
      const customUtilities = {
        '.border-half': {
          borderWidth: '0.5px',
          borderColor: '#D4D6DD',
        },
      };

      addUtilities(customUtilities, ['responsive', 'hover']);
    },
  ],
});

