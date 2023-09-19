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
        "background": "#f9faff",
        "orange-100": "#fa6b4f",
        "blue-100": "#1273EB", //
        "blue-200": "#C7EBFF", //
        "blue-300": "#1273EB", //
        "grey-100": "#FBFAFC", //
        "grey-200": "#B5B5B5", //
        "grey-300": "#9C9C9C", //
        "grey-400": "#F8FAFB", //
        "grey-500": "#EFF3F6", //
        "grey-600": "#D6D6D6", //
        "grey-700": "#FFFFFF80", //
        "grey-800": "#898D90", //#84AED3
        "grey-900": "#84AED3", //
        "green-100": "#28a745",
        "green-200": "#1FD3AC",
        "red-100": "#dc3545",
        "red-200": "#ff5252",
        "purple-100": "#0F43F9", //
        "purple-200": "#3F69FA", //
        "purple-300": "#CFDAFF", //
        "black-100": "#374957", //
        "black-200": "#5F7D95", //
        "black-300": "#182F43", //
      }
    },
  },
  plugins: [],
});

