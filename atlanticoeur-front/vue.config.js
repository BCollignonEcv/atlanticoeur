// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/_reset.scss";
        @import "@/assets/scss/_variables.scss";
        @import "@/assets/scss/_layers.scss";
        @import "@/assets/scss/style.scss";
        `
      }
    }
  }
}