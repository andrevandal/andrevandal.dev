/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      colors: {
        bluewood: {
          100: '#E9EBED',
          200: '#C9CDD1',
          300: '#A8AFB5',
          400: '#66747E',
          500: '#253846',
          600: '#21323F',
          700: '#16222A',
          800: '#111920',
          900: '#0B1115',
        },
        oceangreen: {
          100: '#EDF5F2',
          200: '#D1E7DF',
          300: '#B5D9CC',
          400: '#7EBCA6',
          500: '#479F80',
          600: '#408F73',
          700: '#2B5F4D',
          800: '#20483A',
          900: '#153026',
        },
        gray: {
          100: '#F4F4F4',
          200: '#E4E4E3',
          300: '#D3D3D2',
          400: '#B3B2B1',
          500: '#92918F',
          600: '#838381',
          700: '#585756',
          800: '#424140',
          900: '#2C2C2B',
        },
      },
      fontFamily: {
        sans: ['"Alma Mono"', ...fontFamily.sans],
        mono: ['"JetBrains Mono"', ...fontFamily.mono],
      },
      textIndent: {
        1: '0.25rem',
        2: '0.5rem',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addBase }) {
      addBase({
        html: {
          '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
          scrollBehavior: 'smooth',
        },
      })
    },
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
