<template>
  <div>
    <Header-app />
    <div id="app">
      <router-view v-slot="{ Component }">
        <transition 
          enter-active-class="animate__animated animate__fadeInLeft" 
          leave-active-class="animate__animated animate__fadeOutLeft">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>

import Header from '@/components/global/Header';

export default {
  name: 'App',
  components: {
    "Header-app": Header
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
    position: absolute;
    top: 0;
    margin: 0 10%;
  }
</style>
