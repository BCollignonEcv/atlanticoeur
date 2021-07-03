<template>
    <div class="description-doctor">
        <div class="description-flex description-collapse--title" @click="selectDescription">
            <div class="description-aside">
                <h2>Docteur {{doctor.firstName + ' ' + doctor.lastName}}</h2>
            </div>
            <div class="description-content description-title-inline">
                <p>Informations</p>
                <p>-</p>
            </div>
        </div>
        <transition name="collapse">
            <div v-if="selected" class="description-flex description-collapse--content">
                <div class="description-aside"></div>
                <div class="description-content">
                    <div class="description-text-inline description-item">
                        <p class="description-text-inline--title">Spécilités</p>
                        <div class="description-text-inline--content">
                            <div v-for="(speciality, index) in doctor.speciality" :key="index">
                                {{speciality.name}}
                            </div>
                        </div>
                    </div>
                    <div class="description-text-inline description-item">
                        <p class="description-text-inline--title">Présentation</p>
                        <p class="description-text-inline--content">{{doctor.presentation}}</p>
                    </div>
                    <div class="description-text-inline description-item">
                        <p class="description-text-inline--title">Carte vitale</p>
                        <p class="description-text-inline--content">{{doctor.vitalCard}}</p>
                    </div>
                    <div class="description-text-inline description-item">
                        <p class="description-text-inline--title">Conventionné secteur</p>
                        <p class="description-text-inline--content">{{doctor.firstName}}</p>
                    </div>
                    <div class="description-text-inline description-item">
                        <p class="description-text-inline--title">Tiers payant</p>
                        <p class="description-text-inline--content">{{doctor.tiersPayant}}</p>
                    </div>
                    <div class="description-text-inline description-item">
                        <p class="description-text-inline--title">Diplômes nationaux et universitaires</p>
                        <div class="description-text-inline--content">
                            <p v-for="(diplome, index) in doctor.diplomes" :key="index">{{diplome}}</p>
                        </div>
                    </div>
                    <div class="description-text-inline description-item">
                        <p class="description-text-inline--title">Numéro RPPS</p>
                        <p class="description-text-inline--content">{{doctor.RPPS}}</p>
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
        doctorData: Object,
        isSelected: Boolean
    },
    data() {
        return {
            doctor: this.doctorData,
            selected: this.isSelected
        }
    },  
    methods: {
        selectDescription(){
            this.selected = !this.selected
            this.$emit('selected', this.doctor.id)
        }
    }  
}
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/_variables.scss";

    .description-doctor{
        width: 100%;
        background: linear-gradient(90deg, #232526 0%, #414345 100%);
        border-radius: 1.2rem;
        margin-bottom: .4rem;

        .description-flex{
            display: flex;
            width: 100%;

            .description-aside{
                width: calc(24% - 2.4rem);
                margin-right: 2.4rem;
            }

            .description-content{
                width: calc(75% - 1.2rem)
            }
        }

        .description-item{
            border-top: 1px solid var(--color-grey-2);
            padding: 1.2rem 0;
        }

        .description-text-inline{
            display: flex;

            &--title{
                width: 20%;
            }

            &--content{
                width: 80%;
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

        .description-collapse--title{
            padding: 48px;
        }

        .description-collapse--content{
            padding: 48px;
            padding-top: 0;
            transition: all .3s ease-out;
        }

        .collapse-enter-active, .collapse-leave-active {
            opacity: 1;
        }

        .collapse-enter, .collapse-leave-to {
            opacity: 0;
        }
    }

</style>