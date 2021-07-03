<template>
    <div class="card-doctor">
        <div v-if="type === 'big'">
            <div class="card-speciality-title">
                <p>{{doctor.specialities[0].name}}</p>
            </div>
            <img class="card-img" :src="getImgUrl(doctor.pathImg)" alt="" srcset="">
        </div>
        <div class="card-doctor-info">
            <div class="card-element">
                <div class="card-flex">
                    <h3>Docteur <span>{{ doctor.firstName + ' ' + doctor.lastName}}</span></h3>
                    <p class="card-doctor-subtitle">Secteur 1</p>
                </div>
                <p class="card-doctor-subtitle">Spécilités</p>
            </div>
            <div class="card-element">
                <div class="card-flex card-doctor-speciality" v-for="(speciality, index) in doctor.specialities" :key="index">
                    <p>{{alphabet[index]}}</p>
                    <p>{{'Description : ' + speciality.name}}</p>
                </div>
            </div>
            <button v-if="type === 'big'" class="btn btn-rdv">Profil du praticien</button>
            <button class="btn btn-rdv">Prendre rendez-vous</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Doctor',
    props: {
        doctorData: Object, 
        selected: Boolean,
        type: String
    },
    data () {
        return {
            doctor: this.doctorData,
            alphabet: ['A', 'B', 'C', 'D', 'E', 'F']
        }
    },
    methods: {
        getImgUrl(pathImg) {
            return require('@/assets/img/'+pathImg)
        }    
    },
    mounted(){
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/_variables.scss";

    .card-doctor{
        
        .card-speciality-title{
            border-left: 1px solid var(--color-grey-6);
            border-right: 1px solid var(--color-grey-6);
            margin-bottom: 1.6rem;
            color: var(--color-grey-6);
            transition: 0.5s ease-in-out;
            font-weight: 700;

            &:hover{
                color: var(--color-grey-1);
                border-left: 1px solid var(--color-grey-1);
                border-right: 1px solid var(--color-grey-1);
            }
            p{
                width: 100%;
                padding: 3.4rem 0;
                text-align: center;
            }
        }

        .card-img{
            width: 100%;
            height: auto;
            border-radius: .8rem;
        }

        .card-doctor-info{
            background-color: var(--color-neutral);
            padding: 48px 24px;
            filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.04));
            border-radius: 8px;

            .card-element{
                margin-bottom: 2.4rem;

                h3{
                    color: var(--color-grey-1);
                    span{
                        font-weight: 700;
                    }
                }

                .card-doctor-subtitle{
                    @extend .font-size-3;
                    font-weight: normal;
                }

                .card-flex{
                    display: flex;
                    justify-content: space-between;
                    
                    &:last-child{
                        text-align: right;
                    }

                    &.card-doctor-speciality{
                        padding: .8rem 0;
                        border-bottom: 1px solid var(--color-grey--50);
                        *{
                            font-weight: 700;
                        }
                    }
                }
            }
        }
    }

</style>