<template>
    <div class="specialities_dashboard">
        <div class="l_container">
            <div class="l_col l_leftSide">
                <h3>Spécialités exercées</h3>
                <SpecialitiesDashboardItem :data="specialities.angiologie.subcategory[0]" />
            </div>
            <div class="l_col l_rightSide">
                <div class="l_container-scale">
                    <SpecialitiesDashboardItem :data="specialities.cardiologie.subcategory[0]" />
                    <SpecialitiesDashboardItem :data="specialities.cardiologie.subcategory[1]" />
                    <SpecialitiesDashboardItem :data="specialities.cardiologie.subcategory[2]" />
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
    methods: {
        
    },
    mounted () {
    }
}
</script>

<style lang="scss">
    .specialities_dashboard{
        background-color: $color-grey--50;
        border-radius: $borderRadius-1;
        padding: 5vh;

        .l_leftSide{
            position: relative;
            h3{
                color: $color-grey-1--50;
            }

            .specialities_dashboard-item{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 6px;
            }
        }

        figure{
            position: relative;

            figcaption{
                color: $color-neutral;
                text-shadow: 0px 2px 35px rgba(34, 34, 34, 0.75);
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                padding: $margin-3;
                @include font-size-3;
            }
        }

        .l_container-scale{
            display: flex;
            flex-direction: column;
        }
    }
</style>