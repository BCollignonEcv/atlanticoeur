<template>
    <div class="contact_iframe">
        <div class="contact_iframe-navigation">
            <div class="navigation-item" @click="displayPhone()" :class="{'active': showPhone}"><p>Phone</p></div>
            <div class="navigation-item" @click="displayEmail()" :class="{'active': showEmail}"><p>Mail</p></div>
        </div>
        <div class="contact_iframe-content">
            <transition name="flip">
                <a v-show="showPhone" :href="'tel:+33'+company.phoneDisplay">{{company.phoneDisplay}}</a>
            </transition>
            <transition name="flip">
                <a v-show="showEmail" :href="'mailto:'+company.email">{{company.email}}</a>
            </transition>
        </div>
    </div>
</template>

<script>
import { useAppStore } from '@/stores/App.store'
import { useDataStore } from '@/stores/Data.store'

export default {
    components: {},
    props: {
        data: Object,
    },
    data() {
        return {
            showPhone: true,
            showEmail: false
        }
    },
    setup() {
        const appStore = useAppStore();
        const dataStore = useDataStore();
        return { appStore, dataStore }
    },
    computed:{
        company(){ return this.dataStore.getCompany}
    },
    methods: {
        displayPhone(){
            this.showEmail = false;
            this.showPhone = true;
        },
        displayEmail(){
            this.showPhone = false;
            this.showEmail = true;
        },
    },
    mounted() {

    }
}
</script>

<style lang="scss">
    $navigationMargin: 2.5vw;
    $navigationSize: 10vw;

    .contact_iframe{
        @include flexContainer($align: center);
        height: 80vh;
            pointer-events: unset;

        .contact_iframe-navigation{
            width: $navigationSize;
        }
        div.navigation-item{
            position: relative;
            color: $color-grey-4;

            &:first-of-type::before{
                border-top: 1px solid $color-grey-4;
            }
            &::before{
                content: "";
                position: absolute;
                width: $navigationMargin;
                height: 100%;
                border-bottom: 1px solid $color-grey-4;
            }
            
            p{
                @include font-bold;
                @include font-size-4;
                @include hover;
                padding: $margin-5*1.5 $navigationMargin;
            }

            &.active{
                color: $color-grey-1;
                
                &::before{
                    border-color: $color-grey-1;
                }
            }
        }

        .contact_iframe-content{
            flex-grow: 10;
            a{
                display: block;
                @include font-size-xlarge;
                @include font-bold;
                margin-right: $navigationSize;
                text-align: center;
            }
        }
    }
</style>