<template>
  <template v-if="responsiveDisplay.tablette">
    <header id="nav">
      <nav class="l_container">
        <router-link to="/" class="header_link">Accueil</router-link>
        <router-link to="/praticiens" class="header_link">Les praticiens</router-link>
        <router-link to="/links" class="header_link">Les liens utiles</router-link>
      </nav>
    </header>
  </template>
  <template v-else>
    <header id="nav">
      <nav class="header_mobile">
        <ul class="header_item">
          <li class="header_link">Menu</li>
        </ul>
        <div class="header_item-container bordered wrapper-oversize" @click="scrollTo">
          <ul class="header_item inline whiteBlur wrapper-oversize">
            <li>
              <a class="header_link">Le cabinet</a>
              <div class="header_item-subitem">
                <p class="header_link">Tél.</p>
                <p class="header_link">Mail.</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="header_item-container bordered wrapper-oversize">
          <ul class="header_item bordered greyBlur wrapper-oversize">
            <li>
              <Collapse>
                  <template v-slot:header>
                    <p class="header_link">Rendez-vous via doctolib</p>
                  </template>
                  <template v-slot:content>
                    <DoctorCards :data-doctors="doctorsSpe" />
                  </template>
              </Collapse>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    
  </template>
</template>

<script>
import Collapse from '@/components/global/Collapse'
import DoctorCards from "@/components/doctor/DoctorCards"

export default {
  components: {
    Collapse, DoctorCards
  },
  data(){
    return {
    }
  }, 
  created(){
    console.log(this)
  }
}
</script>

<style lang="scss" scoped>

header{
    position: sticky;
    top: 0;
    z-index: 50;
    pointer-events: none;
}
#nav {
  padding: 2rem $wrapper-global-margin-mobile 1rem $wrapper-global-margin-mobile;
}

.header_link {
  text-transform: uppercase;
  text-align: center;
  flex: 1;
  padding: .8rem;
  @include font-bold;
  display: inline-block;
  position: relative;
  @include hoverLink;
  pointer-events: auto;
  color: $color-grey-1;

  &.router-link-exact-active{
    color: $color-primary;
  }

  &.grey{
    color: $color-grey-2;
  }
}
@media screen and (max-width: $breackpoint-tablette) {
  header{
    .header_mobile{
      .header_item-container{
        margin: $margin-5 0;
        &.wrapper-oversize{
          @include wrapper-oversize($margin: true);
        }
        &.bordered{
          border-left: 1px solid $color-grey-1;
          border-right: 1px solid $color-grey-1;
          .header_link{
            text-transform: none;
          }
        }
      }
      .header_item{
        margin: $margin-5 0;
        &.wrapper-oversize{
          @include wrapper-oversize($padding: true);
        }
        &.whiteBlur{
          @include blur($white: true);
          border-radius: $borderRadius-1
        }
        &.greyBlur{
          @include blur();
          border-radius: $borderRadius-1
        }
        &.inline{
          &>*{
            @include flexContainer();
            width: 100%;

            .header_item-subitem{
              .header_link{
                width: auto;
                color: $color-grey-5;
                border-left: 1px solid $color-grey-6;
                padding: $margin-5 $margin-4 $margin-5 $margin-5; 
              }
            }
          }
        }
      }

      .header_link{
        text-align: initial;
        padding: $margin-6*2 0;
        @include font-size-1;
        width: 100%;
      }
    }
  }
}
@media screen and (min-width: $breackpoint-tablette) {
  #nav {
    margin: 1.2rem auto 9.2rem auto;
    padding: 2.4rem;
    width: 61.25%;

    a {
      &:after{
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        top: 0;
        left: 0;
        background-color: $color-primary;
        transform-origin: top right;
        transition: transform 0.25s ease-out;
      }

      &:hover:after{
        transform: scaleX(1);
        transform-origin: top left;
      }

      &.router-link-exact-active{
        &:after {
          transform: scaleX(1);
          transition: 0;
        }
      }
    }
  }
}
</style>