import { createApp } from 'vue';
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import responsiveHelper from './mixins/responsiveHelper';
import { Section } from "@/components/layer.components"

import './assets/scss/style.scss'

const app = createApp(App);
app.use(createPinia())
app.use(router);
app.mixin(responsiveHelper);
app.component('Section', Section);
app.mount('#app');