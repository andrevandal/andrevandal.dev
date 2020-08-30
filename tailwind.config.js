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
      textStyles: (theme) => ({
        heading: {
          output: false,
          fontWeight: theme('fontWeight.bold'),
          lineHeight: theme('lineHeight.tight'),
        },
        h1: {
          extends: 'heading',
          fontSize: theme('fontSize.5xl'),
          '@screen sm': {
            fontSize: theme('fontSize.6xl'),
          },
        },
        h2: {
          extends: 'heading',
          fontSize: theme('fontSize.4xl'),
          '@screen sm': {
            fontSize: theme('fontSize.5xl'),
          },
        },
        h3: {
          extends: 'heading',
          fontSize: theme('fontSize.4xl'),
        },
        h4: {
          extends: 'heading',
          fontSize: theme('fontSize.3xl'),
        },
        h5: {
          extends: 'heading',
          fontSize: theme('fontSize.2xl'),
        },
        h6: {
          extends: 'heading',
          fontSize: theme('fontSize.xl'),
        },
        link: {
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.blue.400'),
          '&:hover': {
            color: theme('colors.blue.600'),
            textDecoration: 'underline',
          },
        },
        richText: {
          fontWeight: theme('fontWeight.normal'),
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.relaxed'),
          '> * + *': {
            marginTop: '1em',
          },
          h1: {
            extends: 'h1',
          },
          h2: {
            extends: 'h2',
          },
          h3: {
            extends: 'h3',
          },
          h4: {
            extends: 'h4',
          },
          h5: {
            extends: 'h5',
          },
          h6: {
            extends: 'h6',
          },
          ul: {
            listStyleType: 'disc',
          },
          ol: {
            listStyleType: 'decimal',
          },
          a: {
            extends: 'link',
          },
          'b, strong': {
            fontWeight: theme('fontWeight.bold'),
          },
          'i, em': {
            fontStyle: 'italic',
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-typography')({
      // all these options default to the values specified here
      ellipsis: true, // whether to generate ellipsis utilities
      hyphens: true, // whether to generate hyphenation utilities
      kerning: true, // whether to generate kerning utilities
      textUnset: true, // whether to generate utilities to unset text properties
      componentPrefix: '', // the prefix to use for text style classes
    }),
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
