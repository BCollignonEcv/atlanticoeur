<template>
    <div class="cabinet-description">
        <template v-if="typeDescription === 'full'">
            <div class="full">
                <p class="description_item-title"><span>{{description.number}}</span>{{description.address}}</p>
                <p class="description_item-title"><span>{{description.postalCode}}</span>{{description.city}}</p>
                <div class="description_item-singleList">
                    <div class="l_container description_item-single">
                        <p class="l_col s6">Numéro de téléphone :</p>
                        <p class="l_col s6"><a :href="getPhone()">{{description.phone}}</a></p>
                    </div>
                    <div class="l_container description_item-single">
                        <p class="l_col s6">Adresse mail :</p>
                        <p class="l_col s6"><a :href="getEmail()">{{description.email}}</a></p>
                    </div>
                    <div class="l_container description_item-single">
                        <p class="l_col s4">Horaires :</p>
                        <p class="l_col s4">Du {{description.horaires.days[0]}} <br> De {{description.horaires.hours[0]}}</p>
                        <p class="l_col s4">Au {{description.horaires.days[1]}} <br> A {{description.horaires.hours[1]}}</p>
                    </div>
                    <div class="l_container-bottom">
                        <!-- <div class="fakeButton l_container" @click="isModalVisible = !isModalVisible"> -->
                        <div class="fakeButton l_container">
                            <!-- <p class="l_col s9">Nous téléphoner</p> -->
                            <p class="l_col s9"><a :href="getPhone()">Nous téléphoner</a></p>
                            <p class="l_col s3 align-right">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 16L7 8L25 16L7 24L11 16ZM11 16L14.5 16" stroke="#838383" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </p>
                        </div>
                        <div class="fakeButton" @click="isGoogleMapVisible = !isGoogleMapVisible">
                            <div class="l_container">
                                <p class="l_col s9">Carte</p>
                                <p class="l_col s3 align-right">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 15V9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9V15L23 15C23.5523 15 24 15.4477 24 16C24 16.5523 23.5523 17 23 17L17 17V23C17 23.5523 16.5523 24 16 24C15.4477 24 15 23.5523 15 23V17H9C8.44772 17 8 16.5523 8 16C8 15.4477 8.44772 15 9 15H15Z" fill="#838383"/>
                                    </svg>
                                </p>
                            </div>
                            <div v-show="isGoogleMapVisible">
                                <GoogleMap />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="l_container">
                <div class="l_col l_leftSide">
                    <h3>{{description.city}}</h3>
                </div>
                <div class="l_col l_rightSide">
                    <h3>{{description.name}}</h3>
                    <h3>{{description.number}} {{description.address}}</h3> 
                </div>
            </div>
            <!-- <div class="cabinet-description-content">
                <p>{{description.content}}</p>
            </div> -->
        </template>
        <Modal v-show="isModalVisible" @close="closeModal">
            <PhoneIframe :data="description"/>
        </Modal>
    </div>
</template>

<script>
import Modal from "@/components/global/Modal"
import PhoneIframe from "@/components/modal/Phone"
import GoogleMap from "@/components/modal/GoogleMap"

export default {
    components: {
        Modal, PhoneIframe, GoogleMap
    },
    props: {
        data: Object,
        typeDescription: String
    },
    data() {
        return {
            description: this.data,
            displayCart: false,
            isModalVisible: false,
            isGoogleMapVisible: false,
            closeModal: false
        }
    },
    methods: {
        getPhone(){
            return 'tel:'+this.description.phone
        },
        getEmail(){
            return 'mailto:'+this.description.email
        },
    },
    mounted () {
    }
}
</script>

<style lang="scss" scoped>
    .cabinet-description{
        & .full{
            .description_item-title{
                @include font-size-3;
                font-weight: 700;
                width: 100%;

                span{
                    width: 30%;
                    display: inline-block;
                }
            }
            .description_item-singleList{
                margin-top: $margin-1*2;

                div.description_item-single{
                    padding: $margin-6 0;
                    border-top: 1px solid $color-grey-6;

                    &:last-of-type{
                        border-bottom: 1px solid $color-grey-6;
                    }

                    p{
                        font-weight: 700;
                    }

                    a{
                        @include hoverLink;
                    }
                }
            }
            .fakeButton{
                background-color: white;
                padding: $margin-6 $margin-5;
                border-radius: $borderRadius-2;
                transition: height .5s ease;
                margin: $margin-4 $margin-4 0 $margin-4;

                &~.fakeButton{
                    margin-top: $margin-5;
                    margin-bottom: $margin-4;
                }
                
                p,a{
                    @include font-size-3;
                    font-weight: 700;
                    @include hoverLink;
                }

                svg{
                    height: 2.8rem;
                }
            }
        }
        .cabinet-description-content {
            margin-top: $margin-1;
            padding-right: $margin-1*5;
            text-align: justify;
            text-justify: inter-word;

            p{
                @include font-size-3;
            }
        }
    }
</style>