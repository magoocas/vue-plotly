module.exports = {
  publicPath: "./",
  chainWebpack: config => {
    config.resolve.alias.set("vue", "@vue/compat");
    config.module.rule("js-plotly").test(/\.js$/).use("ify-loader").loader("ify-loader").end();
  },
  configureWebpack: {
    resolve: {
      fallback: {
        fs: false,
        path: false
      }
    }
  }
};
