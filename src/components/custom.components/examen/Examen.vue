<template>
    <div class="examen_item" :style="styleObject" :class="classObject" @mouseover="scale()">
        <h5 class="examen_item-title">{{examen.name}}</h5>
        <Transition name="slide-fade">
            <div v-show="isActive" class="examen_item-description">{{examen.description}}</div>
        </Transition>
    </div>
</template>

<script>
export default {
    components: {
    },
    props: {
        data: Object,
        animationPadding: Number
    },
    data() {
        return {
            examen: this.data,
            isActive: false,
            defaultPadding: 30,
        }
    },
    computed: {
        styleObject() {
            return {
                paddingTop: this.defaultPadding +'px',
                paddingBottom: this.defaultPadding +'px',
            }
        },
        classObject() {
            return {
                active: this.isActive
            }
        }
    },
    methods: {
        scale(){
            this.isActive = true;
            if(this.responsiveDisplay.desktop){
                this.defaultPadding = 60 + 30 * ((this.examen.id+1) % 3);
            }
        }
    },
    created() {
    },
    mounted () {

    },
}
</script>

<style lang="scss" scoped>

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>