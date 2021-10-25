<template>
    <div class="phone_iframe">
        <div class="l_container">
            <div class="phone_iframe-navigation l_col s2">
                <p class="navigation-item" @click="displayPhone()">Mail</p>
                <p class="navigation-item" @click="displayEmail()">Phone</p>
            </div>
            <div class="l_col s10">
                <p v-show="displayPhone">{{data.phone}}</p>
                <p v-show="displayEmail">{{data.email}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    props: {
        data: Object,
    },
    data() {
        return {
            showPhone: true,
            showEmail: false
        }
    },
    methods: {
        displayPhone(){
            this.showEmail = false;
            this.showPhone = true;
        },
        displayEmail(){
            this.showPhone = false;
            this.showEmail = true;
        },
        closeIframe(){
            this.$emit('close');
        },
    },
    mounted() {

    }
}
</script>

<style lang="scss">
    
    .phone_iframe{
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
    }
</style>