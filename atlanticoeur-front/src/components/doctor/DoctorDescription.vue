<template>
    <div class="description-doctor" :id="'doctorDescription'+doctor.id">
        <div class="description-collapse description-collapse--title" @click="collapse">
            <div class="description-aside">
                <h2>Docteur {{doctor.firstName + ' ' + doctor.lastName}}</h2>
            </div>
            <div class="description-content description-title-inline">
                <p>Informations</p>
                <p v-if="isSelected">{{state.open}}</p>
                <p v-else>{{state.close}}</p>
            </div>
        </div>
        <transition 
            name="collapse"
            @enter="enter"
            @after-enter="afterEnter"
            @leave="leave">
            <div v-if="isSelected" ref="descriptionContent" class="description-collapse description-collapse--content">
                <div class="description-aside"></div>
                <div class="description-content">
                    <div class="description-item">
                        <p class="description-item--title">Spécilités</p>
                        <div class="description-item--content description-subitem-specialities">
                            <div class="description-subitem-specialities--item" v-for="(speciality, index) in doctor.specialities" :key="index">
                                {{speciality.name}}
                            </div>
                        </div>
                    </div>
                    <div class="description-item">
                        <p class="description-item--title">Présentation</p>
                        <p class="description-item--content">{{doctor.presentation}}</p>
                    </div>
                    <div class="description-item">
                        <p class="description-item--title">Carte vitale</p>
                        <p class="description-item--content">{{doctor.vitalCard}}</p>
                    </div>
                    <div class="description-item">
                        <p class="description-item--title">Conventionné secteur</p>
                        <p class="description-item--content">{{doctor.firstName}}</p>
                    </div>
                    <div class="description-item">
                        <p class="description-item--title">Tiers payant</p>
                        <p class="description-item--content">{{doctor.tiersPayant}}</p>
                    </div>
                    <div class="description-item">
                        <p class="description-item--title">Diplômes nationaux et universitaires</p>
                        <div class="description-item--content description-subitem-list">
                            <p class="description-subitem" v-for="(diplome, index) in doctor.diplomes" :key="index">{{diplome}}</p>
                        </div>
                    </div>
                    <div class="description-item">
                        <p class="description-item--title">Numéro RPPS</p>
                        <p class="description-item--content">{{doctor.RPPS}}</p>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    name: 'DoctorDescription',
    props: {
        dataDoctor: Object,
        isSelected: Boolean
    },
    data() {
        return {
            doctor: this.dataDoctor,
            state: {"close": "+", "open": "-"}
        }
    },
    methods: {
        collapse(){
            this.$emit('event-selected', this.doctor.id)
        },
        enter(el){
            el.style.height = 'auto'
            const height = getComputedStyle(el).height
            el.style.height = 0

            getComputedStyle(el)
            setTimeout(() => {
                el.style.height = height
            })
        },
        afterEnter(el){
            el.style.height = 'auto'
        },
        leave(el){
            el.style.height = getComputedStyle(el).height
            getComputedStyle(el)
            setTimeout(() => {
                el.style.height = 0
            })
        }
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
    }
}
</script>

<style lang="scss" scoped>

    .description-doctor{
        width: 100%;
        background: linear-gradient(90deg, #232526 0%, #414345 100%);
        border-radius: 1.2rem;
        margin-bottom: .4rem;

        .description-collapse{
            display: flex;
            width: 100%;

            &.description-collapse--title{
                padding: 48px;
                cursor: pointer;
            }

            &.description-collapse--content{
                padding: 48px;
                padding-top: 0;
            }
            
            .description-aside{
                width: calc(24% - 2.4rem);
                margin-right: 2.4rem;
            }

            .description-content{
                width: calc(75% - 1.2rem);

                .description-item{
                    display: flex;
                    border-top: 1px solid var(--color-grey-2);
                    padding: 1.2rem 0;

                    p{
                        @extend .font-size-3;
                        font-weight: bold;
                    }

                    &:last-child{
                        border-bottom: 1px solid var(--color-grey-2);
                    }

                    &--title{
                        width: 20%;
                        color: var(--color-grey-7);
                    }

                    &--content{
                        width: 80%;

                        &.description-subitem-list{
                            padding: 0;

                            .description-subitem {
                                padding: 1.2rem 0;
                                border-bottom: 1px solid var(--color-grey-2);

                                &:first-child{
                                    padding-top: 0;
                                }
                                
                                &:last-child{
                                    border-bottom: none;
                                    padding-bottom: 0;
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
                @extend .font-size-2;
            }

            &:last-child{
                text-align: right;
            }
        }


        // Animation toggle collapse
        .collapse-enter-active, .collapse-leave-active {
            transition: height .5s;
            overflow: hidden;
        }

        .collapse-enter {
            height: 0;
        }
    }

</style>