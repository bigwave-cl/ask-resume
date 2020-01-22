import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import inject from './utils/inject.js';
import './utils/vee-validate.js';

Vue.config.productionTip = false;
Vue.use(inject);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
