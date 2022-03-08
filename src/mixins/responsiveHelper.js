export default {
    data() {
        return {
            responsiveDisplay: {
                "mobile": true,
                "tablette": false,
                "desktop": false,
            },
            customBreakpoints: {
                "mobile": 768,
                "tablette": 992,
                "desktop": 1440
            }
        }
    },
    methods: {
        isDisplay: function() {
            let userViewPort = document.documentElement.clientWidth;
            if (userViewPort < this.customBreakpoints.mobile) {
                this.responsiveDisplay.mobile = true;
                this.responsiveDisplay.tablette = false;
                this.responsiveDisplay.desktop = false;
            } else if (userViewPort > this.customBreakpoints.mobile && userViewPort < this.customBreakpoints.tablette) {
                    this.responsiveDisplay.mobile = true;
                    this.responsiveDisplay.tablette = true;
                    this.responsiveDisplay.desktop = false;
            } else {
                this.responsiveDisplay.mobile = true;
                this.responsiveDisplay.tablette = true;
                this.responsiveDisplay.desktop = true;
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