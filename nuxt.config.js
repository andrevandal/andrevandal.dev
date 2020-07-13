export default {
  mode: 'universal',
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
  components: [
    '~/components/',
    { path: '~/components/Atoms/', prefix: 'Atoms' },
    { path: '~/components/Molecules/', prefix: 'Molecules' },
    { path: '~/components/Organisms/', prefix: 'Organisms' },
  ],
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
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/svg',
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
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {},
  },
}
