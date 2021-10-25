<template>
    <div class="googleMap_frame" ref="googleMap" id="map"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
        <slot
            :google="google"
            :map="map"
        />
    </template>
</template>

<script>

export default {
    components: {
    },
    props: {
    },
    data() {
        return {
            key: 'AIzaSyDtLfBNknCKsV6Epp9J6MLcCVfVUn-2F5g',
            google: null,
            map: null,
            center: {lat: 46.1536445, lng: -1.166688},
            markers: {lat: 46.1735644, lng: -1.1285412}
        }
    },
    methods: {
        // initializeMap() {
        //     const mapContainer = this.$refs.googleMap
        //     this.map = new this.google.maps.Map(
        //         mapContainer, this.mapConfig
        //     )
        // }
    },
    async mounted() {
        // const googleMapApi = await GoogleMapsApiLoader({
        // apiKey: this.apiKey
        // })
        // this.google = googleMapApi
        // this.initializeMap()
    },
}
</script>

<style lang="scss">
    .googleMap_frame{
        height: 25vh;
    }
</style>