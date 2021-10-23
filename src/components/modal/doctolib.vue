<template>
    <transition appear name="fade">
        <div class="iframe-container" @click="closeIframe()">
            <div class="iframe-inner">
                <div class="iframe-exit" @click="closeIframe()">
                    <span>Fermer</span>
                </div>
                <iframe scrolling="no" :src="getDoctolibUrl()" style="height:100%; width: 100%" allowpaymentrequest></iframe>
                <!-- <script src="https://www.doctolib.fr:443/js/iframeResizer.js" nonce="rDdvt/JlFgaqX9MJ2R58yg=="></script> -->
                <!-- <script nonce="rDdvt/JlFgaqX9MJ2R58yg==">iFrameResize()</script> -->
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
            load: true
        }
    },
    methods: {
        getDoctolibUrl() {
            return this.doctor.doctolib;
        },
        closeIframe(){
            this.$emit('close');
        },
    },
    mounted() {
        let doctolibScript1 = document.createElement('script')
        doctolibScript1.setAttribute('src', 'https://www.doctolib.fr:443/js/iframeResizer.js')
        doctolibScript1.setAttribute('nonce', 'rDdvt/JlFgaqX9MJ2R58yg==')
        document.head.appendChild(doctolibScript1)
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
            width: 80vw;
            height: 90vh;
            margin: 5vh 10vw;
            position: relative;
            background-color: $color-neutral;
            z-index: 101;
            border-radius: $borderRadius-2;
            cursor: default;
            
            .iframe-exit{
                position: absolute;
                top: 24px;
                right: 24px;
                cursor: pointer;
                color: $color-primary;
            }

            iframe{
                border: none;
                border-radius: $borderRadius-2;
            }
        }
    }
</style>