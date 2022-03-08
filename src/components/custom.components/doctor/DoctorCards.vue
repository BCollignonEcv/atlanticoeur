<template>
    <div class="flex-doctor">
        <DoctorCard 
            v-for="(doctor, index) in doctors" :key="index"
            :doctor-data="doctor"
            :type="type"
        />
    </div>
</template>

<script>
import { useAppStore } from '@/stores/App.store'
import { useDataStore } from '@/stores/Data.store'

import DoctorCard from './DoctorCard'

export default {
    components: {
        DoctorCard
    },
    props: {
        typeCard: String,
    },
    data() {
        return {
            type: this.typeCard,
        }
    },
    setup() {
        const appStore = useAppStore();
        const dataStore = useDataStore();
        return { appStore, dataStore }
    },
    computed:{
        doctors(){ return this.dataStore.getDoctorsWithSpecialities}
    },
    methods: {
        newSelected (value) {
            this.$emit('event-selected', value)
        },
    },
}
</script>

<style lang="scss">
    .flex-doctor{
        @include flexContainer($align: stretch);
        margin: 0 -1.2rem;
        padding: 0 0 4.8rem 0;

        & > .card-doctor{
            margin: 1.2rem;
            width: calc(25% - 2.4rem);
        }

        @media screen and (max-width: $breackpoint-desktop){
            flex-wrap: wrap;
            & > .card-doctor{
                margin: 1.2rem;
                width: calc(50% - 2.4rem);
            }
        }

        @media screen and (max-width: $breackpoint-mobile){
            flex-wrap: wrap;
            & > .card-doctor{
                margin: 0;
                width: calc(50%);
            }
        }
    }
</style>