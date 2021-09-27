<template>
    <div class="wrapper-content">
        <div class="flex-doctor">
            <doctor-card 
                v-for="(doctor, index) in doctors" :key="index" 
                :doctor-data="doctor"
                :selected="false"
                :type="type"
            />
        </div>
    </div>
</template>

<script>

import Doctorcard from '@/components/doctor/DoctorCard'

export default {
    components: {
        'doctor-card': Doctorcard
    },
    props: {
        typeCard: String
    },
    data() {
        return {
            doctors: [],
            type: this.typeCard
        }
    },
    methods: {},
    mounted () {}
}
</script>

<style lang="scss">
    .flex-doctor{
        display: flex;
        flex-wrap: wrap;
        margin: 0 -1.2rem;
        padding: 4.8rem 0 17.2rem 0;

        & > .card-doctor{
            margin: 0 1.2rem;
            width: calc(25% - 2.4rem);
        }
    }
</style>