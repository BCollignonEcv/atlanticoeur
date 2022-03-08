<template>
    <div class="wrapper-content">
        <div class="grid">
            <div v-if="links.header" class="grid_line grid_header">
                <p class="gl-8">{{links.header.title}}</p>
                <p class="gl-3">{{links.header.link}}</p>
                <p class="align-right gl-1" @click="reverseDateOrder()">
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" preserveaspectratio="none" class="c_icone">
                        <path d="M1 1L9 9L17 1" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </p>
            </div>
            <transition-group appear class="grid_content" name="grid-animation" tag="div" >
                <GridItem
                    v-for="(link, index) in links.content" :key="index" 
                    :data-link="link"
                    :selected="false"
                    class="grid-item"
                />
            </transition-group>
        </div>
    </div>
</template>

<script>

import GridItem from './Grid-item'

export default {
    components: {
        GridItem
    },
    props: {
        data: Object
    },
    data() {
        return {
            links: this.data,
        }
    },
    methods: {
        reverseDateOrder(){
            this.links.content.reverse();
            this.$el.getElementsByClassName('c_icone')[0].classList.toggle("reverse");
        }
    },
    mounted () {}
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
            border-top: 1px solid $color-grey--50;
            border-bottom: 1px solid $color-grey--50;
            margin-bottom: $margin-3;

            &.grid_line {
                padding: 1rem 0;

                p{
                    @include font-size-4;

                    &.align-right{
                        margin-right: 1.2rem;
                    }
                }
            }

            .c_icone{
                cursor: pointer;
                
                &.reverse{
                    text-align: left;
                    transform: rotate(180deg);
                }
            }
        }

        .grid_content {
            .grid-item {
                transition: all .5s;
            }

            .grid_line{
                @include hoverLink;
            }
        }

        .grid_line {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-gap: 10px;
            border-bottom: 1px solid $color-grey--50;
            padding: $d-font-small 0;
            transition: all .5s;

            p{
                @include font-size-1;
                @include font-bold;
                transition: all .5s;

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