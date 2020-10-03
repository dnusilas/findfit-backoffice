import settings from './settings'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

    script: [
      {
        src: 'https://kit.fontawesome.com/2458e2885b.js',
        crossorigin: 'anonymous',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/main.css',
    // '@fortawesome/fontawesome-pro/css/all.min.css',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/vee-validate', '~/plugins/axios'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',

    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Sarabun: [400, 700],
        },
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
    [
      'vue-sweetalert2/nuxt',
      {
        confirmButtonColor: '#ff4500',
        cancelButtonColor: '#a0aec0',
      },
    ],
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: settings.API_URL,
  },

  /*
   ** Auth module configuration
   ** See https://auth.nuxtjs.org/guide/setup.html
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/backoffice/auth/login',
            method: 'post',
            propertyName: 'result.token',
          },

          logout: {
            url: '/backoffice/auth/logout',
            method: 'post',
          },

          user: {
            url: '/backoffice/auth/me',
            method: 'get',
            propertyName: 'result.admin',
          },
        },
      },
    },

    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/',
    },
  },

  toast: {
    position: 'top-right',
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ['vee-validate'],
  },

  router: {
    middleware: ['auth'],
  },

  /** Host and port configuration */
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
}
