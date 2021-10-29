<template>
        <div class="flex-doctor">
            <doctor-card 
                v-for="(doctor, index) in doctors" :key="index" 
                :doctor-data="doctor"
                :type="type"
                @eventSelected="newSelected"
            />
        </div>
</template>

<script>

import Doctorcard from '@/components/doctor/DoctorCard'

export default {
    components: {
        'doctor-card': Doctorcard
    },
    props: {
        typeCard: String,
        dataDoctors: Object
    },
    data() {
        return {
            doctors: this.dataDoctors,
            type: this.typeCard,
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
    .flex-doctor{
        display: flex;
        flex-wrap: wrap;
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
    }
</style>