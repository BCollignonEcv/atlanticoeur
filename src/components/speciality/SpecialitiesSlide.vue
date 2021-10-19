<template>
    <div :id="'slide-'+speciality.id" @click="descriptionShow = !descriptionShow">
        <figure>
            <figcaption class="slide_overlay-title">{{speciality.discover}}</figcaption>
            <transition appear name="fade">
                <figcaption v-show="descriptionShow" class="slide_overlay-description">
                    <p>{{speciality.description}}</p>
                </figcaption>
            </transition>
            <img class="slide_img" :src="getImgUrl()" :alt="getImgAlt()" srcset="">
        </figure>
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        dataSpeciality: Object,
    },
    data() {
        return {
            speciality: this.dataSpeciality,
            descriptionShow: false
        }
    },
    methods: {
        getImgUrl() {
            return require('@/assets/img'+ this.speciality.pathImg)
        },
        getImgAlt() {
            return this.speciality.name
        },
    },
    mounted() {
    },
}
</script>

<style lang="scss">
    
</style>