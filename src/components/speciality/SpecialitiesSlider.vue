<template>
    <div class="slider-container">
        <div class="slider-nav">
            <div 
                v-show="active > 0" 
                @click="slidePrev()"
                class="slider-nav-item nav-prev">
                <span>></span>
            </div>
            <div 
                v-show="active < Object.keys(specialities).length" 
                @click="slideNext()"
                class="slider-nav-item nav-next">
                <span>></span>
            </div>
        </div>
        <div class="slider-content">
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
            active: 0
        }
    },
    methods: {
        slideTo(){
            let width = document.querySelector('#slide-1').offsetWidth;
            let slider = document.querySelector('.slider-content');
            slider.animate({
                    marginLeft: this.active * -width + "px"
                }, 
                {
                duration: 500,
                easing: 'ease-in-out',
                fill: 'forwards'
                }
            );
        },
        slidePrev() {
            if(this.active >= 0){
                this.active--;
            }
        },
        slideNext() {
            if(this.active < Object.keys(this.specialities).length){
                this.active++;
            }
        },
    },
    mounted() {
    },
    watch: {
        'active': function(){
            if((this.active >= 0) && (this.active <= Object.keys(this.specialities).length)){
                this.slideTo();
            }
        }
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

        .slider-nav{
            position: absolute;
            height: 100%;
            width: 100%;

            .slider-nav-item{
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);
                z-index: 5;
                padding: 4.8rem 2.4rem;
                background: rgba(239, 239, 239, 0.5);
                box-shadow: -4px 0px 4px rgba(239, 239, 239, 0.2);
                backdrop-filter: blur(16px);
                border-radius: 8px;

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

            .slide{
                margin-right: 2.4rem;
                background-color: $color-grey--50;

                figure{
                    position: relative;
                    height: 70vh;

                    .slide-overlay{
                        position: absolute;
                        top: 4.8rem;
                        left: 4.8rem;
                        color: $color-grey-6;
                        font-weight: bold;
                        @extend .font-size-1;
                    }

                    .slide-img{
                        margin: 0 auto;
                        height: 100%;
                    }
                }
            }
        }
    }

</style>