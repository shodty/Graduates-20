
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { shodty: '\n\n\n░██████╗██╗░░██╗░█████╗░██████╗░████████╗██╗░░░██╗\n██╔════╝██║░░██║██╔══██╗██╔══██╗╚══██╔══╝╚██╗░██╔╝\n╚█████╗░███████║██║░░██║██║░░██║░░░██║░░░░╚████╔╝░\n░╚═══██╗██╔══██║██║░░██║██║░░██║░░░██║░░░░░╚██╔╝░░\n██████╔╝██║░░██║╚█████╔╝██████╔╝░░░██║░░░░░░██║░░░\n╚═════╝░╚═╝░░╚═╝░╚════╝░╚═════╝░░░░╚═╝░░░░░░╚═╝░░░\n\n\n' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/bus',
    { src: '~/plugins/vue-expandable-image', mode: 'client' }

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-analytics', {
      id: 'UA-166334210-1'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    ['nuxt-lazy-load', {
      // These are the default values
      images: true,
      videos: true,
      audios: true,
      iframes: true,
      native: false,
      polyfill: true,
      directiveOnly: false,

      // Default image must be in the static folder
      defaultImage: '~/assets/img/loading.png',

      // To remove class set value to false
      loadingClass: 'isLoading',
      loadedClass: 'isLoaded',
      appendClass: 'lazyLoad',

      observerConfig: {
        // See IntersectionObserver documentation
      }
    }]

  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: ['vue-expandable-image'],
    extend (config, ctx) {
    }
  }
}
