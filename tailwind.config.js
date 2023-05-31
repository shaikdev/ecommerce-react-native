/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/common_components/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily:{
      'raleway-regular':['Raleway-Regular'],
      'raleway-medium':['Raleway-Medium'],
      'raleway-semi-bold':['Raleway-SemiBold'],
      'raleway-bold':['Raleway-Bold'],
      "merriweather":['Merriweather-Regular']
    },
    colors: {
      'primary-green': '#689C36',
      'secondry-black': '#191A19',
      'background': '#FCFFFD',
      "input-background": '#F3F6F2',
      "button-color": "#F7FFFA",
      "error":'#DF2E2E',
      "gray-text":'#ACADAC',
      "white":'#ffffff',
      "statusBar":'#379237',
      "googleColor":'#4285f4'
    },
    extend: {},
  },
  plugins: [],
};
