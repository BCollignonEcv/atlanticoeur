<template>
    <div class="doctolib_iframe">
        <iframe scrolling="no" :src="getDoctolibUrl()" style="height:100%; width: 100%" allowpaymentrequest></iframe>
    </div>
</template>

<script>

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
    
    .doctolib_iframe{
        height: 90vh;
        width: 80vw;
        margin: 5vh 10vw;
    }
</style>