<template>
    <figure>
        <figcaption class="photo_description">
            <div class="l_container">
                <p class="l_col s2">{{photo.id + 1}}</p>
                <p class="l_col s10 align-right">{{photo.name}}</p>
            </div>
        </figcaption>
        <img class="slide_img" :src="getImgUrl()" :alt="getImgAlt()" srcset="">
    </figure>
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
            return require('@/assets/img/'+ this.photo.pathImg)
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
        color: $color-neutral;
        
        &>div{
            border-top: 1px solid $color-grey-6;
            border-bottom: 1px solid $color-grey-6;
            padding: $margin-6 0;
        }
    }

    img.slide_img{
        height: 66vh;
        border-radius: $borderRadius-1;

        @media screen and (max-width: $breackpoint-mobile){
            height: auto;
            width: 100%;
        }
    }


</style>