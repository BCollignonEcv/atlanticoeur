<template>
    <div class="wrapper-content">
        <div class="grid">
            <grid-item :type-line="'header'" :data-link="links[0].header"/>
            <div class="grid_content">
                <grid-item
                    v-for="(link, index) in links[0].content" :key="index" 
                    :data-link="link"
                    :selected="false"
                />
            </div>
        </div>
    </div>
</template>

<script>

import GridItem from '@/components/grid/Grid-item'

export default {
    components: {
        'grid-item': GridItem
    },
    props: {
        dataLinks: Object
    },
    data() {
        return {
            links: this.dataLinks
        }
    },
    methods: {},
    mounted () {
        console.log(this.links[0])
    }
}
</script>

<style lang="scss">
    
</style>