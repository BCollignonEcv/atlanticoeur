export default {
    data() {
        return {
            responsiveDisplay: {
                "mobile": true,
                "tablette": false,
                "desktop": false,
            },
            breakpoints: {
                "mobile": 768,
                "tablette": 992,
                "desktop": 1440
            }
        }
    },
    methods: {
        isDisplay: function() {
            let userViewPort = document.documentElement.clientWidth;
            if (userViewPort > this.breakpoints.mobile) {
                this.responsiveDisplay.tablette = true;
            } else {
                this.responsiveDisplay.tablette = false;
            }
            if (userViewPort < this.breakpoints.tablette) {
                this.responsiveDisplay.desktop = true;
            } else {
                this.responsiveDisplay.desktop = false;
            }
        }
    },
    mounted() {
        this.isDisplay();
        window.addEventListener('resize', this.isDisplay);
    },
    unmounted() {
        window.removeEventListener('resize', this.isDisplay);
    },
}