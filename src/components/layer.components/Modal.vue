<template>
    <transition appear name="fade">
        <div class="iframe-container" @click.self="closeIframe()">
            <div class="iframe-exit" @click="closeIframe()">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="blue" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5858 16L10.3431 11.7574C9.95261 11.3668 9.95261 10.7337 10.3431 10.3431C10.7337 9.95262 11.3668 9.95262 11.7573 10.3431L16 14.5858L20.2426 10.3431C20.6332 9.95262 21.2663 9.95262 21.6568 10.3431C22.0474 10.7337 22.0474 11.3668 21.6568 11.7574L17.4142 16L21.6568 20.2426C22.0474 20.6332 22.0474 21.2663 21.6568 21.6569C21.2663 22.0474 20.6332 22.0474 20.2426 21.6569L16 17.4142L11.7573 21.6569C11.3668 22.0474 10.7337 22.0474 10.3431 21.6569C9.95261 21.2663 9.95261 20.6332 10.3431 20.2426L14.5858 16Z" fill="#222222"/>
                </svg>
            </div>
            <div class="iframe-inner">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
import { useAppStore } from '@/stores/App.store'

export default {
    components: {},
    props: {},
    data() {
        return {
            load: true
        }
    },
    setup() {
        const appStore = useAppStore();
        return { appStore }
    },
    methods: {
        closeIframe(){
            this.appStore.resetModal();
        }
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

        .iframe-exit{
            width: 100%;
            height: 10vh;
            padding-top: 2.5vh;
            @include flexContainer($justify: center);

            svg{
                margin: 0 auto;
                display: block;
            }
        }

        .iframe-inner{
            z-index: 101;
            border-radius: $borderRadius-2;
            cursor: default;
            pointer-events: unset;

            iframe{
                border: none;
                border-radius: $borderRadius-2;
            }
        }
    }
</style>