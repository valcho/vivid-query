/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#069B94',
          50: '#60F9F2',
          100: '#4CF8F0',
          200: '#25F7ED',
          300: '#09EADF',
          400: '#08C2BA',
          500: '#069B94',
          600: '#057E78',
          700: '#04605C',
          800: '#034340',
          900: '#012523',
          950: '#011615',
        },
        secondary: {
          DEFAULT: '#DD61CB',
          50: '#FEF8FD',
          100: '#FAE7F7',
          200: '#F3C6EC',
          300: '#EBA4E1',
          400: '#E483D6',
          500: '#DD61CB',
          600: '#D333BC',
          700: '#A92496',
          800: '#7B1B6D',
          900: '#4D1144',
          950: '#360C30',
        },
        accent: {
          DEFAULT: '#56B2EF',
          50: '#FEFEFF',
          100: '#EBF6FD',
          200: '#C6E5FA',
          300: '#A1D4F6',
          400: '#7BC3F3',
          500: '#56B2EF',
          600: '#239BEA',
          700: '#127CC2',
          800: '#0E5B8F',
          900: '#093B5C',
          950: '#062A42',
        },
        neutral: {
          DEFAULT: '#1D141F',
          50: '#855C8F',
          100: '#7A5482',
          200: '#634469',
          300: '#4B3451',
          400: '#342438',
          500: '#1D141F',
          600: '#1A121C',
          700: '#171019',
          800: '#140E16',
          900: '#110C13',
          950: '#100B11',
        },
        base: {
          DEFAULT: '#2E3661',
          50: '#838DC4',
          100: '#7580BD',
          200: '#5967B0',
          300: '#485598',
          400: '#3B457D',
          500: '#2E3661',
          600: '#272E53',
          700: '#212745',
          800: '#1A1F37',
          900: '#14172A',
          950: '#101323',
        },
        info: {
          DEFAULT: '#4A6BC4',
          50: '#D4DCF1',
          100: '#C5D0EC',
          200: '#A6B6E2',
          300: '#889DD8',
          400: '#6984CE',
          500: '#4A6BC4',
          600: '#3756A9',
          700: '#2C4486',
          800: '#213364',
          900: '#152141',
          950: '#101830',
        },
        success: {
          DEFAULT: '#20B161',
          50: '#C2F4D9',
          100: '#ADF0CB',
          200: '#82E8B0',
          300: '#56E194',
          400: '#2BD979',
          500: '#20B161',
          600: '#1B9350',
          700: '#157540',
          800: '#10562F',
          900: '#0A381F',
          950: '#072916',
        },
        warning: {
          DEFAULT: '#F7CF4A',
          50: '#FEF8E4',
          100: '#FDF3D3',
          200: '#FCEAB1',
          300: '#FAE18E',
          400: '#F9D86C',
          500: '#F7CF4A',
          600: '#F5C114',
          700: '#C89C09',
          800: '#927206',
          900: '#5D4804',
          950: '#423303',
        },
        error: {
          DEFAULT: '#E8574F',
          50: '#FBDFDD',
          100: '#F9D0CD',
          200: '#F4B1AE',
          300: '#F0938E',
          400: '#EC756F',
          500: '#E8574F',
          600: '#E1281D',
          700: '#B01F17',
          800: '#7E1610',
          900: '#4D0D0A',
          950: '#340907',
        },
      },
    },
  },
  plugins: [],
};
