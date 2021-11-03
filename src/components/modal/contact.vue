<template>
    <div class="contact_iframe">
        <div class="contact_iframe-navigation">
            <div class="navigation-item" @click="displayPhone()"><p>Phone</p></div>
            <div class="navigation-item" @click="displayEmail()"><p>Mail</p></div>
        </div>
        <div class="contact_iframe-content">
            <transition name="flip">
                <p v-show="showPhone">{{data.phoneDisplay}}</p>
            </transition>
            <transition name="flip">
                <p v-show="showEmail">{{data.email}}</p>
            </transition>
        </div>
    </div>
</template>

<script>

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

            &:first-of-type::before{
                border-top: 1px solid $color-grey-1;
            }
            &::before{
                content: "";
                position: absolute;
                width: $navigationMargin;
                height: 100%;
                border-bottom: 1px solid $color-grey-1;
            }
            
            p{
                @include font-bold;
                @include font-size-4;
                @include hover;
                padding: $margin-5*1.5 $navigationMargin;
            }
        }

        .contact_iframe-content{
            flex-grow: 10;
            p{
                @include font-size-xlarge;
                @include font-bold;
                margin-right: $navigationSize;
                text-align: center;
            }
        }
    }
</style>