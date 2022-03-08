<template>
    <div class="footer_overlay">
        <div class="footer_overlay-item">
            <div class="item_container">
                <p class="item-title">Le cabinet</p>
                <div class="contact-container" @click="appStore.showModal('contact')">
                    <div class="contact">
                        <p>Tel.</p> 
                        <p class="link">{{company.phoneDisplay}}</p> 
                    </div>
                    <div class="contact">
                        <p>Mail</p> 
                        <p class="link">{{company.email}}</p> 
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_overlay-item">
            <router-link to="/Praticiens">
                <div class="item_container">
                    <p class="item-title link" >Rendez-vous via Doctolib</p>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 16L26 16M26 16L19 23M26 16L19 9" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { useAppStore } from '@/stores/App.store'
import { useDataStore } from '@/stores/Data.store'

export default {
    components: {},
    props: {},
    setup() {
        const appStore = useAppStore();
        const dataStore = useDataStore();
        return { appStore, dataStore }
    },
    computed: {
        company() { return this.dataStore.getCompany }
    },
    methods: {},
    mounted () {},
}
</script>

<style lang="scss" scoped>
    .footer_overlay{
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 50vw;
        z-index: 50;
        @include flexContainer($align: stretch);

        .footer_overlay-item{
            flex: 1;
            border-radius: $borderRadius-2;
            background-color: $color-grey-1--50;
            backdrop-filter: blur(16px);
            padding: $margin-5 0;

            .item_container{
                border-left: 1px solid $color-neutral;
                padding: $margin-5 $margin-5;
                height: 100%;
                @include flexContainer($justify: space-between, $align: center);

                .item-title{
                    @include font-bold;
                    @include font-size-3;
                }

                .contact-container{
                    border-top: 1px solid $color-neutral;
                    border-bottom: 1px solid $color-neutral;
                    width: 50%;
                    padding: $margin-5 0;

                    .contact{
                        display: inline-block;
                        @include font-bold;
                        @include flexContainer($justify: space-between);
                    }
                }

                .link{
                    @include hover;
                }
            }
        }

        @media screen and (max-width: $breackpoint-desktop)
        {
            &{
                width: 90vw;
            }
        }
    }
</style>