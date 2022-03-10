<template>
    <button @click="link()"
        class="btn"
        :class="{ 
            'btn_circle': style.circle,
        }"
        :style="styleCustom"
    >
        <slot name="icone"></slot>
        <slot name="text"></slot>
    </button>
</template>

<script>
export default {
    components: {},
    props: {
        shape: { type: String, default: 'square'},
        padding: { type: Array, default: () => [2, .8] },
        desktop: { type: Array, default: () => ['desktop', 'tablette', 'mobile'] },
        targetLink: { type: Object, default: () => ({
            url: '', 
            type: ''
            }) 
        },
    },
    data() {
        return {
            style: { 
                circle: false
            },
        }
    },
    created() {
        if(this.shape === 'circle'){
            this.style.circle = true;
        }
    },
    computed: {
      styleCustom () {
        return 'padding: ' + this.padding[0] + 'rem ' + this.padding[1] + 'rem';
      }
    },
    mounted() {
    },
    methods: {
        link(){
            if(this.targetLink.type === 'internal'){
                document.getElementsByTagName("section")[1].scrollIntoView({ behavior: 'smooth' });
            }else if(this.targetLink.type === 'external'){
                window.open(this.targetLink.url, '_blank');
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .btn {
        border: 1px solid $color-grey-5;
        height: fit-content;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        @include hoverFull;

        &_circle {
            border-radius: 100%;
        }

        @media screen and (max-width: $breackpoint-desktop){
            &{
                display: none;
            }
        }

    }


</style>