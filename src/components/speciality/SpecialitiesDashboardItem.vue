<template>
    <figure class="specialities_dashboard-item">
        <img class="slide_img" :src="getImgUrl()" :alt="getImgAlt()" srcset="">
        <figcaption>{{data.name}}</figcaption>
    </figure>
</template>

<script>

export default {
    components: {
    },
    props: {
        data: Object
    },
    data() {
        return {
            
        }
    },
    methods: {
        getImgUrl() {
            return require('@/assets/img'+ this.data.pathImg)
        },
        getImgAlt() {
            return this.data.name
        }, 
    },
    mounted () {
        console.log(this.data)
    }
}
</script>

<style lang="scss" scoped>

</style>