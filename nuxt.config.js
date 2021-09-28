export default {
  target: 'static',
  srcDir: 'src/',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'pt-br',
      class: 'font-sans',
    },
    titleTemplate: '%s | andrevandal.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Desenvolvimento Perfomático',
        template: (chunk) => `${chunk} | andrevandal.dev`,
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Desenvolvimento web moderno com especialista em Performance, SEO, SMO, Analyitcs e Marketing. Conheça André Van Dal.',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content:
          'Desenvolvimento web moderno com especialista em Performance, SEO, SMO, Analyitcs e Marketing. Conheça André Van Dal.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'AlmaMono-Regular',
        rel: 'preload',
        href: '/fonts/AlmaMono-Regular.woff2',
        as: 'font',
        crossorigin: 'anonymous',
      },
      // {
      //   hid: 'AlmaMono-Heavy',
      //   rel: 'preload',
      //   href: '/fonts/AlmaMono-Heavy.woff2',
      //   as: 'font',
      //   crossorigin: 'anonymous',
      // },
      // {
      //   hid: 'AlmaMono-Thin',
      //   rel: 'preload',
      //   href: '/fonts/AlmaMono-Thin.woff2',
      //   as: 'font',
      //   crossorigin: 'anonymous',
      // },
      // {
      //   hid: 'AlmaMono-Light',
      //   rel: 'preload',
      //   href: '/fonts/AlmaMono-Light.woff2',
      //   as: 'font',
      //   crossorigin: 'anonymous',
      // },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  components: true,
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Docs: https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // Docs: https://github.com/juliomrqz/nuxt-netlify
    '@aceforth/nuxt-netlify',
  ],
  // Docs: https://tailwindcss.nuxtjs.org/options
  tailwindcss: {
    configPath: '@/../tailwind.config.js',
  },

  // Docs: https://marquez.co/docs/nuxt-netlify/
  netlify: {
    mergeSecurityHeaders: true,
    redirects: [
      {
        from: '/instagram',
        to: 'https://linktr.ee/derevandal',
        status: 301,
        force: true,
      },
      {
        from: '/*',
        to: 'https://github.com/andrevandal',
        status: 302,
        force: true,
      },
    ],
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
      },
    },
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
            },
          ],
        ]
      },
    },
  },
}
