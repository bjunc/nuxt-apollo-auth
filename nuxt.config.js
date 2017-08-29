module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-apollo-auth-session',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt with Apollo auth and sessions' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,600,600i,700,700i' }
    ]
  },
  modules: ['@nuxtjs/apollo'],
  apollo: {
    networkInterfaces: {
      default: '~/apollo/network-interfaces/default.js'
    }
  },
  plugins: ['~/plugins/apollo-auth'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  css: [
    { src: 'bulma', lang: 'sass' }, 
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
