<template>
    <div class="slider-container" @mouseenter="hovered = true" @mouseleave="hovered = false" :class="{'hasDescription': haveOverlayDescription}">
        <div v-if="haveNavigation" class="slider_nav">
            <transition name="slideInLR">
                <div 
                    v-show="active > 0 && hovered" 
                    @click="slidePrev()"
                    class="slider_nav-item nav-prev">
                    <span>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 8L12 16L20 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            </transition>
            <transition name="slideInRL">
                <div 
                    v-show="active < limit && hovered" 
                    @click="slideNext()"
                    class="slider_nav-item nav-next">
                    <span>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 24L20 16L12 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            </transition>
        </div>
        <div v-if="haveOverlayDescription" class="slider_overlay_description">
            <slot name="sliderDescription"></slot>
        </div>
        <div class="slider-content" :ref="slider">
            <slot name="slide"></slot>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    props: {
        limit: {
            type: Number,
            default: 0
        },
        haveNavigation: {
            type: Boolean,
            default: false
        },
        haveOverlayDescription: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            active: 0,
            hovered: false
        }
    },
    computed: {
    },
    mounted() {
    },
    methods: {
        // slideTo(){
        // },
        // slidePrev() {
        //     if(this.active > 0){
        //         this.active--;
        //         this.slideTo();
        //     }
        // },
        // slideNext() {
        //     if(this.active < this.limit){
        //         this.active++;
        //         this.slideTo();
        //     }
        // },
    }
}
</script>

<style lang="scss">
    $padding-overlay: 4vh;

    .slider-container{
        height: 70vh;
        min-width: 100%;
        margin: auto;
        position: relative;
        overflow: hidden;

        .slider_nav{
            position: absolute;
            height: 100%;
            width: 100%;

            .slider_nav-item{
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);
                z-index: 5;
                padding: 4.8rem 1.2rem;
                cursor: pointer;
                border-radius: $borderRadius-2;
                @include blur;

                &.nav-prev{
                    left: $margin-6;
                }

                &.nav-next{
                    right: $margin-6;
                }

                span{
                    color: $color-neutral;
                }
            }

            @media screen and (max-width: $breackpoint-desktop){
                display: none !important;
            }
        }

        &.hasDescription{
            padding: $padding-overlay 0;
            height: 78vh;
        }

        .slider_overlay_description{
            position: absolute;
            height: 100%;
            width: 30vw;
            left: $wrapper-global-margin;
            margin: -$padding-overlay 0;
            padding: $margin-4;
            z-index: 25;
            border-radius: $borderRadius-2;
            @include blur;

            *{
                color: $color-grey-4;
            }

            @media screen and (max-width: $breackpoint-desktop){
                width: 50vw;
            }
        }

        .slider-content{
            display: flex;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            scroll-padding-left: $wrapper-global-margin;
            padding-left: $wrapper-global-margin;
            // overflow-x: scroll;
            // -webkit-overflow-scrolling: touch;

            &>div:first-of-type{
                
            }

            &>div:last-of-type{
                position: relative;
            
                &:after{
                    content: "";
                    display: block;
                    position: absolute;
                    top: 0;
                    right: -$wrapper-global-margin;
                    width: $wrapper-global-margin;
                    height: 100%;
                }
            }

            .slide{
                margin-right: 16px;
                background-color: $color-grey--50;
                border-radius: $borderRadius-2;
                cursor: pointer;
                scroll-snap-align: start;

                figure{
                    position: relative;
                    height: 70vh;

                    .slide_overlay-title{
                        position: absolute;
                        top: 4.8rem;
                        left: 4.8rem;
                        color: $color-grey-5;
                        white-space: pre-line;
                        @include font-bold;
                        @include font-size-1;
                    }

                    .slide_overlay-description{
                        position: absolute;
                        width: calc(100% - 4.8*2rem);
                        padding: 2.4rem;
                        bottom: 4.8rem;
                        left: 4.8rem;
                        border: 1px solid $color-grey-6;
                        border-radius: $borderRadius-2;
                        white-space: pre-wrap;
                        @include blur;
                    }

                    .slide_img{
                        margin: 0 auto;
                        height: 100%;
                    }
                }
            }
        }
    }
</style>