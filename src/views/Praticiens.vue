<template>
  <div class="page">
    <Section :title="'Les cardiologues du cabinet \nSCM Atlanticœur'" :sectionSetting="['landing']">
      <DoctorCards :type-card="'big'"/>
    </Section>
    <Section :sectionSetting="['grey']">
      <DoctorDescriptions />
    </Section>
     <Section :title="'Les spécialités du cabinet \nSCM Atlanticœur'" :sectionSetting="['fullWidth', 'bigTitle']">
      <!-- <Slider :haveNavigation="true" :limit="Object.keys(specialities).length">
        <template v-slot:slide>
          <SpecialitiesSlide
            v-for="speciality in specialities" 
            :key="speciality.id" 
            :data-speciality="speciality"
            class="slide"
          />
        </template>
      </Slider> -->
    </Section>
    <Section v-if="responsiveDisplay.tablette" :sectionSetting="['dark', 'sectionMarginTop']">
        <Cta />
    </Section>
  </div>
</template>

<script>
import { useAppStore } from '@/stores/App.store'
import { useDataStore } from '@/stores/Data.store'
import { DoctorCards, DoctorDescriptions} from "@/components/custom.components"
import { Section } from "@/components/layer.components"
import { Cta } from "@/components/form.components"


export default {
  name: 'Praticiens',
  components: {
    DoctorCards, DoctorDescriptions,
    Section,
    Cta
  },
  data() {
      return {
          doctorSelected: 1,
          specialitySelected: null,
      }
  },
  setup() {
    const appStore = useAppStore();
    const dataStore = useDataStore();
    return { appStore, dataStore }
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
</style> -->