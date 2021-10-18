<template>
    <div>
        <template v-if="typeDescription === 'full'">
        </template>
        <template v-else>
            <div class="l_container">
                <div class="l_col l_leftSide">
                    <h3>{{cabinet.city}}</h3>
                </div>
                <div class="l_col l_rightSide">
                    <h3>{{cabinet.name}}</h3>
                    <h3>{{cabinet.address}}</h3> 
                </div>
            </div>
            <div class="cabinet-description">
                <p>{{cabinet.description}}</p>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    components: {
    },
    props: {
        cabinet: Object,
        typeDescription: String
    },
    data() {
        return {
            datacabinet: this.cabinet
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>

<style lang="scss" scoped>
    .cabinet-description {
        margin-top: 4.2rem;

        p{
            @extend .font-size-3;
        }
    }
</style>