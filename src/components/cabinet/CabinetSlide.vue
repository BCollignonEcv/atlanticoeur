<template>
    <div :id="'slide-'+photo.id">
        <figure>
            <figcaption class="slide_overlay-description">
                <p>{{photo.description}}</p>
            </figcaption>
            <img class="slide_img" :src="getImgUrl()" :alt="getImgAlt()" srcset="">
        </figure>
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
            photo: this.data
        }
    },
    methods: {
        getImgUrl() {
            return require('@/assets/img'+ this.photo.pathImg)
        },
        getImgAlt() {
            return this.photo.name
        },
    },
    mounted() {
    },
}
</script>

<style lang="scss">
    
</style>