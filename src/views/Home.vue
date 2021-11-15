<template>
  <div class="home page">
    <section-component 
      :title="'Cabinet de cardiologie \nAtlanticoeur'"
      :sectionSetting="['landing','splited']"
    >
      <template v-slot:leftSide>
        <cabinet-description :data="cabinet.informations"/>
      </template>
      <template v-slot:rightSide>
        <specialities-dashboard :specialities="specialities"/>
      </template>
    </section-component>
    <section-component :title="'Les différents cardiologues du cabinet'" :sectionSetting="['grey', 'sectionPadding']" :dataSelect="specialities">
      <template v-slot:default="selected">
        <doctors-card-list :selectedSpeciality="selected.selectedSpeciality" :data-doctors="doctorsSpe" :type-card="'small'"/>
      </template>
    </section-component>
    <section-component 
      :title="'Les examens réalisés au cabinet'"
      :sectionSetting="['dark','fullHeight']"
    >
        <examen :data-examens="examens"/>
    </section-component>
    <section-component :title="'La clinique atlanticoeur'" :sectionSetting="['fullWidth']">
      <Slider :haveNavigation="true" :haveOverlayDescription="true" :limit="Object.keys(cabinet.photos).length">
        <template v-slot:sliderDescription>
          <cabinet-description :typeDescription="'full'" :data="cabinet.informations" @show="toggleModalContacts"/>
        </template>
        <template v-slot:slide>
          <CabinetSlide
            v-for="photo in cabinet.photos" 
            :key="photo.id" 
            :data="photo"
            class="slide"
          />
        </template>
      </Slider>
    </section-component>
    <section-component v-if="responsiveDisplay.tablette" :sectionSetting="['dark', 'sectionMarginTop']">
        <!-- <Cta @open="openAppointment"/> -->
        <Cta/>
    </section-component>
    <FooterOverlay v-if="responsiveDisplay.tablette" :data="cabinet.informations" @showContactModal="toggleModalContacts"/>
    <Modal v-if="showContacts" @close="toggleModalContacts">
      <Contact :data="cabinet.informations" />
    </Modal>
  </div>
</template>

<script>

import Section from "@/components/global/Section"
import Slider from "@/components/global/Slider"
import Cta from "@/components/global/Cta"
import Modal from "@/components/global/Modal"
import FooterOverlay from "@/components/global/footer/FooterOverlay"
import DoctorCards from "@/components/doctor/DoctorCards"
import Examen from "@/components/examen/Examen"
import SpecialiesDashboard from "@/components/speciality/SpecialitiesDashboard"
import CabinetDescription from "@/components/cabinet/CabinetDescription"
import CabinetSlide from "@/components/cabinet/CabinetSlide"
import Contact from "@/components/modal/contact"

export default {
  name: 'Home',
  components: {
        'section-component': Section,
        'doctors-card-list': DoctorCards,
        'examen': Examen,
        'specialities-dashboard': SpecialiesDashboard,
        'cabinet-description': CabinetDescription,
        CabinetSlide, Slider, Cta, Modal, FooterOverlay,Contact
  },
  data() {
    return {
        activeSpecialities: null,
        showContacts: false
    }
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
