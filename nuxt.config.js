module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "starter",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Global CSS
  */
  css: ["~/assets/css/main.css"],
  /*
  ** Add axios globally
  */
  build: {
    watch: ['api'],

    extend(config, ctx) {
      config.module.rules.push({
        test: /\.pug$/,
        loader: "pug-plain-loader",
        options: {
          data: {}
        }
      });
      config.module.rules.push({
        test: /\.mp3/,
        loader: 'file-loader',
        exclude: /node_modules/
      })
      config.module.rules.push({
        test: /\.(glsl|frag|vert)$/,
        loader: 'raw-loader',
        exclude: /node_modules/
      })
      config.module.rules.push({
        test: /\.(glsl|frag|vert)$/,
        loader: 'glslify-loader',
        exclude: /node_modules/
      })
    }
  },
  modules: [
    // '~/modules/typescript',
    "@nuxtjs/axios",
    "@nuxtjs/proxy"
  ],
  proxy: [
  ],
  axios: {
    // proxyHeaders: false
  },
  serverMiddleware: [
    // API middleware
    "~/api/index.js"
  ]
};
