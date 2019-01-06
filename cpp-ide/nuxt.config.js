module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'CPP IDE on Kubernetes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'CPP IDE on Kubernetes / Nuxt + Vuetify' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
//  plugins: ['~/plugins/vuetify.js', {src: '~/plugins/ace-editor-module.js', ssr: false}],
  plugins: ['~/plugins/vuetify.js', {src: '~/plugins/ace-editor.js', ssr: false}],
  css: ['~/assets/style/app.styl'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  modules: ['@nuxtjs/axios'],
  axios: {
    proxy: true
  },
  proxy: {
    '/api/compile': { target: `http://${process.env.CPP_COMPILER_SERVICE_HOST}:${process.env.CPP_COMPILER_SERVICE_PORT}`,
                   pathRewrite: { '^/api/compile' : '/' }  }
  }
}
