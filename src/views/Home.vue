<template>
  <div class="home page">
    <Section :title="'Cabinet de cardiologie \nAtlanticoeur'" :sectionSetting="['landing','splited']">
      <template v-slot:leftSide>
        <CabinetDescription />
      </template>
      <template v-slot:rightSide>
        <Specialities />
      </template>
    </Section>
    <Section :title="'Les différents cardiologues du cabinet'" :sectionSetting="['grey', 'sectionPadding']" :dataSelect="dataStore.getSpecialities">
      <template v-slot:default>
        <DoctorCards :type-card="'small'"/>
      </template>
    </Section>
    <Section :title="'Les examens réalisés au cabinet'" :sectionSetting="['dark','fullHeight']">
        <Examens />
    </Section>
    <Section :title="'La clinique atlanticoeur'" :sectionSetting="['fullWidth']">
      <!-- <Slider :haveNavigation="true" :haveOverlayDescription="true" :limit="Object.keys(cabinet.photos).length">
        <template v-slot:sliderDescription>
          <CabinetDescription :typeDescription="'full'" :data="dataStore.getCompany" @show="toggleModalContacts"/>
        </template>
        <template v-slot:slide>
          <CabinetSlide
            v-for="photo in dataStore.getPhotos" 
            :key="photo.id" 
            :data="photo"
            class="slide"
          />
        </template>
      </Slider> -->
    </Section>
    <Section v-if="responsiveDisplay.tablette" :sectionSetting="['dark', 'sectionMarginTop']">
        <Cta/>
    </Section>
    <FooterOverlay v-if="responsiveDisplay.tablette" @showContactModal="toggleModalContacts"/>
    <Modal v-if="showContacts" @close="toggleModalContacts">
      <Contact />
    </Modal>
  </div>
</template>

<script>
import { Modal} from "@/components/layer.components"
import { Cta } from "@/components/form.components"
import { FooterOverlay } from "@/components/global.components"
import { CabinetDescription, DoctorCards, Examens, Specialities, Contact } from "@/components/custom.components"
import { useAppStore } from '@/stores/App.store'
import { useDataStore } from '@/stores/Data.store'

export default {
  name: 'Home',
  components: {
    DoctorCards, Examens, Specialities, CabinetDescription, Cta, Modal, FooterOverlay, Contact
  },
  data() {
    return {
        activeSpecialities: null,
        showContacts: false
    }
  },
  setup() {
    const appStore = useAppStore();
    const dataStore = useDataStore();
    return { appStore, dataStore }
  },
  methods: {
        toggleModalContacts(){
          this.showContacts = !this.showContacts
        }
    },
    created () {
    },
    mounted(){
    },
}
</script>

<style lang="scss" scoped>
  .l_container{
    &>*{
      flex: 1;
    }
  }
  h2{
  }
  .full_page{
    min-height: 100vh;
  }
</style>