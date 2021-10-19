// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/atlanticoeur/' : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/variables.scss";
        @import "@/assets/scss/mixins.scss";
        `
      }
    }
  }
}