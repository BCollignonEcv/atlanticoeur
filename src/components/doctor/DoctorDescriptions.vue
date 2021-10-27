<template>
        <div class="description-doctor-list">
            <transition-group 
                name="descriptionList"
                tag="div" >
                    <doctor-description 
                        v-for="doctor in doctors" :key="doctor.id" 
                        :data-doctor="doctor"
                        :is-selected="selected === doctor.id"
                        @eventSelected="newSelected"
                    />
            </transition-group>
        </div>
</template>
<script>

import DoctorDescription from '@/components/doctor/DoctorDescription'

export default {
    name: 'DoctorDescriptionList',
    components: {
        'doctor-description': DoctorDescription
    },
    props: {
        dataDoctors: Object,
        doctorSelected: Number
    },
    data() {
        return {
            doctors: this.dataDoctors,
            selected: this.doctorSelected
        }
    },
    watch: {
        dataDoctors: function() {
            this.doctors = this.dataDoctors
        }
    },
    methods: {
        newSelected (value) {
            if (value != this.selected) {
                this.selected = value
            } else {
                this.selected = null
            }
        }
    }
}
</script>

<style lang="scss">
    
    .description-doctor-list{
        position: relative;
        top: -6.4rem;
        padding-bottom: 4rem;
    }

</style>