<template>
    <!-- Splited Section -->
    <section :class="{ 'dark-gradiant': dark, 'grey': grey, 'full-height': fullHeight}">
        <!-- Splited Section -->
        <div v-if="splited === 'splited'" class="l_container">
            <div class="l_col l_leftSide">
                <h1 v-if="landing">{{title}}</h1>
                <h2 v-else>{{title}}</h2>
                <slot name="leftSide"></slot>
            </div>
            <div class="l_col l_rightSide">
                <slot name="rightSide"></slot>
            </div>
        </div>
        <!-- Simple Section -->
        <template v-else>
            <template v-if="title">
                <h1 v-if="landing">{{title}}</h1>
                <h2 v-else>{{title}}</h2>
            </template>
            <slot></slot>
        </template>
    </section>
</template>

<script>
export default {
    props: {
        title: String,
        sectionSetting: Array
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
        @extend .wrapper-content;
        display: inline-block;
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

    .full-page{
        min-height: 100vh;
    }
</style>