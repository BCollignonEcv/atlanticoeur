import { createApp } from 'vue';
import App from './App.vue'
import Header from './components/global/Header.vue'
import Footer from './components/global/Footer.vue'
import router from './router'


createApp(Header).use(router).mount('#header')
createApp(App).use(router).mount('#app')
createApp(Footer).use(router).mount('#footer')

