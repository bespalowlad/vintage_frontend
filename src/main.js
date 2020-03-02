import 'aos/dist/aos.css';
import 'vue-flash-message/dist/vue-flash-message.min.css';

import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import Vuelidate from 'vuelidate';
import VueScrollTo from 'vue-scrollto';
import AOS from 'aos';
import VueFlashMessage from 'vue-flash-message';

import App from './App.vue';
import store from './store';

Vue.use(VueScrollTo);
Vue.use(Vuelidate);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyChjQ7y-Unq0NHD_032eCEvBFy1MT3F7os',
        libraries: 'places',
    },
});
Vue.use(VueFlashMessage);

Vue.config.productionTip = false;

new Vue({
    store,
    render: (h) => h(App),
    created() {
        AOS.init({ disable: 'phone' });
    },
}).$mount('#app');
