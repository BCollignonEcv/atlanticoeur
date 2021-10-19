<template>
    <div class="wrapper-content">
        <div class="grid">
            <grid-item :type-line="'header'" :data-link="links[0].header"/>
            <transition-group appear class="grid_content" name="grid-animation" tag="div" >
                <grid-item
                    v-for="(link, index) in links[0].content" :key="index" 
                    :data-link="link"
                    :selected="false"
                    class="grid-item"
                />
            </transition-group>
        </div>
    </div>
</template>

<script>

import GridItem from '@/components/grid/Grid-item'

export default {
    components: {
        'grid-item': GridItem
    },
    props: {
        dataLinks: Object
    },
    data() {
        return {
            links: this.dataLinks,
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>

<style lang="scss">

    .grid {
        padding: 4.6rem 0;

        .grid-animation-in-enter {
            opacity: 0;
            transform: scale(.5);
        }

        .grid-animation-enter-active {
            transition: all .4s ease;
            transition-delay: 1s;
        }

        .grid_header{
            border-top: 1px solid $color-grey-6;
            border-bottom: 1px solid $color-grey-6;
            padding: $font-extraSmall 0 $lineHeight-large 0;

            &.grid_line {
                p{
                    @include font-size-3;
                }
            }
        }

        .grid_content {
            .grid-item {
                transition: all 5s;
            }

            .grid_line{
                &:nth-child(1){
                    border-top: none;
                }

                &:hover{
                    cursor: pointer;

                    p{
                        color: $color-grey-2;
                    }
                }
            }
        }

        .grid_line {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-gap: 10px;
            border-top: 1px solid $color-grey-6;
            padding: $font-small 0;

            p{
                @include font-size-1;
                font-weight: bold;

                &.gl-1{
                    grid-column: 12 / 12;
                    grid-row: 1;
                }

                &.gl-3{
                    grid-column: 8 / 11;
                    grid-row: 1;
                }

                &.gl-8{
                    grid-column: 1 / 8;
                    grid-row: 1;
                }
            }
        }
    }
</style>