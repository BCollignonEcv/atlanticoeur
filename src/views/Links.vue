<template>
  <div class="page">
    <div class="wrapper-content">
      <h1>Les différents liens utiles <br>recommandés</h1>
    </div>
    <div>
      <grid :data-links="links"/>
    </div>
    <Section v-if="responsiveDisplay.tablette" :sectionSetting="['dark', 'sectionMarginTop']">
        <Cta />
    </Section>
    <FooterOverlay/>
    <Modal v-if="showContacts" @close="toggleModalContacts">
    <Contact :data="cabinet.informations" />
  </Modal>
  </div>
</template>

<script>
import { useAppStore } from '@/stores/App.store'
import { useDataStore } from '@/stores/Data.store'
import { FooterOverlay } from "@/components/global.components"
import { Contact } from "@/components/custom.components"
import { Modal, Grid } from "@/components/layer.components"
import { Cta } from "@/components/form.components"

export default {
  name: 'links',
  components: {
    Grid, Cta, FooterOverlay, Contact, Modal
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
  methods: {
    toggleModalAppointment(){
      this.takeAppointment = false
    },
    toggleModalContacts(){
      this.showContacts = !this.showContacts
    }
  }
}
</script>

<style lang="scss" scoped>
</style> -->