<template>
    <transition appear name="fade">
        <div class="iframe-container" @click="closeIframe()">
            <div class="iframe-inner">
                <div class="iframe-exit" @click="closeIframe()">
                    <span>Fermer</span>
                </div>
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
    components: {},
    props: {},
    data() {
        return {
            load: true
        }
    },
    methods: {
        closeIframe(){
            this.$emit('close');
        },
    },
    mounted() {

    }
}
</script>

<style lang="scss">
    
    .iframe-container{
        position: fixed !important;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 100;
        box-sizing: border-box;
        cursor: pointer;
        @include blur;

        .iframe-inner{
            z-index: 101;
            border-radius: $borderRadius-2;
            cursor: default;
            
            .iframe-exit{
                position: absolute;
                top: 24px;
                right: 24px;
                @include hover;
            }

            iframe{
                border: none;
                border-radius: $borderRadius-2;
            }
        }
    }
</style>