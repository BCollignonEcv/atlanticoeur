<template>
        <transition appear name="fade">
            <section v-if="animate" :class="{ 'dark-gradiant': dark, 'grey': grey, 'full-height': fullHeight, 'full-width': fullWidth}" class="wrapper-content">
                <template v-if="splited">
                    <!-- Splited Section -->
                    <div  class="l_container">
                        <div class="l_col l_leftSide">
                            <h1 v-if="landing">{{title}}</h1>
                            <h2 v-else>{{title}}</h2>
                            <slot name="leftSide"></slot>
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
        </transition>
</template>

<script>

export default {
    props: {
        title: String,
        sectionSetting: Array,
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
            animate: true,
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