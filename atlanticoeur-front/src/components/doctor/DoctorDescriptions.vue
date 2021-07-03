<template>
    <div class="wrapper-content bg-grey--50">
        <div class="description-doctor-list">
            <transition-group 
                name="descriptionList"
                tag="div" >
                <doctor-description 
                    v-for="(doctor, index) in doctors" :key="index" 
                    :doctor-data="doctor"
                    :is-selected="selected === index"
                    @selected="childSelectDescription"
                />
            </transition-group>
        </div>
    </div>
</template>

<script>

import DoctorDescription from '@/components/doctor/DoctorDescription'

export default {
    name: 'DoctorDescriptionList',
    components: {
        'doctor-description': DoctorDescription
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
    },
    mounted() {
        console.log(this.$parent.doctors)
        this.doctors = this.$parent.doctors
    }   
}
</script>

<style lang="scss">
    @import "@/assets/scss/_variables.scss";

    .description-doctor-list{
        position: relative;
        top: -6.4rem;
    }

    .descriptionList-enter-active {
        transition: all .3s ease;
        transition-delay: 1s;
    }

    .descriptionList-enter {
        opacity: 0;
        transition: all .5s ease;
        transition-delay: 1s;
    }

</style>