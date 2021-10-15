<template>
    <transition appear name="modal-fade">
        <div class="iframe-container">
            <div class="iframe-inner">
                <div class="iframe-exit" @click="closeIframe()">
                    <span>X</span>
                </div>
                <!-- <iframe scrolling="no" :src="getDoctolibUrl()" style="height:304px; min-height: 304px; width: 80%"></iframe> -->
                <!-- <script src="https://www.doctolib.fr:443/js/iframeResizer.js" nonce="rDdvt/JlFgaqX9MJ2R58yg=="></script>
                <script nonce="rDdvt/JlFgaqX9MJ2R58yg==">iFrameResize()</script> -->
            </div>
        </div>
    </transition>
</template>

<script>
// https://www.digitalocean.com/community/tutorials/vuejs-vue-modal-component

export default {
    components: {},
    props: {
        dataDoctor: Object,
    },
    data() {
        return {
            doctor: this.dataDoctor,
        }
    },
    methods: {
        getDoctolibUrl() {
            return this.doctor.doctolib;
        },
        closeIframe(){
            console.log("close");
            this.$emit('close');
        }
    },
    mounted() {
        // let modal = document.querySelector('.iframe-container');
        // let modalPos = modal.getBoundingClientRect();
        // modal.style.marginLeft = -modalPos.left + "px";
        // modal.style.marginTop = -modalPos.top + "px";
    }
}
</script>

<style lang="scss">
    .modal-fade-enter,
    .modal-fade-leave-to {
        opacity: 0;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity 1s ease;
    }
    
    .iframe-container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: $color-grey-1--50;
        z-index: 100;

        .iframe-inner{
            width: 100%;
            height: 100%;
            margin: 4.8rem;
            position: relative;
            background-color: $color-neutral;
            border-radius: 8px;
            z-index: 101;
            
            .iframe-exit{
                position: absolute;
                top: 8px;
                left: 8px;
                cursor: pointer;
            }
        }
    }
</style>