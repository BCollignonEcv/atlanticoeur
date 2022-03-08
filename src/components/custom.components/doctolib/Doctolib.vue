<template >
    <div class="doctolib_iframe" v-if="this.dataStore.hasActiveDoctor">
        <iframe scrolling="no" :src="doctor.doctolib" style="height:100%; width: 100%" allowpaymentrequest></iframe>
    </div>
</template>

<script>
import { useDataStore } from '@/stores/Data.store'

export default {
    components: {},
    props: {
        data: Object,
    },
    data() { return {} },
    setup() {
        const dataStore = useDataStore();
        return { dataStore }
    },
    computed: {
        doctor(){
            return this.dataStore.getActiveDoctor;
        }
    },
    methods: {},
    mounted() {}
}
</script>

<style lang="scss">
    
    .doctolib_iframe{
        height: 85vh;
        width: 80vw;
        margin: 0vh 10vw 5vh 10vw;
    }
</style>