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
                    <h4>Docteur <span>{{ doctor.firstName + ' ' + doctor.lastName}}</span></h4>
                    <p class="card-doctor-subtitle">Secteur 1</p>
                </div>
                <p class="card-doctor-subtitle">Spécilités</p>
            </div>
            <div class="card-element">
                <div class="card-flex card-doctor-speciality" v-for="(speciality, index) in doctor.specialities" :key="index">
                    <p>{{alphabet[index]}}</p>
                    <p>{{speciality.name}}</p>
                </div>
            </div>
            <button v-if="type === 'big'" class="btn btn-rdv">Profil du praticien</button>
            <button class="btn btn-rdv" @click="takeAppointment">Prendre rendez-vous</button>
            <!-- <div>
                <iframe scrolling="no" src="{{ doctor.doctolib }}" style="height:304px; min-height: 304px; width: 80%"></iframe>
            </div> -->
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
            alphabet: ['A', 'B', 'C', 'D', 'E', 'F'],
            jsonld: {}
        }
    },
    methods: {
        getImgUrl(pathImg) {
            return require('@/assets/img/'+pathImg)
        },
        takeAppointment(){

        }
    },
    mounted(){
    }
}
</script>

<style lang="scss">

    .card-doctor{

        &:hover{
            .card-speciality-title{
                color: $color-grey-1;
                border-left: 1px solid $color-grey-1;
                border-right: 1px solid $color-grey-1;
            }
        }
        
        .card-speciality-title{
            border-left: 1px solid $color-grey-6;
            border-right: 1px solid $color-grey-6;
            margin-bottom: 1.6rem;
            color: $color-grey-6;
            transition: 0.5s ease-in-out;

            p{
                @extend .font-size-4;
                font-weight: 700;
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
            background-color: $color-neutral;
            padding: 48px 24px;
            filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.04));
            border-radius: 8px;

            .card-element{
                margin-bottom: 2.4rem;

                h4{
                    color: $color-grey-1;
                    span{
                        font-weight: 700;
                    }
                }

                .card-doctor-subtitle{
                    @extend .font-size-4;
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
                        border-bottom: 1px solid $color-grey--50;
                        *{
                            font-weight: 700;
                        }
                    }
                }
            }
        }
    }

</style>