<template>
    <div class="c_select" @click="hover = !hover" :class="{'active': hover}" ref="select" @mouseleave="hover = false">
        <div class="select-container">
            <div class="select-header">
                <p v-if="selected" class="header-title">{{selected.value}}</p>
                <p v-else class="header-title">Trier par {{title}}</p>
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L9 9L17 1" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="select-options" v-show="hover">
                <p class="select-option" @click="selected=null; $emit('select', null)">Tous</p>
                <p 
                v-for="(option, index) in options" :key="index" 
                :data="option" 
                :value="option.id" 
                :class="{'selected': selected === index}"
                class="select-option"
                @click="selected={id: option.id, value: option.name}; $emit('select', selected.id)"
                >
                    {{option.name}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        data: Object,
        title: String
    },
    data() {
        return {
            options: this.data,
            selected: null,
            hover: false,
        }
    },
    created() {},
    computed: {},
    mounted() {},
    methods: {},

}
</script>

<style lang="scss" scoped>
    .c_select{
        position: relative;

        .select-container{
            .select-header{
                @include flexContainer($justify: space-between, $align: center);
                @include hover;

                .header-title{
                    @include font-size-2;
                    color: $color-grey-1;
                    margin-right: 1.5ch;
                    white-space: nowrap;
                }

                svg{
                    transition: all .5s ease;
                }
            }

            .select-options{
                padding-top: $margin-5;
                border-bottom-left-radius: $borderRadius-2;
                border-bottom-right-radius: $borderRadius-2;

                .select-option{
                    @include hoverLink;
                    @include font-size-3;
                    color: $color-grey-4;
                    padding: $margin-6;
                    border-bottom: 1px solid $color-grey-4;
                    white-space: nowrap;
                }

                .selected{
                    color: $color-grey-1;
                }
            }
        }

        &.active{
            .select-container{
                position: absolute;
                display: block;
                right: 0;
                padding: $margin-4;
                top: -$margin-4;
                border-radius: $borderRadius-2;
                background-color: $color-neutral;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0, 0.04);

                .select-header{
                    .header-title{
                        color: $color-primary;
                    }

                    svg{
                        transition: all .5s ease;
                        transform: rotate(180deg);
                    }
                }

                .select-options{
                }
            }
        }
    }
</style>