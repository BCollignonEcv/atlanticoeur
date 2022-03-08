<template>
    <div :id="'slide-'+speciality.id" @click="descriptionShow = !descriptionShow" class="slide">
        <figure>
            <figcaption class="slide_overlay-title">
                <h3>{{discover}}</h3>
                <transition appear name="fade">
                    <p v-show="descriptionShow" >{{speciality.description}}</p>
                </transition>
            </figcaption>
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

<style lang="scss" scoped>
    .swiper-slide{
        .slide{
            background-color: $color-grey-6;
            border-radius: $borderRadius-1;

            
            .slide_img{
                width: 100%;
                cursor: pointer;
            }

            .slide_overlay-title{
                position: absolute;
                top: 0;
                left: 0;
                padding: $margin-3;

                h3{
                    padding-bottom: $margin-5;
                }

                h3, p{

                }
            }
        }
    }
</style>