<template>
        <div class="description-doctor-list">
            <transition-group 
                name="descriptionList"
                tag="div" >
                    <doctor-description 
                        v-for="doctor in doctors" :key="doctor.id" 
                        :doctor="doctor"
                        :doctorSelected="doctorSelected"
                        @eventSelected="newSelected"
                    />
            </transition-group>
        </div>
</template>
<script>

import { DoctorDescription } from '@/components/custom.components/doctor'

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
        }
    },
    methods: {
        newSelected (value) {
            this.$emit('event-selected', value)
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