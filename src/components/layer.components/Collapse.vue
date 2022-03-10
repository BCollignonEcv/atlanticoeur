<template>
  <div class="c_collapse">
    <div class="collapse-header" @click="toggleCollapse">
        <slot name="header"/>
    </div>
    <div class="collapse-content" ref="content">
        <slot name="content"/>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        settings: Object,
        selected: {
            type: Boolean,
            default: false,
        },
    },
    data(){
        return {
            state: {
                "close": "+", 
                "open": "−"
            },
        }
    },
    computed: {
        active() {return this.selected},
    },
    mounted(){
        if(this.active){
            this.toggleCollapse();
        }
    },
    updated(){
        console.log(this.active)
        if(this.active){
            this.toggleCollapse();
        }
    },
    methods:{
        toggleCollapse(){
            let content = this.$refs.content;
            let icon = 'collapseIcon' in this.$parent.$refs ? this.$parent.$refs.collapseIcon : null
            content.classList.toggle("active");
            if (content.style.maxHeight){
                icon.innerHTML = this.state.close;
                content.style.maxHeight = null; 
            } else {
                icon.innerHTML = this.state.open;
                content.style.maxHeight = content.scrollHeight + "px";
            }
            this.active = !this.active
        }
    },
}
</script>

<style lang="scss">
    .c_collapse{
        .collapse-content{
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.2s ease-out;
        }
    }
</style>