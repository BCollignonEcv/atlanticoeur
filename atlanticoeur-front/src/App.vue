<template>
    <router-view v-slot="{ Component }">
      <transition 
        enter-active-class="animate__animated animate__fadeIn" 
        leave-active-class="animate__animated animate__fadeOutDown"
        mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>
<style lang="scss">
  #app{
    position: relative;
  }

  .page{
    min-height: 100vh;
  }
</style>
