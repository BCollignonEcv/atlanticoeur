import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import responsiveHelper from './mixins/responsiveHelper';
import customSection from "@/components/layer.components/Section"

import './assets/scss/style.scss'

const app = createApp(App);
app.mixin(responsiveHelper);
app.component('customSection', customSection);
app.use(router);
app.mount('#app');