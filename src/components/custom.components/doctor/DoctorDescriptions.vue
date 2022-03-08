<template>
        <div class="description-doctor-list">
            <transition-group 
                name="descriptionList"
                tag="div" >
                    <DoctorDescription 
                        v-for="doctor in doctors" :key="doctor.id" 
                        :doctor="doctor"
                        :doctorSelected="doctorSelected"
                    />
            </transition-group>
        </div>
</template>
<script>

import { DoctorDescription } from '@/components/custom.components'
import { useAppStore } from '@/stores/App.store'
import { useDataStore } from '@/stores/Data.store'

export default {
    name: 'DoctorDescriptionList',
    components: {
        DoctorDescription
    },
    props: {
        doctorSelected: Number
    },
    data() {
        return {}
    },
    
    setup() {
        const appStore = useAppStore();
        const dataStore = useDataStore();
        return { appStore, dataStore }
    },
    computed:{
        doctors(){ return this.dataStore.getDoctorsWithSpecialities}
    },
    methods: {}
}
</script>

<style lang="scss">
    
    .description-doctor-list{
        position: relative;
        top: -6.4rem;
        padding-bottom: 4rem;
    }

</style>