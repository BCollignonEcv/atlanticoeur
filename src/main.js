import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import responsiveHelper from './mixins/responsiveHelper';
import loadingData from './mixins/loadingData';

import './assets/scss/style.scss'

const app = createApp(App);
app.mixin(responsiveHelper);
app.mixin(loadingData);
app.use(router);
app.mount('#app');