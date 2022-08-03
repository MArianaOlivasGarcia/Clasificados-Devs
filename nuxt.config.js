export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Clasificados Contacto',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800' },
      { rel: 'stylesheet', href: '/css/icomoon.css'},

    ],
    script: [
      { src: 'https://kit.fontawesome.com/2fff93d78d.js', crossorigin: 'anonymous' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/flaticon.css',
    '@/assets/css/fontawesome.min.css',
    '~/assets/css/swiper.css'
  ],
  

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-observe-visibility.js',
    {
      src: '~/plugins/vue-lightbox.js',
      ssr: false
    },
    {
      src: '~/plugins/vuejs-datepicker.js',
      ssr: false
    },
    {
      src: '~/plugins/vuejs-paginate.js'
    },
    {
      src: '~/plugins/vue-backtotop.js',
      ssr: false
    },
    { src: '~/plugins/vue-vuelidate'},
    { src: '~/plugins/vue-googlemaps', ssr: false},
    { src: '~/plugins/vue-tel-input' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {

        },
        autoprefixer: {
          
        }
      }
    }
  }
}
