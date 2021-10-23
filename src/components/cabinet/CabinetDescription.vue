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
                    <div>
                        <div class="fakeButton">
                            <p>Nous téléphoner</p>
                            <span></span>
                        </div>
                        <div class="fakeButton" @click="displayCart = !displayCart">
                            <p>Carte</p>
                            <span></span>
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
            <div class="cabinet-description-content">
                <p>{{description.content}}</p>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    components: {
    },
    props: {
        data: Object,
        typeDescription: String
    },
    data() {
        return {
            description: this.data,
            displayCart: false
        }
    },
    methods: {
        getPhone(){
            return 'telto:'+this.description.phone
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
                }
            }

            .fakeButton{
                background-color: white;
                padding: $margin-6;
                margin-bottom: $margin-4;
                @include font-size-3;
            }
        }
        .cabinet-description-content {
            margin-top: $margin-1;

            p{
                @include font-size-3;
            }
        }
    }
</style>