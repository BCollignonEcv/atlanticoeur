<template>
    <div :id="'slide-'+photo.id">
        <figure>
            <figcaption class="photo_description">
                <div class="l_container">
                    <p class="l_col s2">{{photo.id}}</p>
                    <p class="l_col s10 align-right">{{photo.name}}</p>
                </div>
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

<style lang="scss" scoped>
    .photo_description{
        position: absolute;
        left: 0;
        bottom: 0;
        padding: $margin-4;
        width: 100%;
        
        &>div{
            border-top: 1px solid $color-grey-6;
            border-bottom: 1px solid $color-grey-6;
            padding: $margin-6 0;
        }
    }
</style>