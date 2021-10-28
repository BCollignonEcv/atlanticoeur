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
            <button v-if="type === 'big'" @click="scrollToDoctor(doctor.id)" class="btn btn-rdv">Profil du praticien</button>
            <button class="btn btn-rdv" @click="showModal()">Prendre rendez-vous</button>
            <Modal                     
                v-show="isModalVisible"
                @close="closeModal">
                <Doctolib 
                    :data-doctor="doctor"
                />
            </Modal>
        </div>
    </div>
</template>

<script>

import Modal from "@/components/global/Modal"
import Doctolib from "@/components/modal/doctolib"

export default {
    name: 'Doctor',
    components: {
        Modal, Doctolib
    },
    props: {
        doctorData: Object, 
        type: String
    },
    data () {
        return {
            doctor: this.doctorData,
            alphabet: ['A', 'B', 'C', 'D', 'E', 'F'],
            isModalVisible: false
        }
    },
    methods: {
        getImgUrl(pathImg) {
            return require('@/assets/img/'+pathImg)
        },
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        scrollToDoctor(target){
            alert(target)
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
        
        .card-speciality-title{
            border-left: 1px solid $color-grey-6;
            border-right: 1px solid $color-grey-6;
            margin-bottom: 1.6rem;
            color: $color-grey-6;
            transition: 0.5s ease-in-out;

            p{
                @include font-size-4;
                @include font-bold;
                width: 100%;
                padding: 3.4rem 0;
                text-align: center;
            }
        }

        .card-img{
            width: 100%;
            height: auto;
            border-radius: $borderRadius-2;
        }

        .card-doctor-info{
            background-color: $color-neutral;
            padding: 48px 24px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0, 0.04);
            // filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.04));
            border-radius: $borderRadius-2;

            .card-element{
                margin-bottom: 2.4rem;

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
                    display: flex;
                    justify-content: space-between;
                    
                    &:last-child{
                        text-align: right;
                    }

                    &.card-doctor-speciality{
                        padding: .8rem 0;
                        border-bottom: 1px solid $color-grey--50;
                        *{
                            @include font-bold;
                        }
                    }
                }
            }
        }
    }

</style>