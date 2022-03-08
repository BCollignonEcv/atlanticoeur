<template>
  <div class="page">
    <div class="wrapper-content">
      <h1>Les différents liens utiles <br>recommandés</h1>
    </div>
    <Grid :data="dataStore.getLinks"/>
  </div>
</template>

<script>
import { useAppStore } from '@/stores/App.store'
import { useDataStore } from '@/stores/Data.store'
import { Grid } from "@/components/custom.components"

export default {
  name: 'links',
  components: {
    Grid
  },
  data() {
    return {
        takeAppointment: false,
        showContacts: false,
        open: 1
    }
  },
  setup() {
    const appStore = useAppStore();
    const dataStore = useDataStore();
    return { appStore, dataStore }
  },
}
</script>

<style lang="scss" scoped>
</style>