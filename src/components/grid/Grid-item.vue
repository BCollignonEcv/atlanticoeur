<template>
    <template v-if="typeLine === 'header'">
        <div class="grid_line grid_header">
            <p class="gl-8">{{dataLink.title}}</p>
            <p class="gl-3">{{dataLink.link}}</p>
            <p class="align-right gl-1">
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L9 9L17 1" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </p>
        </div>
    </template>
    <template v-else>
        <a :href="dataLink.link" target="_blank" rel="noopener noreferrer" class="grid_line">
            <p class="gl-8">{{dataLink.title}}</p>
            <p class="gl-3">{{dataLink.category}}</p>
            <p class="align-right gl-1">{{dataLink.date}}</p>
        </a> 
    </template>
</template>

<script>
export default {
    props: {
        dataLink: Object,
        typeLine: String
    },
    methods: {},
    mounted () {
    }
}
</script>

<style lang="scss">
</style>