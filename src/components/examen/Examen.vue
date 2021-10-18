<template>
    <div class="examens-container">
        <div class="examens-grid">
            <examen-item 
                v-for="examen in examens" :key="examen.id" 
                :data-examen="examen"
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
            console.log(this.elementSize)
            document.querySelectorAll('.examens-grid .examen_item').forEach(function(item) {
                let size = Math.random() * 5 + 1;

                item.style.marginTop = size + 'rem';
                item.style.marginBottom = size + 'rem';
            });
            console.log(this.elementSize)
        },
    },
    mounted () {
        this.getRandomSizeClass()
    }
}
</script>

<style lang="scss">
    .examens-container{
        height: 20px;
        position: static;

        .examens-grid{
            display: flex;
            position: absolute;
            width: 100% - 2* $wrapper-global-margin;
            top: 50%;
            transform: translate(0, -50%);
            &>div{
                &.examen_item{
                    flex: 1;
                    padding: 1.2rem 0;
                    border-top: 1px solid grey;
                    border-bottom: 1px solid grey;
                    position: relative;

                    h5{
                        position: absolute;
                        top: 50%;
                        transform: translate(0, -50%);
                    }

                    &:nth-of-type(1){
                        padding: 1.6rem 0;
                    }
                }
            }
        }
    }
</style>