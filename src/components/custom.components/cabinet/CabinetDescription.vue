<template>
    <div class="cabinet-description">
        <div class="l_container">
            <div class="l_col l_leftSide">
                <h3>{{company.city}}</h3>
            </div>
            <div class="l_col l_rightSide">
                <h3>{{company.name}}</h3>
                <h3>{{company.number}} {{company.address}}</h3> 
            </div>
        </div>
        <div class="cabinet-description-content">
            <p v-for="(description, index) in company.description" :key="index">{{description}}</p>
        </div>
    </div>
</template>

<script>
import { useAppStore } from '@/stores/App.store'
import { useDataStore } from '@/stores/Data.store'

export default {
    components: {},
    props: {
        typeDescription: String
    },
    data() {
        return {}
    },
    setup() {
        const appStore = useAppStore();
        const dataStore = useDataStore();
        return { appStore, dataStore }
    },
    computed: {
        company(){ return this.dataStore.getCompany },
    },
    methods: {
        getPhone(){
            return 'tel:'+this.company.phone
        },
        getEmail(){
            return 'mailto:'+this.company.email
        },
    },
    mounted () {
    }
}
</script>

<style lang="scss" scoped>
    .cabinet-description{
        .cabinet-description-content {
            margin-top: $margin-1;
            text-align: justify;
            text-justify: inter-word;

            p{
                @include font-size-3;
                margin-bottom: $margin-4;
            }
        }

        @media screen and (min-width: $breackpoint-desktop){
            .cabinet-description-content{
                padding-right: $margin-1*5;
            }
        }
    }


</style>