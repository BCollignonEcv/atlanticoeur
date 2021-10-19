<template>
    <div class="slider-container" @mouseenter="hovered = true" @mouseleave="hovered = false">
        <div class="slider-nav">
            <transition name="slideInLR">
                <div 
                    v-show="active > 0 && hovered" 
                    @click="slidePrev()"
                    class="slider-nav-item nav-prev">
                    <span>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 8L12 16L20 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            </transition>
            <transition name="slideInRL">
                <div 
                    v-show="active < Object.keys(specialities).length -1 && hovered" 
                    @click="slideNext()"
                    class="slider-nav-item nav-next">
                    <span>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 24L20 16L12 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            </transition>
        </div>
        <div class="slider-content" v-on:scroll="handleSlideScroll">
            <SpecialitiesSlide
                v-for="speciality in specialities" 
                :key="speciality.id" 
                :data-speciality="speciality"
                class="slide"
            />
        </div>
    </div>
</template>

<script>

import SpecialitiesSlide from "@/components/speciality/SpecialitiesSlide"

export default {
    components: {
        SpecialitiesSlide
    },
    props: {
        dataSpecialities: Object,
    },
    data() {
        return {
            specialities: this.dataSpecialities,
            active: 0,
            hovered: false
        }
    },
    mounted() {
    },
    methods: {
        slideTo(){
            let slide = document.querySelector('#slide-1');
            let slider = document.querySelector('.slider-content');
            let globalMargin = parseFloat(window.getComputedStyle(slider, null).getPropertyValue('padding-left'));            
            let sliderContainer = document.querySelector('.slider-container');

            // Prepare slide gap
            let slideGap = this.active * -slide.offsetWidth - 24;

            // Handle last slide
            if(this.active === Object.keys(this.specialities).length - 1){
                console.log(sliderContainer.offsetWidth, slide.offsetWidth, globalMargin*2)
                slideGap += (sliderContainer.offsetWidth - globalMargin*2 - slide.offsetWidth - 24)
            }

            // Handle first slide
            if(this.active === 0){
                slideGap = 0;
            }
            
            // Slider animation
            slider.animate({
                    marginLeft: slideGap + "px",
                }, 
                {
                duration: 500,
                easing: 'ease-in-out',
                fill: 'forwards'
                }
            );
        },
        slidePrev() {
            if(this.active > 0){
                this.active--;
                this.slideTo();
            }
        },
        slideNext() {
            if(this.active < Object.keys(this.specialities).length){
                this.active++;
                this.slideTo();
            }
        },
        // handleSlideScroll (event) {
        //     let slide = document.querySelector('#slide-1');
        //     this.active = Math.floor(event.target.scrollLeft/slide.offsetWidth);
        // }
    },
    watch: {
        // 'active': function(){
        //     if((this.active >= 0) && (this.active < Object.keys(this.specialities).length)){
        //         this.slideTo();
        //     }
        // }
    }
}
</script>

<style lang="scss">
    *{
        box-sizing:border-box
    }

    .slider-container{
        height: 70vh;
        min-width: 100%;
        margin: auto;
        position: relative;
        overflow-x: hidden;

        .slider-nav{
            position: absolute;
            height: 100%;
            width: 100%;

            .slider-nav-item{
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);
                z-index: 5;
                padding: 4.8rem 1.8rem;
                background: rgba(239, 239, 239, 0.5);
                box-shadow: -4px 0px 4px rgba(239, 239, 239, 0.2);
                backdrop-filter: blur(16px);
                border-radius: 8px;
                cursor: pointer;

                &.nav-prev{
                    left: 0;
                }

                &.nav-next{
                    right: 0;
                }

                span{
                    color: $color-neutral;
                }
            }

            
        }

        .slider-content{
            display: flex;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scroll-behavior: smooth;
            scroll-padding-left: $wrapper-global-margin;
            padding-left: $wrapper-global-margin;

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
                margin-right: 2.4rem;
                background-color: $color-grey--50;
                border-radius: 8px;
                cursor: pointer;
                scroll-snap-align: start;

                figure{
                    position: relative;
                    height: 70vh;

                    .slide_overlay-title{
                        position: absolute;
                        top: 4.8rem;
                        left: 4.8rem;
                        color: $color-grey-6;
                        font-weight: bold;
                        @include font-size-1;
                    }

                    .slide_overlay-description{
                        position: absolute;
                        width: calc(100% - 4.8*2rem);
                        padding: 2.4rem;
                        bottom: 4.8rem;
                        left: 4.8rem;
                        color: $color-grey-2;
                        background: rgba(239, 239, 239, 0.5);
                        box-shadow: -4px 0px 4px rgba(239, 239, 239, 0.2);
                        backdrop-filter: blur(16px);
                        border-radius: 8px;
                        border: 1px solid $color-grey-6;
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