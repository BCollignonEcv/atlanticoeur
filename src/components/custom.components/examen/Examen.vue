<template>
    <div class="examen_item" @mouseover="scaleExamen()">
        <h5 class="examen_item-title">{{examen.name}}</h5>
        <!-- <div v-show="opened" class="examen_item-description">{{examen.description}}</div> -->
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
            opened: false
        }
    },
    methods: {
        scaleExamen(){
            if(this.opened != true){
                const paddingElement = parseFloat(window.getComputedStyle(this.$el, null).getPropertyValue('padding-top'))
                this.$el.style.paddingTop = 3* paddingElement + 'px';
                this.$el.style.paddingBottom = 3* paddingElement + 'px';
                this.opened = true;
            }
        }
    },
    created() {
    },
    mounted () {
        if(this.animationPadding){
            this.$el.style.paddingTop = this.animationPadding + 'vh';
            this.$el.style.paddingBottom = this.animationPadding + 'vh';
        }
    },
}
</script>

<style lang="scss" scoped>
    
</style>