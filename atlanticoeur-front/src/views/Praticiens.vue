<template>
  <div class="page">
    <div class="wrapper-content">
      <h1>Les praticiens du cabinet <br> SCM Atlanticœur</h1>
    </div>
    <doctors-card-list :type-card="'big'"/>
    <doctors-description-list />
  </div>
</template>

<script>

import axios from 'axios'
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
            selected: 0,
        }
    },
    methods: {
        getImgUrl(pathImg) {
            return require('@/assets/img/'+pathImg)
        },
        childSelectDescription(value){
            this.selected = value
        },
        async fetchData(){
            axios.get('http://localhost:3000/doctors').then(res => {
                    axios.get('http://localhost:3000/specialities').then(resSpe => {
                            res.data.forEach((item) => {
                                item['specialities'].forEach( (speciality) => {
                                    item['specialities'][speciality - 1] = resSpe.data[speciality - 1]
                                })
                            })
                            this.doctors = res.data
                        })
                })
        }
    },
    mounted () {
        this.fetchData()
    }
}
</script>

<style lang="scss" scoped>
  .links{
    p{
        color: var(--color-primary);
    }
  } 
</style>