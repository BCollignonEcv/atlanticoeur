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
    .grid {
        padding-top: 4.6rem;

        .grid_header{
            border-top: 1px solid $color-grey-6;
            border-bottom: 1px solid $color-grey-6;
            padding: $font-extraSmall 0 $lineHeight-large 0;

            &.grid_line {
                p{
                    @extend .font-size-3;
                }
            }
        }

        .grid_content {
            .grid_line{
                &:nth-child(1){
                    border-top: none;
                }
            }
        }

        .grid_line {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-gap: 10px;
            border-top: 1px solid $color-grey-6;
            padding: $font-small 0;

            p{
                @extend .font-size-1;
                font-weight: bold;

                &.gl-1{
                    grid-column: 12 / 12;
                    grid-row: 1;
                }

                &.gl-3{
                    grid-column: 8 / 11;
                    grid-row: 1;
                }

                &.gl-8{
                    grid-column: 1 / 8;
                    grid-row: 1;
                }
            }
        }
    }
    
</style>