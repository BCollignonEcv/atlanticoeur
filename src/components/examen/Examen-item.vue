<template>
    <div class="examen_item" :class="{ 'active': opened }">
        <div class="examen_item-floating" @mouseover="opened = true">
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
        animatePadding: Number
    },
    data() {
        return {
            examen: this.dataExamen,
            opened: false
        }
    },
    methods: {
    },
    mounted () {
    },
}
</script>

<style lang="scss" scoped>
    .examen_item.active{
        padding: random(5) + rem 0;
    }
</style>