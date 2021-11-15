<template>
  <div class="page">
    <section-component :title="'Les cardiologues du cabinet \nSCM Atlanticœur'" :sectionSetting="['landing']">
      <doctors-card-list :data-doctors="doctorsSpe" :type-card="'big'" @eventSelected="newSelected"/>
    </section-component>
    <section-component :sectionSetting="['grey']">
      <doctors-description-list :doctor-selected="doctorSelected" :data-doctors="doctorsSpe" @eventSelected="newSelected"/>
    </section-component>
     <section-component :title="'Les spécialités du cabinet \nSCM Atlanticœur'" :sectionSetting="['fullWidth', 'bigTitle']">
      <Slider :haveNavigation="true" :limit="Object.keys(specialities).length">
        <template v-slot:slide>
          <SpecialitiesSlide
            v-for="speciality in specialities" 
            :key="speciality.id" 
            :data-speciality="speciality"
            class="slide"
          />
        </template>
      </Slider>
    </section-component>
    <section-component v-if="responsiveDisplay.tablette" :sectionSetting="['dark', 'sectionMarginTop']">
        <Cta />
    </section-component>
  </div>
</template>

<script>

import DoctorCards from "@/components/doctor/DoctorCards"
import DoctorDescriptions from "@/components/doctor/DoctorDescriptions"
import Slider from "@/components/global/Slider"
import Section from "@/components/global/Section"
import Cta from "@/components/global/Cta"
import SpecialitiesSlide from "@/components/speciality/SpecialitiesSlide"


export default {
  name: 'Praticiens',
  components: {
    'doctors-card-list': DoctorCards,
    'doctors-description-list': DoctorDescriptions,
    'section-component': Section,
    Slider, SpecialitiesSlide, Cta
  },
  data() {
        return {
            doctorSelected: 1,
            specialitySelected: null,
        }
    },
     methods: {
        newSelected (value) {
            this.doctorSelected = value;
        }
    },
    created () {
    },
    mounted (){
    },
    watch: {
      doctorSelected: function(id){
        if(id != null){
          setTimeout(function(){ 
            document.getElementById('doctorDescription'+id).scrollIntoView({behavior: "smooth", block: "center"})
          }, 200);
        }
      }
    }
}
</script>

<style lang="scss" scoped>
  .links{
    p{
        color: $color-primary;
    }
  } 
</style>