<template>
    <div v-bind:class="{grid_header: type === 'header'}" class="grid_line">
        <p class="gl-8">{{link.title}}</p>
        <p class="gl-3">{{link.link}}</p>
        <p v-if="type === 'header'" class="align-right gl-1">></p>
        <p v-else class="align-right gl-1">{{link.date}}</p>
    </div>
</template>

<script>
export default {
    props: {
        dataLink: Object,
        typeLine: String
    },
    data() {
        return {
            link: this.dataLink,
            type: this.typeLine
        }
    },
    methods: {},
    mounted () {
    }
}
</script>

<style lang="scss">
</style>