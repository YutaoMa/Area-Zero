import catalog from './assets/catalog.js';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Area Zero',
    titleTemplate: '%s - Area Zero',
    meta: [
      { charset: 'utf-8', },
      { name: 'viewport', content: 'width=device-width, initial-scale=1', },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '', },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff', },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/markdownit',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true,
  },
  /*
  ** Proxy module configuration
  */
  proxy: {
    '/.netlify': {
      target: 'http://localhost:8888',
      pathRewrite: {
        '^/.netlify/functions': '',
      },
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  },
  /*
  ** Generate configuration
  */
  generate: {
    routes: []
      .concat(catalog.map(post => `/blog/${post.slug}`)),
  },
};
