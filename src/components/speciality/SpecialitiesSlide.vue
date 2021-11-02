<template>
    <div :id="'slide-'+speciality.id" @click="descriptionShow = !descriptionShow">
        <figure>
            <figcaption class="slide_overlay-title">{{discover}}</figcaption>
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
    computed: {
        discover: function () {
            if(this.isVowel((this.dataSpeciality.name).charAt(0))){
                return `Qu'est ce que \nl'${this.dataSpeciality.name} ?`
            }else{
                return `Qu'est ce que la \n${this.dataSpeciality.name} ?`
            }
        }
    },
    methods: {
        getImgUrl() {
            return require('@/assets/img/'+ this.speciality.pathImg)
        },
        getImgAlt() {
            return this.speciality.name
        },
        isVowel(letter){
            return letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" || letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U"; 
        }
    },
    mounted() {
    },
}
</script>

<style lang="scss">
    
</style>