const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       additionalData: '@use "@/assets/scss/prepend.scss" as *;',
  //     },
  //   },
  // },

  configureWebpack: {
    plugins: [new FixStyleOnlyEntriesPlugin()],
    entry: {
      _app: "@/assets/scss/styles.scss"
    }
  }
};
