<template>
    <div class="mapouter">
        <div class="gmap_canvas">
            <iframe width="100%" height="100%" id="gmap_canvas" :src="getMapScript()" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
    </div>
</template>

<script>

export default {
    components: {
    },
    props: {
        data: String
    },
    data() {
        return {
        }
    },
    methods: {
        getMapScript() {
            return this.data
        },
    },
}
</script>

<style lang="scss">
    .mapouter{
        height: 300px;
        .gmap_canvas{
            height: 100%;
            iframe{
                border-radius: $borderRadius-2;
            }
        }
    }
</style>