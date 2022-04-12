<template>
    <div class="cta_container">
        <button @click="appStore.showModal('doctors')">Prendre rendez-vous</button>
    </div>
</template>

<script>
import { useAppStore } from '@/stores/App.store'

export default {
    components: {
    },
    setup() {
        const appStore = useAppStore();
        return { appStore }
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
            @include font-size-1;
            padding: 3.2rem 23rem; 
            cursor: pointer;
            border: 1px solid $color-grey-5;
            border-radius: $borderRadius-3;
        }
    }
</style>