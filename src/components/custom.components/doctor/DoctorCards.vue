<template>
    <div class="flex-doctor">
        <DoctorCard 
            v-for="(doctor, index) in doctors" :key="index"
            :doctor-data="doctor"
            :selected="selectedSpeciality"
            :type="type"
            @eventSelected="newSelected"
        />
    </div>
</template>

<script>

import DoctorCard from './DoctorCard'

export default {
    components: {
        DoctorCard
    },
    props: {
        typeCard: String,
        dataDoctors: Object,
        selected: Number,
        selectedSpeciality: Number
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