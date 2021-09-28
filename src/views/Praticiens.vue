<template>
  <div class="page">
    <div class="wrapper-content">
      <h1>Les praticiens du cabinet <br> SCM Atlanticœur</h1>
    </div>
    <doctors-card-list :data-doctors="doctors" :type-card="'big'"/>
    <doctors-description-list :selected-item="selected" :data-doctors="doctors"/>
  </div>
</template>

<script>

import DoctorCards from "@/components/doctor/DoctorCards"
import DoctorDescriptions from "@/components/doctor/DoctorDescriptions"

export default {
  name: 'Praticiens',
  components: {
    'doctors-card-list': DoctorCards,
    'doctors-description-list': DoctorDescriptions
  },
  data() {
        return {
            doctors: [],
            selected: 1
        }
    },
    methods: {
        
    },
    mounted () {
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