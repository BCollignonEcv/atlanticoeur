<script>
  // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import { Navigation } from "swiper";

import "swiper/swiper.scss";

  export default {
    components: {
      Swiper, SwiperSlide
    },
    props: {
      options: {
        type: Object,
        default () {
          return { 
            overlay: false,
            slidesPerView: 'auto'
          }
        }
      }
    },
    computed: {
      normalizedOptions() {
        return Object.assign({
          overlay: false,
          slidesPerView: 'auto'
        }, this.options);
      }
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
    mounted() {
      console.log(this.normalizedOptions)
    }
  };
</script>

<template>
  <Swiper
    :slides-per-view="1"
    :space-between="24"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :breakpoints="{
      '768': {
        slidesPerView: normalizedOptions.slidesPerView,
      },
    }"
    :modules="modules"
    :class="{ swiperOverlay: normalizedOptions.overlay}"
  >
    <template v-if="normalizedOptions.overlay">
      <SwiperSlide v-if="responsiveDisplay.tablette" class="swiper-slide-empty"></SwiperSlide>
      <div class="swiper-overlay">
        <slot name="overlay"></slot>
      </div>
    </template> 
    <slot name="slides"></slot>


    
    <transition name="slideInLR">
        <div class="swiper-button swiper-button-prev">
            <span>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 8L12 16L20 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
        </div>
    </transition>
    <transition name="slideInRL">
        <div class="swiper-button swiper-button-next">
            <span>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 24L20 16L12 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
        </div>
    </transition>
  </Swiper>
</template>

<style lang="scss">
  $overlayPadding: 5vh;

  .swiper{
    @include wrapper;

    &.swiperOverlay{
      padding-top: $overlayPadding;
      padding-bottom: $overlayPadding;
    }
    .swiper-slide{
      width: auto;
      border-radius: $borderRadius-1;
    }

    .swiper-button{
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      z-index: 5;
      padding: 4.8rem 1.2rem;
      cursor: pointer;
      border-radius: $borderRadius-2;
      opacity: 0;
      transition: all .5s ease;
      @include blur;

      &.swiper-button-prev{
        left: -10rem;
      }

      &.swiper-button-next{
        right:  -10rem;
      }

      &.swiper-button-disabled{
        display: none;
      }
    }

    &:hover{
      transition: all .5s ease;
      .swiper-button{
        opacity: 1;
        &.swiper-button-prev{
          left: $margin-6,
        }

        &.swiper-button-next{
          right: $margin-6;
        }
      }
    }
    
    @media screen and (max-width: $breackpoint-tablette){
      &.swiperOverlay{
        padding-top: 0;
        padding-bottom: 0;
      }
      .swiper-overlay{
        position: relative;
        width: 100%
      }
    }

    @media screen and (min-width: $breackpoint-tablette){
      .swiper-overlay{
        position: absolute;
        top: 0;
        height: 100%;
        left: $wrapper-global-margin;
        z-index: 25;
        width: 40vw;
      }
      .swiper-slide-empty{
        width: 40vw;
      }
    }
  }
</style>