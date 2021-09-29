<template>
    <div class="wrapper-content">
        <div class="flex-doctor">
            <grid-line
                v-for="(link, index) in links" :key="index" 
                :link-data="link"
                :selected="false"
            />
        </div>
    </div>
</template>

<script>

import gridLine from '@/components/grid/grid'

export default {
    components: {
        'grid-line': gridLine
    },
    props: {
        linksData: Object
    },
    data() {
        return {
            doctors: this.linksData,
        }
    },
    methods: {},
    mounted () {
    }
}
</script>

<style lang="scss">
    .flex-doctor{
        display: flex;
        flex-wrap: wrap;
        margin: 0 -1.2rem;
        padding: 4.8rem 0 17.2rem 0;

        & > .card-doctor{
            margin: 0 1.2rem;
            width: calc(25% - 2.4rem);
        }
    }
</style>