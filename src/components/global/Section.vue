<template>
        <section v-scrollanimation :class="{ 'dark-gradiant': dark, 'grey': grey, 'full-height': fullHeight, 'full-width': fullWidth}" class="wrapper-content">
            <template v-if="splited">
                <!-- Splited Section -->
                <div  class="l_container">
                    <div class="l_col l_leftSide">
                        <h1 v-if="landing">{{title}}</h1>
                        <h2 v-else>{{title}}</h2>
                        <slot name="leftSide"></slot>
                        <div v-if="landing" class="l_container-bottom">
                            <Button :shape="'circle'" :padding="[2.5,2.5]" :display="['desktop']" :targetLink="{url: '', type: 'internal'}">
                                <template v-slot:icone>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 12L16 20L24 12" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </template>
                            </Button>
                        </div>
                    </div>
                    <div class="l_col l_rightSide">
                        <slot name="rightSide"></slot>
                    </div>
                </div>
            </template>
            <template v-else>
                <!-- Simple Section -->
                <template v-if="title">
                    <h1 v-if="landing">{{title}}</h1>
                    <h2 v-else>{{title}}</h2>
                </template>
                <slot></slot>
            </template>
        </section>
</template>

<script>

import ScrollAnimation from '@/directives/scrollAnimation'
import Button from '@/components/subcomponents/Button'

export default {
    components: {
        Button
    },
    props: {
        title: String,
        sectionSetting: Array,
    },
    directives: {
        scrollanimation: ScrollAnimation
    },
    data() {
        return {
            settings: this.sectionSetting ? this.sectionSetting : [],
            landing: false,
            dark: false,
            grey: false,
            fullHeight: false,
            fullWidth: false,
            splited: false,
        }
    },
    created(){
        if(this.settings.includes('splited')){
            this.splited = true;
        }
        if(this.settings.includes('fullHeight')){
            this.fullHeight = true;
        }
        if(this.settings.includes('fullWidth')){
            this.fullWidth = true;
        }
        if(this.settings.includes('landing')){
            this.landing = true;
        }
        if(this.settings.includes('dark')){
            this.dark = true;
        }
        if(this.settings.includes('grey')){
            this.grey = true;
        }
    }
}
</script>

<style lang="scss">
    section{
        display: inline-block;

        &.full-width{
            padding-left: 0;
            padding-right: 0;

            h1,
            h2{
                @include wrapper;
            }
        }

        @media screen and (max-width: $breackpoint-desktop)
        {
            &>div.l_container{
                flex-direction: column;

                &>div.l_col.l_leftSide, &>div.l_col.l_rightSide{
                    width: 100%;
                    margin-top: $margin-1;
                }
            }
        }
    }

    .dark-gradiant{
        background: linear-gradient(90deg, #232526 0%, #414345 100%);

        h2{
            color: $color-neutral;
        }
    }

    .grey{
        background-color: rgba(239, 239, 239, .5);
    }

    .full-height{
        min-height: 100vh;
    }
</style>