<template>
    <div class="description-doctor" :id="'doctorDescription-'+doctor.id">
        <template v-if="responsiveDisplay.tablette">
                <Collapse :selected="active">
                    <template v-slot:header>
                        <div class="description-collapse description-collapse--title">
                            <div class="description-aside">
                                <h3>Docteur {{doctor.firstName + ' ' + doctor.lastName}}</h3>
                            </div>
                            <div class="description-content description-title-inline">
                                <p>Informations</p>
                                <p ref="collapseIcon">+</p>
                            </div>
                        </div>
                    </template>
                    <template v-slot:content>
                        <div class="description-collapse description-collapse--content">
                            <div class="description-aside"></div>
                            <div class="description-content">
                                <div class="description-item">
                                    <p class="description-item--title">Spécilités</p>
                                    <div class="description-item--content description-subitem-specialities">
                                        <div class="description-subitem-specialities--item" v-for="(speciality, index) in doctor.specialities" :key="index">
                                            <p>{{speciality.name}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="doctor.presentation" class="description-item">
                                    <p class="description-item--title">Présentation</p>
                                    <p class="description-item--content">{{doctor.presentation}}</p>
                                </div>
                                <div v-if="doctor.vitalCard" class="description-item">
                                    <p class="description-item--title">Carte vitale</p>
                                    <p class="description-item--content">{{doctor.vitalCard}}</p>
                                </div>
                                <div v-if="doctor.conventionType" class="description-item">
                                    <p class="description-item--title">Conventionné secteur</p>
                                    <p class="description-item--content">{{doctor.conventionType}}</p>
                                </div>
                                <div v-if="doctor.tiersPayant" class="description-item">
                                    <p class="description-item--title">Tiers payant</p>
                                    <p class="description-item--content">{{doctor.tiersPayant}}</p>
                                </div>
                                <div v-if="doctor.diplomes" class="description-item">
                                    <p class="description-item--title">Diplômes nationaux et universitaires</p>
                                    <div class="description-item--content description-subitem-list">
                                        <p class="description-subitem" v-for="(diplome, index) in doctor.diplomes" :key="index">{{diplome}}</p>
                                    </div>
                                </div>
                                <div v-if="doctor.RPPS" class="description-item">
                                    <p class="description-item--title">Numéro RPPS</p>
                                    <p class="description-item--content">{{doctor.RPPS}}</p>
                                </div>
                            </div>
                        </div>
                    </template>
                </Collapse>
        </template>
        <template v-else>
            <Collapse :selected="active">
                <template v-slot:header>
                    <div class="description-collapse description-collapse--title">
                        <h3>Dr {{doctor.firstName + ' ' + doctor.lastName}}</h3>
                        <p ref="collapseIcon">+</p>
                    </div>
                </template>
                <template v-slot:content>
                    <div class="description-collapse description-collapse--content">
                        <div class="description-content">
                            <div class="description-item">
                                <p class="description-item--title">Spécilités</p>
                                <div class="description-item--content description-subitem-specialities">
                                    <div class="description-subitem-specialities--item" v-for="(speciality, index) in doctor.specialities" :key="index">
                                        <p>{{speciality.name}}</p>
                                    </div>
                                </div>
                            </div>
                            <div v-if="doctor.presentation" class="description-item">
                                <p class="description-item--title">Présentation</p>
                                <p class="description-item--content">{{doctor.presentation}}</p>
                            </div>
                            <div v-if="doctor.vitalCard" class="description-item">
                                <p class="description-item--title">Carte vitale</p>
                                <p class="description-item--content">{{doctor.vitalCard}}</p>
                            </div>
                            <div v-if="doctor.conventionType" class="description-item">
                                <p class="description-item--title">Conventionné secteur</p>
                                <p class="description-item--content">{{doctor.conventionType}}</p>
                            </div>
                            <div v-if="doctor.tiersPayant" class="description-item">
                                <p class="description-item--title">Tiers payant</p>
                                <p class="description-item--content">{{doctor.tiersPayant}}</p>
                            </div>
                            <div v-if="doctor.diplomes" class="description-item">
                                <p class="description-item--title">Diplômes nationaux et universitaires</p>
                                <div class="description-item--content description-subitem-list">
                                    <p class="description-subitem" v-for="(diplome, index) in doctor.diplomes" :key="index">{{diplome}}</p>
                                </div>
                            </div>
                            <div v-if="doctor.RPPS" class="description-item">
                                <p class="description-item--title">Numéro RPPS</p>
                                <p class="description-item--content">{{doctor.RPPS}}</p>
                            </div>
                        </div>
                    </div>
                </template>
            </Collapse>
        </template>
    </div>

</template>

<script>

import { Collapse } from '@/components/layer.components'
import { useDataStore } from '@/stores/Data.store'

export default {
    name: 'DoctorDescription',
    components: {
        Collapse
    },
    props: {
        doctor: Object,
        doctorSelected: Number
    },
    data() {},
    setup() {
        const dataStore = useDataStore();
        return { dataStore }
    },
    computed: {
        active: function(){
            return this.doctor.id === this.dataStore.activeDoctor
        }
    },
    methods: {
    },
    mounted() {
        let ldJSONScript = document.createElement('script')
        ldJSONScript.type = 'application/ld+json'
        ldJSONScript.id = 'schema-' + this.doctor.id
        ldJSONScript.text = JSON.stringify(this.doctor, undefined, 2)
        document.head.appendChild(ldJSONScript)
    },
    unmounted() {
        const ldJSONScript = document.getElementById('schema-' + this.doctor.id);
        document.head.removeChild(ldJSONScript);
    },
}
</script>

<style lang="scss" scoped>
    $padding: 2.4rem;

    .description-doctor{
        width: 100%;
        background: linear-gradient(90deg, #232526 0%, #414345 100%);
        border-radius: $borderRadius-1;
        margin-bottom: .4rem;

        .description-collapse{
            @include flexContainer;
            width: 100%;

            &.description-collapse--title{
                padding: $margin-5 $margin-5;
                cursor: pointer;
            }

            &.description-collapse--content{
                padding: $margin-4 $margin-5;
                padding-top: 0;
            }

            .description-content{

                .description-item{
                    border-top: 1px solid $color-grey-2;
                    padding: calc($padding/2) 0;

                    p{
                        @include font-size-4;
                        @include font-bold;
                    }

                    &:last-child{
                        border-bottom: 1px solid $color-grey-2;
                    }

                    &--title{
                        color: $color-grey-5;
                    }

                    &--content{
                        &.description-subitem-list{
                            padding: 0;

                            .description-subitem {
                                padding: calc($padding/2) 0;
                                border-bottom: 1px solid $color-grey-2;

                                &:first-child{
                                    padding-top: 0;
                                }
                                
                                &:last-child{
                                    border-bottom: none;
                                    padding-bottom: 0;
                                }
                            }
                        }

                        &.description-subitem-specialities{
                            .description-subitem-specialities--item{
                                border: 1px solid;
                                border-image-source: linear-gradient(90deg, #232526 0%, #414345 100%);
                                
                                p{
                                    text-transform: uppercase;
                                    @include font-bold;
                                    @include font-size-normal;
                                }
                            }
                        }
                    }
                }
            }
        }

        .description-title-inline {

            p{
                @include font-size-3;
            }

            &:last-child{
                text-align: right;
            }
        }
    }

    @media screen and (max-width: $breackpoint-tablette){
        .description-doctor{
            .description-collapse{

                &.description-collapse--title{
                    padding: $margin-3;
                    justify-content: space-between;
                    align-items: center;
                }

                &.description-collapse--content{}
                
                .description-aside{}

                .description-content{
                    .description-item{
                        p{}

                        &:last-child{}

                        &--title{
                            color: $color-grey-3;
                        }

                        &--content{
                            &.description-subitem-list{
                                .description-subitem {
                                    &:first-child{}
                                    &:last-child{}
                                }
                            }

                            &.description-subitem-specialities{
                                .description-subitem-specialities--item{
                                    p{}
                                }
                            }
                        }
                    }
                }
            }

            .description-title-inline {
                p{}
                &:last-child{}
            }
        }
    }
    @media screen and (min-width: $breackpoint-tablette){
        .description-doctor{
            width: 100%;
            background: linear-gradient(90deg, #232526 0%, #414345 100%);
            border-radius: $borderRadius-1;
            margin-bottom: .4rem;

            .description-collapse{
                display: flex;
                width: 100%;

                &.description-collapse--title{
                    padding: $margin-1;
                    cursor: pointer;
                }

                &.description-collapse--content{
                    padding: $margin-2;
                    padding-top: 0;
                }
                
                .description-aside{
                    width: calc(24% - 2.4rem);
                    margin-right: $padding;
                }

                .description-content{
                    width: calc(75% - 1.2rem);

                    .description-item{
                        display: flex;
                        border-top: 1px solid $color-grey-2;
                        padding: calc($padding/2) 0;

                        p{
                            @include font-size-4;
                            @include font-bold;
                        }

                        &:last-child{
                            border-bottom: 1px solid $color-grey-2;
                        }

                        &--title{
                            width: 20%;
                            color: $color-grey-5;
                        }

                        &--content{
                            width: 80%;

                            &.description-subitem-list{
                                padding: 0;

                                .description-subitem {
                                    padding: calc($padding/2) 0;
                                    border-bottom: 1px solid $color-grey-2;

                                    &:first-child{
                                        padding-top: 0;
                                    }
                                    
                                    &:last-child{
                                        border-bottom: none;
                                        padding-bottom: 0;
                                    }
                                }
                            }

                            &.description-subitem-specialities{
                                display: grid;
                                grid-template-columns: repeat(3, 1fr);
                                grid-gap: 10px;

                                .description-subitem-specialities--item{
                                    align-items: center;
                                    padding: 4px 24px;

                                    background: #353535;
                                    border-radius: $borderRadius-3;

                                    border: 1px solid;
                                    border-image-source: linear-gradient(90deg, #232526 0%, #414345 100%);
                                    
                                    p{
                                        text-align: center;
                                        text-transform: uppercase;
                                        @include font-bold;
                                        @include font-size-normal;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .description-title-inline {
                display: flex;
                justify-content: space-between;
                width: 100%;

                p{
                    @include font-size-3;
                }

                &:last-child{
                    text-align: right;
                }
            }
        }
    }


</style>