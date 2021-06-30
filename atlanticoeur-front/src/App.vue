<template>
  <div>
    <Header-app />
    <div id="app">
      <router-view v-slot="{ Component }">
        <transition 
          enter-active-class="animate__animated animate__fadeInRight" 
          leave-active-class="animate__animated animate__fadeOutLeft"
          mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <Footer-app />
  </div>
</template>

<script>

import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';

export default {
  name: 'App',
  components: {
    "Header-app": Header,
    "Footer-app": Footer
  }

}
</script>
<style lang="scss">

  @import "@/assets/scss/_reset.scss";
  @import "@/assets/scss/_variables.scss";
  @import "@/assets/scss/_layers.scss";
  @import "@/assets/scss/style.scss";

  #app{
    position: relative;
  }

  .page{
    width: 88.75%;
    margin: 0 5.625%;
    min-height: 100vh;
  }
</style>
