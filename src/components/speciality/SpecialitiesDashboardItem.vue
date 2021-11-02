<template>
        <template v-if="settings.vertical">
            <div class="specialities_dashboard-item vertical">
                <figure>
                    <img class="img" :src="getImgUrl()" :alt="getImgAlt()" srcset="">
                    <figcaption>{{data.name}}</figcaption>
                </figure>
            </div>
        </template>
        <template v-if="settings.horizontal">
            <div class="specialities_dashboard-item horizontal">
                <div class="l_container">
                    <div class="l_col s10 fakeImg" :style="customStyle">
                        <p class="fakeImg-overlay">{{data.name}}</p>
                    </div>
                    <div class="l_col s2 graduation"></div>
                </div>
            </div>
        </template>
</template>

<script>

export default {
    components: {
    },
    props: {
        data: Object,
        settings: { 
            type: Object, 
            default: () => ({
                vertical: false, 
                horizontal: true
            }) 
        },
            
    },
    data() {
        return {
            customStyle: {
                backgroundImage: `url("${this.getImgUrl()}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }
        }
    },
    created() {
    },
    methods: {
        getImgUrl() {
            return require('@/assets/img/'+ this.data.pathImg)
        },
        getImgAlt() {
            // return this.data.name
            return 'toto'
        }, 
    },
    mounted () {
    }
}
</script>

<style lang="scss" scoped>

</style>