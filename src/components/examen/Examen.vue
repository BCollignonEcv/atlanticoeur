<template>
    <div class="examens-container">
        <div class="examens-grid">
            <examen-item 
                v-for="examen in examens" :key="examen.id" 
                :data-examen="examen" :animation-padding="getRandomSizeClass()"
            />
        </div>
    </div>
</template>

<script>

import ExamenItem from '@/components/examen/Examen-item'

export default {
    components: {
        'examen-item': ExamenItem
    },
    props: {
        dataExamens: Object
    },
    data() {
        return {
            examens: this.dataExamens,
            elementSize: []
        }
    },
    methods: {
        getRandomSizeClass() {
            if(this.responsiveDisplay.tablette){
                return Math.random() * 5 + 1;
            }else{
                return null;
            }
        },
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
                width: 100%;
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

                &.active{
                    .examen_item-title{
                        transition: all .5s;
                    }
                }
            }
        }
    }
    @media screen and (max-width: $breackpoint-tablette) {
        .examens-container{

            .examens-grid{
                
                .examen_item{
                    margin-bottom: $margin-6;
                    border-top: 10px solid;
                    border-image-slice: 1;
                    border-width: 1px;
                    border-image-source: linear-gradient(to left, #232526, #414345);

                    .examen_item-title{
                       
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
                        padding: 2.4rem 0;
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