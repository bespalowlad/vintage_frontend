import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import Vuelidate from 'vuelidate';
import VueScrollTo from 'vue-scrollto';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

Vue.config.productionTip = false;

new Vue({
    store,
    render: (h) => h(App),
    created() {
        AOS.init({ disable: 'phone' });
    },
}).$mount('#app');
