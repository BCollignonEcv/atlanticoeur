<template>
  <div class="page">
    <Section :title="'Les cardiologues du cabinet \nSCM Atlanticœur'" :sectionSetting="['landing']">
      <DoctorCards :type-card="'big'"/>
    </Section>
    <Section :sectionSetting="['grey']">
      <DoctorDescriptions />
    </Section>
    <Section :title="'Les spécialités du cabinet \nSCM Atlanticœur'" :sectionSetting="['fullWidth', 'bigTitle']">
      <Slider :options="{ slidesPerView: 2}">
        <template #slides>
          <SwiperSlide v-for="speciality in dataStore.getSpecialities" :key="speciality.id" >
            <SpecialitySlide
              :data-speciality="speciality"
            />
          </SwiperSlide>
        </template>
      </Slider>
    </Section>
    <Section v-if="responsiveDisplay.tablette" :sectionSetting="['dark', 'sectionMarginTop']">
        <Cta />
    </Section>
  </div>
</template>

<script>
import { useAppStore } from '@/stores/App.store'
import { useDataStore } from '@/stores/Data.store'
import { DoctorCards, DoctorDescriptions, SpecialitySlide} from "@/components/custom.components"
import { Section, Slider } from "@/components/layer.components"
import { Cta } from "@/components/form.components"
import { SwiperSlide } from "swiper/vue/swiper-vue";


export default {
  name: 'Praticiens',
  components: {
    DoctorCards, DoctorDescriptions, SpecialitySlide,
    Section, Slider,
    Cta,
    SwiperSlide
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
    let activeDoctor = null;
    dataStore.$subscribe((e) => {
      if(e.events.key === 'activeDoctor'){
        activeDoctor = e.events.newValue;
      }
    }, { detached: true })
    
    return { appStore, dataStore, activeDoctor }
  },
    methods: {
      newSelected (value) {
          this.doctorSelected = value;
      },
      scrollToDoctor(id){
        setTimeout(function(){ 
            document.getElementById('doctorDescription'+id).scrollIntoView({behavior: "smooth", block: "center"})
          }, 200);
      }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
  .links{
    p{
        color: $color-primary;
    }
  } 
</style> -->