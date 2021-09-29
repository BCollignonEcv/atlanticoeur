// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/atlanticoeur/' : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/reset.scss";
        @import "@/assets/scss/variables.scss";
        @import "@/assets/scss/fonts.scss";
        @import "@/assets/scss/layers.scss";
        @import "@/assets/scss/base.scss";
        @import "@/assets/scss/style.scss";
        `
      }
    }
  }
}