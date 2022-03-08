<template>
    <div class="examens-container">
        <div class="examens-grid">
            <Examen v-for="examen in examens" :key="examen.id" :data="examen" />
        </div>
    </div>
</template>

<script>

import { Examen } from '@/components/custom.components'
import { useAppStore } from '@/stores/App.store'
import { useDataStore } from '@/stores/Data.store'

export default {
    components: {
        Examen
    },
    props: {},
    data() {
        return {
            elementSize: []
        }
    },
    setup() {
        const appStore = useAppStore();
        const dataStore = useDataStore();
        return { appStore, dataStore }
    },
    computed:{
        examens(){ return this.dataStore.getExamens }
    },

    methods: {
    },
    mounted () {
    }
}
</script>

<style lang="scss">
    .examens-container{
        min-height: 50vh;

        .examens-grid{
            @include flexContainer($orientation: column, $align: center);
            height: 100%;
            
            .examen_item{
                position: relative;
                padding: $margin-4 0;
                border-top: 1px solid grey;
                border-bottom: 1px solid grey;
                transition: all .5s ease-in-out;
                cursor: pointer;

                .examen_item-title{
                    width: 100%;
                    text-align: center;
                    text-transform: uppercase;
                    margin: 0;
                    transition: all .5s;
                    @include font-size-4;
                }

                .examen_item-description{
                    padding-top: $margin-3;
                }

                &.active{
                    padding-right: 1rem;
                    .examen_item-title{
                        transition: all .5s;
                        text-align: left;
                    }
                }
            }
        }
    }
    @media screen and (max-width: $breackpoint-tablette) {
        .examens-container{
            height: 100%;

            .examens-grid{
                
                .examen_item{
                    width: 100%;
                    margin-bottom: $margin-6;
                    border-top: 10px solid;
                    border-image-slice: 1;
                    border-width: 1px;
                    border-bottom: none;
                    border-image-source: linear-gradient(to left, #232526, #414345);

                    .examen_item-title{
                       font-size: $m-lineHeight-extraLarge;
                    }

                    .examen_item-description{
                        padding-top: $margin-5;
                    }

                    &.active{
                        .examen_item-title{}
                    }
                }
            }
        }
    }

    @media screen and (min-width: $breackpoint-tablette) {
        .examens-container{
                height: 50vh;

                .examens-grid{
                    @include flexContainer($align: center);
                    height: 100%;
                    
                    .examen_item{
                        flex: 1;
                        position: relative;
                        padding: 2.4rem 1rem;
                        border-top: 1px solid grey;
                        border-bottom: 1px solid grey;
                        transition: all .5s ease-in-out;
                        cursor: pointer;

                        .examen_item-title{
                            width: 100%;
                            text-align: center;
                            text-transform: uppercase;
                            margin: 0;
                            transition: all .5s;
                            @include font-size-4;
                        }

                        &.active{
                            .examen_item-title{
                                transition: all .5s;
                            }
                        }
                    }
                }
            }
    }
</style>