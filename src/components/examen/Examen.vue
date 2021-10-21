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
            return Math.random() * 4 + 1;
        },
    },
    mounted () {
    }
}
</script>

<style lang="scss">
    .examens-container{
        height: 50vh;

        .examens-grid{
            display: flex;
            height: 100%;
            
            &>div{
                &.examen_item{
                    flex: 1;
                    position: relative;

                    .examen_item-floating{
                        position: absolute;
                        top: 50%;
                        transform: translate(0, -50%);
                        width: 100%;
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
                    }
                    &.active{
                        .examen_item-floating{
                            .examen_item-title{
                                transition: all .5s;
                            }
                        }
                    }
                }
            }
        }
    }
</style>