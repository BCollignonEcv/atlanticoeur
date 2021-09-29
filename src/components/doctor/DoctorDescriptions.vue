<template>
    <div class="wrapper-content bg-grey--50">
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
        selectedItem: Number
    },
    data() {
        return {
            selected: this.selectedItem,
            doctors: this.dataDoctors
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
    }

</style>