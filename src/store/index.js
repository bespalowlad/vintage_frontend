import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
        SEND_DATA: async ({ commit }, data) => {
            console.log('data to send ', data);
            const endpoint = 'http://httpbin.org/post';

            axios.post(endpoint, data)
                .then((res) => {
                    console.log('res ', res);
                })
                .catch(({ response }) => {
                    console.log('error ', response);
                });
        },
    },
});
