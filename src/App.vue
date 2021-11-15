<template>
    <Header />
    <main>
    <router-view v-slot="{ Component }">
      <transition 
        enter-active-class="animate__animated animate__fadeIn" 
        leave-active-class="animate__animated animate__fadeOutDown"
        mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    </main>
    <Footer />
</template>

<script>
import Header from '@/components/global/header/Header.vue'
import Footer from './components/global/footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header, Footer
  },
}
</script>
<style lang="scss">
  .page{
    min-height: 100vh;
  }
</style>
