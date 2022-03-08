<template>
        <template v-if="settings.vertical">
            <div class="specialities_dashboard-item vertical">
                <div class="fakeImg_container">
                    <div class="fakeImg" :style="customStyle">
                        <p class="fakeImg-overlay">{{data.name}}</p>
                    </div>
                </div>
            </div>
        </template>
        <template v-if="settings.horizontal">
            <div class="specialities_dashboard-item horizontal">
                <div class="l_container">
                    <div class="fakeImg_container l_col s11">
                        <div class="fakeImg" :style="customStyle">
                            <p class="fakeImg-overlay">{{data.name}}</p>
                        </div>
                    </div>
                    <div class="l_col s1 graduation"></div>
                </div>
            </div>
        </template>
</template>

<script>

export default {
    components: {
    },
    props: {
        data: Object,
        settings: { 
            type: Object, 
            default: () => ({
                vertical: false, 
                horizontal: true
            }) 
        },
            
    },
    data() {
        return {
            customStyle: {
                backgroundImage: `url("${this.getImgUrl()}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }
        }
    },
    created() {
    },
    methods: {
        getImgUrl() {
            return require('@/assets/img/'+ this.data.pathImg)
        },
        getImgAlt() {
            // return this.data.name
            return 'toto'
        }, 
    },
    mounted () {
    }
}
</script>

<style lang="scss" scoped>
    @media screen and (max-width: $breackpoint-mobile) {
        .specialities_dashboard-item{
            &.horizontal{
                .l_container{
                    min-height: 50vh;

                    
                    .fakeImg_container{
                        min-height: 50vh;
                        border: 1px solid $color-grey-6; 
                        background-color: $color-neutral;
                        border-radius: $borderRadius-1;

                        .fakeImg{
                            min-height: 50vh;
                            padding: $margin-1;

                            p{
                                color: $color-grey-1;
                            }
                        }
                    }
                }
            }
        }
    }
</style>