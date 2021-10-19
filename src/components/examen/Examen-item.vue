<template>
    <div class="examen_item" @mouseover="opened = true">
        <h5 class="examen_item-title">{{examen.name}}</h5>
        <div v-show="opened" >{{examen.description}}</div>
    </div>
</template>

<script>
export default {
    components: {
    },
    props: {
        dataExamen: Object
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
    }
}
</script>

<style lang="scss">
    .examen_item-title{
        width: 100%;
        text-align: center;
        margin: 0;
    }
</style>