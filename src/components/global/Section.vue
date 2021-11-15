<template>
        <section v-scrollanimation :class="{ 'dark-gradiant': dark, 'grey': grey, 'full-height': fullHeight && responsiveDisplay.tablette, 'full-width': fullWidth, 'landing': landing, 'sectionPadding': sectionPadding, 'sectionMarginTop': sectionMarginTop, 'bigTitle': bigTitle}" class="wrapper-content">
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
                <div v-if="title || dataSelect" class="section_header-container">
                    <h1 v-if="landing">{{title}}</h1>
                    <h2 v-else>{{title}}</h2>
                    <Select v-if="dataSelect && breakpoints.bm" :data="dataSelect" :title="'spécialités'" @select="selectSpeciality"/>
                </div>
                <slot :selectedSpeciality="selectedValue"></slot>
            </template>
        </section>
</template>

<script>

import ScrollAnimation from '@/directives/scrollAnimation'
import Button from '@/components/subcomponents/Button'
import Select from '@/components/subcomponents/Select'

export default {
    components: {
        Button, Select
    },
    props: {
        title: String,
        sectionSetting: Array,
        dataSelect: Array,
    },
    directives: {
        scrollanimation: ScrollAnimation
    },
    data() {
        return {
            settings: this.sectionSetting ? this.sectionSetting : [],
            landing: false,
            sectionPadding: false,
            sectionMarginTop: false,
            dark: false,
            grey: false,
            fullHeight: false,
            fullWidth: false,
            splited: false,
            bigTitle: false,
            selectedValue: null,
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
        if(this.settings.includes('sectionPadding')){
            this.sectionPadding = true;
        }
        if(this.settings.includes('sectionMarginTop')){
            this.sectionMarginTop = true;
        }
        if(this.settings.includes('dark')){
            this.dark = true;
        }
        if(this.settings.includes('grey')){
            this.grey = true;
        }
        if(this.settings.includes('bigTitle')){
            this.bigTitle = true;
        }
    },
    methods: {
        selectSpeciality: function(id){
            this.selectedValue = id;
        }
    },
}
</script>

<style lang="scss" scoped>
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

        .section_header-container{
            @include flexContainer($justify: space-between);
            margin-top: 15rem;
            margin-bottom: 7.2rem;
        }
    }

    .dark-gradiant{
        background: linear-gradient(90deg, #232526 0%, #414345 100%);
        h2{
            color: $color-neutral;
        }
    }

    .grey{
        background-color: $color-grey-6;
    }

    .full-height{
        min-height: 100vh;
    }

    .landing{
        margin-bottom: 15rem;

        h2{
            color: $color-neutral;
            @include font-bold;
            white-space: pre;
            @include font-size-1;
        }
        .section_header-container{
            @include flexContainer($justify: space-between);
            margin-top: 0;
            margin-bottom: 7.2rem;
        }
    }

    .sectionMarginTop{
        margin-top: 8rem;
    }

    .sectionPadding{
        padding-bottom: 8rem;
    }

    .bigTitle{
        h2{
            @include font-size-1;
        }
    }

    @media screen and (max-width: $breackpoint-tablette){
        section{
            &>div.l_container{
                flex-direction: column;

                &>div.l_col.l_leftSide, &>div.l_col.l_rightSide{
                    width: 100%;
                    margin-top: $margin-1;
                }
            }

            .section_header-container{
                @include flexContainer($justify: space-between);
                margin-top: $margin-3;
                margin-bottom: $margin-1;
            }
            
            &.dark-gradiant{
                border-radius: $borderRadius-0;
            }

            &.grey{
                border-radius: $borderRadius-0;
            }
        }
    }
</style>