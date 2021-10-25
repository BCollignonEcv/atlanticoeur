<template>
    <div class="examen_item">
        <div class="examen_item-floating" @mouseover="scaleExamen()">
            <h5 class="examen_item-title">{{examen.name}}</h5>
            <!-- <div v-show="opened" class="examen_item-description">{{examen.description}}</div> -->
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    props: {
        dataExamen: Object,
        animationPadding: Number
    },
    data() {
        return {
            examen: this.dataExamen,
            opened: false
        }
    },
    methods: {
        scaleExamen(){
            if(this.opened != true){
                const element = this.$el.getElementsByClassName('examen_item-floating')[0];
                const paddingElement = parseFloat(window.getComputedStyle(element, null).getPropertyValue('padding-top'))
                console.log('2' + paddingElement)
                element.style.paddingTop = 2* paddingElement + 'px';
                element.style.paddingBottom = 2* paddingElement + 'px';
                this.opened = true;
            }
        }
    },
    created() {
    },
    mounted () {
        const element = this.$el.getElementsByClassName('examen_item-floating')[0];
        element.style.paddingTop = this.animationPadding + 'vh';
        element.style.paddingBottom = this.animationPadding + 'vh';
    },
}
</script>

<style lang="scss" scoped>
    
</style>