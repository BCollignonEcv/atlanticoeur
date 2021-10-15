<template>
    <div :id="'slide-'+speciality.id">
        <div class="flip_card">
            <div class="flip_card-inner">
                <div class="flip_card-front">
                    <figure class="flip_card-front">
                        <figcaption class="slide-overlay">{{speciality.discover}}</figcaption>
                        <img class="slide-img" :src="getImgUrl()" :alt="getImgAlt()" srcset="">
                    </figure>
                </div>
                <div class="flip_card-back">
                </div>
            </div>
        </div>
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
    }
}
</script>

<style lang="scss">
    
</style>