<template>
    <template v-if="responsiveDisplay.tablette">
        <div class="card-doctor" :class="{'big': type === 'big', 'selected': isSelected}">
            <div v-if="type === 'big'">
                <div class="card-speciality-title">
                    <p>{{doctor.doctorName}}</p>
                </div>
                <figure class="card-figure">
                    <img class="card-img" :src="getImgUrl(doctor.pathImg)" alt="" srcset="">
                </figure>
            </div>
            <div class="card-doctor-info">
                <div class="card-element">
                    <div class="card-flex">
                        <h4>Docteur <span>{{ doctor.firstName + ' ' + doctor.lastName}}</span></h4>
                        <p class="card-doctor-subtitle">Secteur {{ doctor.conventionType }}</p>
                    </div>
                </div>
                <div class="card-element">
                    <div class="card-flex card-doctor-speciality" v-for="(speciality, index) in doctor.specialities" :key="index">
                        <p>{{speciality.name}}</p>
                    </div>
                    <div v-if="Object.keys(doctor.specialities).length === 1" class="card-flex card-doctor-speciality">
                        <p>_</p>
                    </div>
                </div>
                <button v-if="type === 'big'" @click="moreAbout()" class="btn btn-rdv">Profil du praticien</button>
                <button class="btn btn-rdv" @click="takeAppointment()">Prendre rendez-vous</button>
            </div>
        </div>
    </template>
    <template v-else>
        <!-- Doctor Card - Mobile display -->
        <div class="card-doctor">
            <div>
                <figure class="card-figure">
                    <img class="card-img" :src="getImgUrl(doctor.pathImg)" alt="" srcset="">
                </figure>
            </div>
            <div class="card-doctor-info">
                <div class="card-element">
                    <div class="card-flex">
                        <h4>Dr <span>{{doctor.lastName}}</span></h4>
                    </div>
                </div>
                <button class="btn btn-rdv" @click="moreAbout()" >Profil du praticien</button>
                <button class="btn btn-rdv" @click="takeAppointment()">Prendre RDV</button>
            </div>
        </div>
    </template>
</template>

<script>
import { useAppStore } from '@/stores/App.store'
import { useDataStore } from '@/stores/Data.store'

