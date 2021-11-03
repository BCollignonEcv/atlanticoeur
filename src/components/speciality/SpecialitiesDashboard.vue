<template>
    <div class="specialities_dashboard">
        <div class="l_container">
            <div class="l_col l_leftSide">
                <h3>Spécialités exercées</h3>
                <div class="specialities_dashboard-container">
                    <SpecialitiesDashboardItem
                        v-for="(subcategory, index) in splitedSpecialities('vertical')" :key="index" 
                        :data="subcategory"
                        :settings="{vertical: true}"
                    />
                </div>
            </div>
            <div class="l_col l_rightSide">
                <div class="l_container-horizontal specialities_dashboard-container">
                    <SpecialitiesDashboardItem
                        v-for="(subcategory, index) in splitedSpecialities('horizontal')" :key="index" 
                        :data="subcategory"
                        :settings="{horizontal: true}"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SpecialitiesDashboardItem from '@/components/speciality/SpecialitiesDashboardItem'

export default {
    components: {
        SpecialitiesDashboardItem,
    },
    props: {
        specialities: Object
    },
    data() {
        return {
        }
    },
    computed: {
    },
    methods: {
        splitedSpecialities: function(type){
            let tmp = [];
            if(type === 'vertical'){
                Object.entries(this.specialities).forEach((element) => {
                    if(element[1].category === 1){
                        tmp.push(element[1])
                    }
                });
            }else if(type === 'horizontal'){
                Object.entries(this.specialities).forEach((element) => {
                    if(element[1].category === 0){
                        tmp.push(element[1])
                    }
                });
            }
            return tmp;
        }
    },
    mounted () {
    }
}
</script>

<style lang="scss">
    $specialitiesDashboardHeight: 60vh;

    .specialities_dashboard{
        background-color: $color-grey--50;
        border-radius: $borderRadius-1;
        padding: $margin-1 0 $margin-1 $margin-1;
        margin-right: -$wrapper-global-margin;

        h3{
            color: $color-grey-1;
        }

        .specialities_dashboard-container{
            height: $specialitiesDashboardHeight;

            div.specialities_dashboard-item{
                @include hoverFull;
                transition: all .5s ease;

                .fakeImg_container{
                    overflow: hidden;
                    background-color: $color-grey-6;
                    border-radius: $borderRadius-2;
                    
                    .fakeImg{
                        padding: $margin-6;
                        width: 100%;
                        height: 100%;
                        
                        .fakeImg-overlay{
                            color: $color-neutral;
                            text-shadow: 0px 2px 35px rgba(34, 34, 34, 0.75);
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            padding: $margin-3;
                            @include font-size-3;
                            @include hoverLink;
                        }
                    }
                }
                
                &.vertical{
                    @include flexContainer($orientation: column, $justify: center);
                    height: 100%;
                    margin-right: $margin-6*2;
                    margin-top: -$font-large;

                    .fakeImg_container{
                        width: 60%;
                        height: 60%;
                        align-self: flex-end;

                        .fakeImg{
                            &:hover{
                                transform: scale(1.2);
                            }
                        }
                    }
                }

                &.horizontal{
                    flex: 1;
                    margin-bottom: $margin-6*2;

                    &:nth-of-type(2n){
                        .l_container{
                            .graduation{
                                border-color: $color-grey-1;
                            }
                        }
                    }

                    &:hover{
                        flex-grow: 2;

                        .graduation{
                            border-color: $color-primary;
                        }
                    }

                    &>.l_container{
                        height: 100%;

                        .graduation{
                            height: 100%;
                            border-top: 1px solid $color-neutral;
                            border-bottom: 1px solid $color-neutral;
                            margin-left: $margin-3;
                            margin-right: $margin-3;
                        }
                    }
                }
            }

        }
    }
</style>