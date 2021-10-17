<template>
    <div class="examens-section">
        <div class="examens-container">
            <div class="examens-grid">
                <examen-item 
                    v-for="examen in examens" :key="examen.id" 
                    :data-examen="examen"
                />
            </div>
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
            examens: this.dataExamens
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>

<style lang="scss">
    .examens-section {
        h2{
            margin-top: 0;
            margin-bottom: 0;
        }

        .examens-container{
            position: relative;
            height: 100%;

            .examens-grid{
                display: flex;
                // position: absolute;
                // top: 50%;
                // transform: translate(0, -50%);
                &>div{
                    &.examen_item{
                        flex: 1;
                        margin-right: 2.4rem;
                        padding: 1.2rem 0;
                        border-top: 1px solid grey;
                        border-bottom: 1px solid grey;

                        &:nth-of-type(2n){
                            padding: 2.4rem;
                        }
                    }

                    &:first-of-type{
                        margin-right: 2.4rem;
                    }
                    &:last-of-type{
                        margin-left: 2.4rem;
                    }
                }
            }
        }
    }
</style>