<template>
    <div class="cta_container">
        <!-- <button @click="$emit('takeAppointment', true)">Prendre rendez-vous</button> -->
        <router-link to="/Praticiens"><button>Prendre rendez-vous</button></router-link>
    </div>
</template>

<script>

export default {
    components: {
    },
    props: {
        onTakeAppointment: { 
            type: Boolean,
            default: false 
        },
    },
    data() {
        return {
            load: true
        }
    },
    emits:[
        'takeAppointment'
    ],
    methods: {
        
    },
    mounted() {

    }
}
</script>

<style lang="scss">
    .cta_container{
        @include flexContainer($justify: space-around);
        @include wrapper;
        padding: $margin-1*2;
        

        button{
            @include hover;
            @include font-bold;
            @include font-size-3;
            padding: 3.2rem 23rem; 
            cursor: pointer;
            border: 1px solid $color-grey-5;
            border-radius: $borderRadius-3;
        }
    }
</style>