export default {
    name: 'Doctor',
    components: {},
    props: {
        doctorData: Object, 
        type: String,
        selected: Number
    },
    data () {
        return {
            doctor: this.doctorData,
            alphabet: ['A', 'B', 'C', 'D', 'E', 'F'],
        }
    },
    setup() {
        const appStore = useAppStore();
        const dataStore = useDataStore();
        return { appStore, dataStore }
    },
    computed: {
        isSelected: function(){
            return this.doctor.specialities.find(speciality => speciality.id === this.dataStore.activeSpeciality) ;
        }
    },
    methods: {
        getImgUrl(pathImg) {
            return require('@/assets/img/'+pathImg)
        },
        moreAbout() {
            this.dataStore.selectDoctor(this.doctor.id);
            let target = document.getElementById('doctorDescription-'+this.doctor.id);
            if(target){
                setTimeout(function(){ 
                    target.scrollIntoView({behavior: "smooth", block: "end"})
                }, 200);
            }
        },
        takeAppointment(){
            this.dataStore.selectDoctor(this.doctor.id);
            this.appStore.showModal('doctolib')
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
                color: $color-primary !important;
                border-color: $color-primary !important;
                transition: all .5s;
            }
        }

        &.selected{
            .btn.btn-rdv{
                border-color: $color-primary;
                color: $color-primary;
            }
        }
        
        .card-speciality-title{
            border-left: 1px solid $color-grey-6;
            border-right: 1px solid $color-grey-6;
            margin-bottom: 1.6rem;
            color: $color-grey-4;
            transition: 0.5s ease-in-out;

            p{
                @include font-size-4;
                @include font-bold;
                width: 100%;
                padding: 3.4rem 0;
                text-align: center;
            }
        }

        .card-figure{
            position: relative;
            overflow: hidden;

            &:before{
                content: "";
                display: block;
                padding-top: 100%;
            }

            .card-img{
                width: 100%;
                position:  absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                color: white;
                text-align: center;
                border-radius: $borderRadius-2;
            }
        }

        .card-doctor-info{
            @include flexContainer($orientation: column, $justify: space-between);
            padding: $margin-6;
            border-radius: $borderRadius-2;

            .card-element{
                margin-bottom: 2.4rem;
                width: 100%;

                h4{
                    text-align: left;
                    color: $color-grey-1;
                    span{
                        @include font-bold;
                    }
                }

                .card-doctor-subtitle{
                    @include font-size-4;
                    @include font-regular;
                }

                .card-flex{
                    text-align: center;
                    &:last-child{}

                    &.card-doctor-speciality{
                        padding: .8rem 0;
                        border-bottom: 1px solid $color-grey-5;
                        *{
                            @include font-bold;
                        }
                    }
                }
            }
        }

        &.big{
            .card-doctor-info{
                height: auto;
            }
        }
    }
    @media screen and (max-width: $breackpoint-tablette){
        .card-doctor{
            &:hover{
                .card-speciality-title{
                }
            }

            &.selected{
                .btn.btn-rdv{}
            }
            
            .card-speciality-title{
                p{}
            }

            .card-figure{
                border-radius: 100%;

                &:before{}
                .card-img{}
            }

            .card-doctor-info{
                .card-element{
                    h4{
                        span{}
                    }

                    .card-doctor-subtitle{
                    }

                    .card-flex{
                        &:last-child{}

                        &.card-doctor-speciality{
                            *{
                            }
                        }
                    }
                }
            }

            &.big{
                .card-doctor-info{
                }
            }
        }
    }

    header{
        .btn.btn-rdv{
            border-color: $color-grey-5;
        }
    }

    @media screen and (min-width: $breackpoint-tablette){
        .card-doctor{
            &:hover{
                .card-speciality-title{
                    color: $color-primary !important;
                    border-color: $color-primary !important;
                    transition: all .5s;
                }
            }

            &.selected{
                .btn.btn-rdv{
                    border-color: $color-primary;
                    color: $color-primary;
                }
            }
            
            .card-speciality-title{
                border-left: 1px solid $color-grey-6;
                border-right: 1px solid $color-grey-6;
                margin-bottom: 1.6rem;
                color: $color-grey-5;
                transition: 0.5s ease-in-out;

                p{
                    @include font-size-4;
                    @include font-bold;
                    width: 100%;
                    padding: 3.4rem 0;
                    text-align: center;
                }
            }

            .card-figure{
                position: relative;
                overflow: hidden;

                &:before{
                    content: "";
                    display: block;
                    padding-top: 100%;
                }

                .card-img{
                    width: 100%;
                    position:  absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    color: white;
                    text-align: center;
                    border-radius: $borderRadius-2;
                }
            }

            .card-doctor-info{
                @include flexContainer($orientation: column, $justify: space-between);
                background-color: $color-neutral;
                padding: 48px 24px;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0, 0.1);
                height: 100%;
                border-radius: $borderRadius-2;

                .card-element{
                    margin-bottom: 2.4rem;
                    width: 100%;

                    h4{
                        color: $color-grey-1;
                        span{
                            @include font-bold;
                        }
                    }

                    .card-doctor-subtitle{
                        @include font-size-4;
                        @include font-regular;
                    }

                    .card-flex{
                        @include flexContainer($justify: space-between);
                        
                        &:last-child{
                            text-align: right;
                        }

                        &.card-doctor-speciality{
                            padding: .8rem 0;
                            *{
                                @include font-bold;
                            }
                        }
                    }
                }
            }

            &.big{
                .card-doctor-info{
                    height: auto;
                }
            }
        }
    }

</style>